// Firebase 初始化
const firebaseConfig = {
    apiKey: "AIzaSyCQEXz8OIzbb9dDxnz52tymNnYofGDEczQ",
    authDomain: "subscription-member-system.firebaseapp.com",
    databaseURL: "https://subscription-member-system-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "subscription-member-system",
    storageBucket: "subscription-member-system.firebasestorage.app",
    messagingSenderId: "970681171187",
    appId: "1:970681171187:web:f3f86b743e27667a994b86"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();


// --- ▼▼▼ 翻譯邏輯 (修正後) ▼▼▼ ---

// 輔助函數：獲取當前語言
function getCurrentLang() {
    return localStorage.getItem('language') || 'zh';
}

// 語言翻譯字典
const translations = {
    'zh': {
        'page_title': '會員方案 - 廖嘉泰の會員管理系統',
        'header_title': '💎會員方案總覽',
        'header_subtitle': '查看所有可用的會員等級',
        'back_to_home': '返回首頁',
        'legend_title': '傳說會員',
        'legend_desc': '尊爵不凡的頂級會員，享受所有專屬權益。',
        'legend_b1': '<b>一次連續5把</b>',
        'legend_b2': '<b>5次/月 插隊額度</b>',
        'legend_b3': '<b>偶爾專屬同樂場</b>',
        'legend_list_title': '傳說會員名單',
        'diamond_title': '鑽石會員',
        'diamond_desc': '進階會員方案，解鎖更多獨特福利。',
        'diamond_b1': '<b>一次連續3把</b>',
        'diamond_b2': '<b>2次/月 插隊額度</b>',
        'diamond_list_title': '鑽石會員名單',
        'gold_title': '黃金會員',
        'gold_desc': '標準會員方案，開始您的會員之旅。',
        'gold_b1': '<b>一次連續3把</b>',
        'gold_list_title': '黃金會員名單',
        'duration_1': '1個月 (30天)',
        'duration_2': '3個月 (90天)',
        'duration_3': '5個月 (150天)',
        'loading_fail': '載入失敗',
        'no_members': '目前尚無會員',
    },
    'en': {
        // ▼▼▼ 這裡就是修正的地方 ▼▼▼
        'page_title': "Plans - Liao Jia-Tai's Member System", // 從 ' 改成 "
        // ▲▲▲ 修正結束 ▲▲▲
        'header_title': '💎Membership Plan Overview',
        'header_subtitle': 'View all available membership tiers',
        'back_to_home': 'Back to Home',
        'legend_title': 'Legend Member',
        'legend_desc': 'The premium top-tier membership, enjoy all exclusive benefits.',
        'legend_b1': '<b>5 Games in a row</b>',
        'legend_b2': '<b>5 Queue Jumps / month</b>',
        'legend_b3': '<b>Occasional exclusive games</b>',
        'legend_list_title': 'Legend Member Roster',
        'diamond_title': 'Diamond Member',
        'diamond_desc': 'Advanced membership plan, unlock more unique benefits.',
        'diamond_b1': '<b>3 Games in a row</b>',
        'diamond_b2': '<b>2 Queue Jumps / month</b>',
        'diamond_list_title': 'Diamond Member Roster',
        'gold_title': 'Gold Member',
        'gold_desc': 'Standard membership plan, start your journey here.',
        'gold_b1': '<b>3 Games in a row</b>',
        'gold_list_title': 'Gold Member Roster',
        'duration_1': '1 Month (30 Days)',
        'duration_2': '3 Months (90 Days)',
        'duration_3': '5 Months (150 Days)',
        'loading_fail': 'Failed to load',
        'no_members': 'No members yet'
    }
};

// 負責切換語言的函數
function setLanguage(lang) {
    // 1. 保存用戶偏好
    localStorage.setItem('language', lang);

    // 2. 更新按鈕的 .active 狀態
    document.querySelectorAll('.btn-lang').forEach(btn => {
        if (btn.getAttribute('onclick') === `setLanguage('${lang}')`) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 3. 翻譯所有帶 data-lang-key 的元素
    const langDict = translations[lang];
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.dataset.langKey;
        const translation = langDict[key];

        if (translation === undefined) {
            console.warn(`Missing translation for key: ${key} in lang: ${lang}`);
            return;
        }

        const isBenefit = key.startsWith('legend_b') || key.startsWith('diamond_b') || key.startsWith('gold_b');

        if (isBenefit) {
            el.innerHTML = translation;
        } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = translation;
        } else {
            const icon = el.innerHTML.match(/^(<.*?>|.*?<\/.*?>|💎|📝|⚙️|🔒|🚀|🏠|🔥|💛)/);
            if ((el.tagName === 'BUTTON' || el.tagName === 'A' || el.tagName === 'H2' || el.tagName === 'H4') && icon && icon[0].length < 20) {
                el.innerHTML = `${icon[0]} ${translation}`;
            } else {
                el.textContent = translation;
            }
        }
    });

    // 4. 重新載入動態列表
    if (typeof loadMemberLists === 'function') {
        loadMemberLists();
    }
}
// --- ▲▲▲ 翻譯邏輯結束 ▲▲▲ ---


// 匿名登入
firebase.auth().signInAnonymously().catch((error) => {
    console.error("Firebase 匿名登入失敗:", error);
});

// 監聽認證狀態
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("Firebase 認證成功，正在載入會員名單...");
        loadMemberLists();
    } else {
        console.log("Firebase 尚未認證...");
    }
    // 認證後，執行一次語言設定
    document.dispatchEvent(new Event('DOMContentLoaded'));
});

// 載入會員名單 (已修改，支援多語言)
async function loadMemberLists() {
    const lang = getCurrentLang();
    const trans = translations[lang];
    try {
        const membersSnapshot = await database.ref('members').once('value');
        const membersData = membersSnapshot.val() || {};
        
        const allMembers = Object.values(membersData);

        const now = Math.floor(Date.now() / 1000);
        
        const legendMembers = allMembers
            .filter(m => m.level === 'legend' && (m.remainingSeconds - (now - m.lastUpdateTime)) > 0 && !m.isAdmin)
            .map(m => m.nickname);

        const diamondMembers = allMembers
            .filter(m => m.level === 'diamond' && (m.remainingSeconds - (now - m.lastUpdateTime)) > 0 && !m.isAdmin)
            .map(m => m.nickname);
            
        const goldMembers = allMembers
            .filter(m => m.level === 'gold' && (m.remainingSeconds - (now - m.lastUpdateTime)) > 0 && !m.isAdmin)
            .map(m => m.nickname);

        renderList('legend-members', legendMembers);
        renderList('diamond-members', diamondMembers);
        renderList('gold-members', goldMembers);

    } catch (error) {
        console.error("載入會員名單失敗:", error);
        document.getElementById('legend-members').innerHTML = `<p style='color:red;'>${trans.loading_fail}</p>`;
        document.getElementById('diamond-members').innerHTML = `<p style='color:red;'>${trans.loading_fail}</p>`;
        document.getElementById('gold-members').innerHTML = `<p style='color:red;'>${trans.loading_fail}</p>`;
    }
}

// 顯示列表 (已修改，支援多語言)
function renderList(elementId, members) {
    const container = document.getElementById(elementId);
    const lang = getCurrentLang();
    const trans = translations[lang];
    
    if (!members || members.length === 0) {
        container.innerHTML = `<span class='member-badge' style='opacity: 0.7;'>${trans.no_members}</span>`;
        return;
    }
    
    container.innerHTML = ""; 
    
    members.forEach(nickname => {
        const badge = document.createElement('span');
        badge.className = 'member-badge';
        badge.textContent = nickname;
        container.appendChild(badge);
    });
}

// 頁面載入時，自動套用儲存的語言
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'zh'; // 預設為中文
    setLanguage(savedLang);
});