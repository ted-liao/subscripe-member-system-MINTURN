// --- ▼▼▼ 翻譯邏輯 (已移到最前面) ▼▼▼ ---

// 輔助函數：獲取當前語言
function getCurrentLang() {
    return localStorage.getItem('language') || 'zh';
}

// 語言翻譯字典
const translations = {
    'zh': {
        'page_title': '管理後台 - 廖嘉泰の會員管理系統',
        'admin_title': '⚙️ 管理後台',
        'app_subtitle': '📢 廖嘉泰の會員管理系統',
        'back_to_home': '🏠 返回前台',
        'login': '登入',
        'logout': '登出',
        'username': '使用者名稱',
        'username_placeholder': '請輸入使用者名稱',
        'password': '密碼',
        'password_placeholder': '請輸入密碼',
        'login_title_admin': '管理員登入',
        'session_control_title': '遊戲場次控制',
        'session_name_label': '場次名稱 (例如: 會員場)',
        'session_name_placeholder': 'CODM 會員場',
        'session_start_label': '預計開始時間',
        'session_start_note': '(留空則為立即)',
        'session_slots_label': '名額',
        'session_desc_label': '描述',
        'optional': '(選填)',
        'session_desc_placeholder': '地圖:...',
        'session_create_button': '開啟/預約場次',
        'session_close_button': '關閉場次',
        'queue_list_title': '目前排隊名單',
        'queue_clear_button': '清空名單',
        'queue_total_prefix': '總數: ',
        'queue_total_suffix': ' 人',
        'queue_empty': '目前沒有人排隊',
        'queue_remove_button': '移除',
        'code_admin_title': '兌換碼管理',
        'code_tab_generate': '產生新碼',
        'code_tab_unused': '未使用',
        'code_tab_used': '已使用',
        'code_level_label': '會員等級',
        'level_gold': '💛 黃金會員',
        'level_diamond': '💎 鑽石會員',
        'level_legend': '🔥 傳說會員',
        'code_days_label': '天數',
        'code_amount_label': '數量',
        'code_generate_button': '產生兌換碼',
        'code_no_unused': '沒有未使用的兌換碼',
        'code_no_used': '沒有已使用的兌換碼',
        'code_duration': '時長:',
        'code_created_date': '建立日期:',
        'code_delete_button': '刪除',
        'code_used_by': '使用者:',
        'code_used_date': '使用日期:',
        'member_admin_title': '會員管理',
        'member_tab_active': '生效中',
        'member_tab_expired': '已到期',
        'member_no_active': '沒有生效中的會員',
        'member_no_expired': '沒有已到期的會員',
        'member_edit_button': '編輯',
        'member_delete_button': '刪除',
        'member_uid_label': 'UID:',
        'member_platform_label': '平台:',
        'member_remaining_label': '剩餘時間:',
        'member_join_date_label': '加入日期:',
        'member_admin': '管理員',
        'backup_title': '系統備份',
        'backup_button': '立即導出 Excel 備份',
        'backup_last_time': '上次備份時間:',
        'backup_none': '尚未備份過',
        'change_password_title': '更改密碼',
        'current_password': '目前密碼',
        'current_password_placeholder': '請輸入目前密碼',
        'new_password': '新密碼',
        'password_reg_placeholder': '請輸入新密碼（至少6個字元）',
        'confirm_new_password': '確認新密碼',
        'confirm_password_placeholder': '請再次輸入新密碼',
        'confirm_change': '確認更改',
        'edit_member_title': '編輯會員',
        'edit_editing': '正在編輯:',
        'edit_remaining_time': '剩餘時間:',
        'edit_adjust_time': '手動調整時間',
        'edit_time_year': '年',
        'edit_time_month': '月',
        'edit_time_day': '天',
        'edit_time_hour': '時',
        'edit_add_time': '增加時間',
        'edit_reduce_time': '減少時間',
        'edit_modify_info': '修改會員資料',
        'edit_nickname': '暱稱',
        'edit_game_uid': 'CODM UID',
        'edit_level': '會員等級',
        'edit_platform': '平台',
        'edit_priority_quota': '插隊權限 (次數)',
        'edit_admin_perm': '管理員權限',
        'edit_set_admin': '設為管理員',
        'edit_save': '儲存變更',
        'level_legend_simple': '傳說',
        'level_diamond_simple': '鑽石',
        'level_gold_simple': '黃金',
        'session_status_open': '(開放中)',
        'session_status_none': '目前沒有遊戲場次',
        'session_status_prompt': '請填寫下方表單以開啟新場次',
        'time_year': '年',
        'time_month': '月',
        'time_day': '天',
        'time_hour': '時',
        'time_minute': '分',
        'time_second': '秒',
        'copy_ok': '✓ 已複製',
        'copy_fail': '複製失敗，請手動複製',
        'alert_login_prompt': '請輸入使用者名稱和密碼',
        'alert_login_wrong': '使用者名稱或密碼錯誤',
        'alert_login_no_perm': '權限不足。此頁面僅限管理員登入。',
        'alert_login_success': '管理員登入成功！',
        'alert_login_fail': '登入失敗，請稍後再試',
        'alert_logout': '已登出',
        'alert_op_fail': '操作失敗，請稍後再試',
        'alert_no_backup_data': '目前沒有會員資料可導出',
        'alert_backup_fail': '備份失敗，請稍後再試',
        'alert_session_confirm': '確定要開啟/預約場次嗎？',
        'alert_session_name': '名稱:',
        'alert_session_time': '時間:',
        'alert_session_open_success': '遊戲場次已開啟/預約！',
        'alert_session_open_fail': '開啟場次失敗',
        'alert_session_close_confirm': '確定要關閉目前的遊戲場次嗎？\n(這不會清空排隊名單)',
        'alert_session_close_success': '遊戲場次已關閉',
        'alert_session_close_fail': '關閉場次失敗',
        'alert_queue_remove_confirm': '確定要將 {username} 移出排隊嗎？',
        'alert_queue_remove_success': '{username} 已被移出排隊',
        'alert_queue_remove_fail': '移除失敗',
        'alert_queue_clear_confirm': '！警告！\n確定要清空所有排隊名單嗎？此操作無法復原。',
        'alert_queue_clear_success': '排隊名單已清空',
        'alert_queue_clear_fail': '清空失敗',
        'alert_code_invalid_days': '請輸入有效的天數',
        'alert_code_gen_confirm': '你確定要一次產生 {amount} 組兌換碼嗎？',
        'alert_code_gen_success': '成功產生 {amount} 組兌換碼！',
        'alert_code_gen_fail': '產生失敗',
        'alert_code_gen_list_title': '產生的新碼 (共 {amount} 組):',
        'alert_code_delete_confirm': '確定要刪除兌換碼 {code} 嗎？此操作無法復原。',
        'alert_code_delete_success': '兌換碼 {code} 已刪除',
        'alert_code_delete_fail': '刪除失敗',
        'alert_member_not_found': '找不到會員',
        'alert_time_invalid': '請輸入有效的時間',
        'alert_time_adjust_confirm': '確定要為 {username} {action} {timeText} 嗎？',
        'alert_time_add': '增加',
        'alert_time_reduce': '減少',
        'alert_time_adjust_success': '已{action}時間！',
        'alert_time_adjust_fail': '調整時間失敗',
        'alert_member_save_success': '會員資料已儲存',
        'alert_member_save_fail': '儲存會員失敗',
        'alert_member_empty_fields': '暱稱和 UID 不可為空',
        'alert_member_delete_admin': '不可刪除主要管理員帳號',
        'alert_member_delete_confirm': '！警告！\n確定要永久刪除會員 {username} 嗎？\n此操作無法復原。',
        'alert_member_delete_success': '會員 {username} 已被永久刪除',
        'alert_member_delete_fail': '刪除會員失敗',
        'alert_fill_all': '請填寫完整資訊',
        'alert_password_short': '新密碼至少需要6個字元',
        'alert_password_mismatch': '兩次輸入的新密碼不一致',
        'alert_current_password_wrong': '目前密碼錯誤',
        'alert_password_change_success': '密碼更改成功！',
        'alert_password_change_fail': '更改密碼失敗，請稍後再試'
    },
    'en': {
        'page_title': "Admin Panel - Ted's Member System",
        'admin_title': '⚙️ Admin Panel',
        'app_subtitle': "📢 Ted's Member System",
        'back_to_home': '🏠 Back to Front',
        'login': 'Login',
        'logout': 'Logout',
        'username': 'Username',
        'username_placeholder': 'Enter your username',
        'password': 'Password',
        'password_placeholder': 'Enter your password',
        'login_title_admin': 'Admin Login',
        'session_control_title': 'Game Session Control',
        'session_name_label': 'Session Name (e.g., Member Game)',
        'session_name_placeholder': 'CODM Member Game',
        'session_start_label': 'Expected Start Time',
        'session_start_note': '(Leave blank for immediate)',
        'session_slots_label': 'Slots',
        'session_desc_label': 'Description',
        'optional': '(Optional)',
        'session_desc_placeholder': 'Map:...',
        'session_create_button': 'Open/Schedule Session',
        'session_close_button': 'Close Session',
        'queue_list_title': 'Current Queue List',
        'queue_clear_button': 'Clear List',
        'queue_total_prefix': 'Total: ',
        'queue_total_suffix': ' People',
        'queue_empty': 'The queue is currently empty',
        'queue_remove_button': 'Remove',
        'code_admin_title': 'Activation Code Management',
        'code_tab_generate': 'Generate New',
        'code_tab_unused': 'Unused',
        'code_tab_used': 'Used',
        'code_level_label': 'Membership Level',
        'level_gold': '💛 Gold Member',
        'level_diamond': '💎 Diamond Member',
        'level_legend': '🔥 Legend Member',
        'code_days_label': 'Days',
        'code_amount_label': 'Amount',
        'code_generate_button': 'Generate Codes',
        'code_no_unused': 'No unused codes',
        'code_no_used': 'No used codes',
        'code_duration': 'Duration:',
        'code_created_date': 'Created:',
        'code_delete_button': 'Delete',
        'code_used_by': 'Used By:',
        'code_used_date': 'Used Date:',
        'member_admin_title': 'Member Management',
        'member_tab_active': 'Active',
        'member_tab_expired': 'Expired',
        'member_no_active': 'No active members',
        'member_no_expired': 'No expired members',
        'member_edit_button': 'Edit',
        'member_delete_button': 'Delete',
        'member_uid_label': 'UID:',
        'member_platform_label': 'Platform:',
        'member_remaining_label': 'Time Left:',
        'member_join_date_label': 'Join Date:',
        'member_admin': 'Admin',
        'backup_title': 'System Backup',
        'backup_button': 'Export Excel Backup Now',
        'backup_last_time': 'Last Backup Time:',
        'backup_none': 'Never backed up',
        'change_password_title': 'Change Password',
        'current_password': 'Current Password',
        'current_password_placeholder': 'Enter your current password',
        'new_password': 'New Password',
        'password_reg_placeholder': 'Enter new password (at least 6 characters)',
        'confirm_new_password': 'Confirm New Password',
        'confirm_password_placeholder': 'Enter new password again',
        'confirm_change': 'Confirm Change',
        'edit_member_title': 'Edit Member',
        'edit_editing': 'Editing:',
        'edit_remaining_time': 'Time Left:',
        'edit_adjust_time': 'Adjust Time Manually',
        'edit_time_year': 'Y',
        'edit_time_month': 'M',
        'edit_time_day': 'D',
        'edit_time_hour': 'H',
        'edit_add_time': 'Add Time',
        'edit_reduce_time': 'Reduce Time',
        'edit_modify_info': 'Modify Member Info',
        'edit_nickname': 'Nickname',
        'edit_game_uid': 'CODM UID',
        'edit_level': 'Member Level',
        'edit_platform': 'Platform',
        'edit_priority_quota': 'Priority Quota (Uses)',
        'edit_admin_perm': 'Admin Permission',
        'edit_set_admin': 'Set as Admin',
        'edit_save': 'Save Changes',
        'level_legend_simple': 'Legend',
        'level_diamond_simple': 'Diamond',
        'level_gold_simple': 'Gold',
        'session_status_open': '(Open)',
        'session_status_none': 'No game session is active',
        'session_status_prompt': 'Fill out the form below to open a new session',
        'time_year': 'y',
        'time_month': 'm',
        'time_day': 'd',
        'time_hour': 'h',
        'time_minute': 'min',
        'time_second': 's',
        'copy_ok': '✓ Copied',
        'copy_fail': 'Copy failed, please copy manually',
        'alert_login_prompt': 'Please enter username and password',
        'alert_login_wrong': 'Incorrect username or password',
        'alert_login_no_perm': 'Insufficient permissions. This page is for admins only.',
        'alert_login_success': 'Admin login successful!',
        'alert_login_fail': 'Login failed, please try again later',
        'alert_logout': 'Logged out',
        'alert_op_fail': 'Operation failed, please try again later',
        'alert_no_backup_data': 'No member data to export',
        'alert_backup_fail': 'Backup failed, please try again later',
        'alert_session_confirm': 'Are you sure you want to open/schedule this session?',
        'alert_session_name': 'Name:',
        'alert_session_time': 'Time:',
        'alert_session_open_success': 'Game session has been opened/scheduled!',
        'alert_session_open_fail': 'Failed to open session',
        'alert_session_close_confirm': "Are you sure you want to close the current session?\n(This will not clear the queue)",
        'alert_session_close_success': 'Game session closed',
        'alert_session_close_fail': 'Failed to close session',
        'alert_queue_remove_confirm': 'Are you sure you want to remove {username} from the queue?',
        'alert_queue_remove_success': '{username} has been removed from the queue',
        'alert_queue_remove_fail': 'Failed to remove',
        'alert_queue_clear_confirm': '！WARNING！\nAre you sure you want to clear the entire queue? This action cannot be undone.',
        'alert_queue_clear_success': 'Queue has been cleared',
        'alert_queue_clear_fail': 'Failed to clear queue',
        'alert_code_invalid_days': 'Please enter valid days',
        'alert_code_gen_confirm': 'Are you sure you want to generate {amount} codes at once?',
        'alert_code_gen_success': 'Successfully generated {amount} codes!',
        'alert_code_gen_fail': 'Failed to generate codes',
        'alert_code_gen_list_title': 'Generated new codes (Total {amount}):',
        'alert_code_delete_confirm': 'Are you sure you want to delete code {code}? This cannot be undone.',
        'alert_code_delete_success': 'Code {code} has been deleted',
        'alert_code_delete_fail': 'Failed to delete code',
        'alert_member_not_found': 'Member not found',
        'alert_time_invalid': 'Please enter a valid time',
        'alert_time_adjust_confirm': 'Are you sure you want to {action} {timeText} for {username}?',
        'alert_time_add': 'add',
        'alert_time_reduce': 'reduce',
        'alert_time_adjust_success': 'Time has been {action}!',
        'alert_time_adjust_fail': 'Failed to adjust time',
        'alert_member_save_success': 'Member data saved',
        'alert_member_save_fail': 'Failed to save member data',
        'alert_member_empty_fields': 'Nickname and UID cannot be empty',
        'alert_member_delete_admin': 'Cannot delete the main admin account',
        'alert_member_delete_confirm': '！WARNING！\nAre you sure you want to permanently delete {username}?\nThis action cannot be undone.',
        'alert_member_delete_success': 'Member {username} has been permanently deleted',
        'alert_member_delete_fail': 'Failed to delete member',
        'alert_fill_all': 'Please fill in all fields',
        'alert_password_short': 'New password must be at least 6 characters',
        'alert_password_mismatch': 'The new passwords do not match',
        'alert_current_password_wrong': 'Current password is wrong',
        'alert_password_change_success': 'Password changed successfully!',
        'alert_password_change_fail': 'Password change failed, please try again later'
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

        // 根據不同標籤類型賦值
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            if (el.type === 'datetime-local') {
                // 不翻譯 datetime-local 的 placeholder
            } else {
                el.placeholder = translation;
            }
        } else if (el.tagName === 'OPTION') {
             el.textContent = translation;
        } else {
            // 保留按鈕/連結前的圖示
            const icon = el.innerHTML.match(/^(<.*?>|.*?<\/.*?>|💎|📝|⚙️|🔒|🚀|🏠|🔥|💛|🎮|❌|👥|🔑|🧑‍🤝‍🧑|📈|🗂️)/);
            if ((el.tagName === 'BUTTON' || el.tagName === 'A' || el.tagName === 'H2') && icon && icon[0].length < 20) {
                
                // ▼▼▼ 這是針對 <button><span>...</span> (<span>...</span>)</button> 的特殊處理 ▼▼▼
                const innerSpan = el.querySelector('span[data-lang-key]');
                if (innerSpan) {
                     innerSpan.textContent = translation;
                } 
                // ▲▲▲ 特殊處理結束 ▲▲▲
                
                else {
                    el.innerHTML = `${icon[0]} ${translation}`;
                }
            } else {
                el.textContent = translation;
            }
        }
    });

    // 4. 動態翻譯登入後的按鈕 (如果存在)
    updateUserSection(); // 重新整理 user section 就會自動翻譯
    
    // 5. 如果儀表板已載入，重新整理動態內容
    if (document.getElementById('adminDashboard').style.display === 'block') {
        refreshAdminDashboard();
    }
}
// --- ▲▲▲ 翻譯邏輯結束 ▲▲▲ ---


// --- ▼▼▼ 核心 Javascript 開始 ▼▼▼ ---

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

// 【修正】只初始化一次
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();

let isAuthReady = false;
let isDomReady = false; 

firebase.auth().onAuthStateChanged((user) => {
    console.log('✅ Firebase Auth 狀態改變');
    isAuthReady = true;
    if (user) {
        console.log('✅ 用戶已登入 (匿名或非匿名):', user.uid);
    } else {
        console.log('⏳ 嘗試匿名登入...');
        firebase.auth().signInAnonymously().catch((error) => {
            console.error('❌ 匿名登入失敗:', error);
            alert('系統初始化失敗，請重新整理頁面');
        });
    }
    tryInitialize();
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ DOM 已載入');
    isDomReady = true;
    tryInitialize();
});

function tryInitialize() {
    if (isDomReady && isAuthReady) {
        console.log('🚀 DOM 與 Firebase 均已就緒，開始初始化...');
        
        if (!window.appInitialized) {
            window.appInitialized = true;
            initializeAdminPage(); 
        }
        
        const savedLang = localStorage.getItem('language') || 'zh';
        setLanguage(savedLang);
    }
}
// ▲▲▲ 修正結束 ▲▲▲


let currentUser = null;
let editingMember = null;
let countdownInterval = null;
let dailyBackupInterval = null;
let autoRefreshInterval = null;
const REFRESH_INTERVAL = 5000;

let currentCodeSubTab = 'generate';
let currentMemberSubTab = 'active';

function showLoading() {
    document.getElementById('loadingOverlay').classList.add('active');
}

function hideLoading() {
    document.getElementById('loadingOverlay').classList.remove('active');
}

async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// 【已修改】 包含排隊優先級排序
async function loadData() {
    try {
        const membersSnapshot = await database.ref('members').once('value');
        const codesSnapshot = await database.ref('activationCodes').once('value');
        const queueSnapshot = await database.ref('queue').once('value');
        const sessionSnapshot = await database.ref('gameSession').once('value');
        const backupSnapshot = await database.ref('lastBackupTime').once('value');

        const membersData = membersSnapshot.val() || {};
        const members = Object.keys(membersData).map(key => ({
            ...membersData[key],
            username: key
        }));

        const codesData = codesSnapshot.val() || {};
        const activationCodes = Object.values(codesData);

        const queueData = queueSnapshot.val() || {};
        const queue = Object.values(queueData); // 1. 從物件轉為陣列

        // 【修改】 採用新的排序邏輯
        queue.sort((a, b) => {
            const adminA = a.adminOrder || 9999; // 9999 代表沒有手動排過
            const adminB = b.adminOrder || 9999;

            // 1. 如果有手動排序，以此為準
            if (adminA !== 9999 || adminB !== 9999) {
                return adminA - adminB;
            }
            
            // 2. 如果都沒有手動排序，才用優先級
            const priorityA = a.priorityLevel || 0;
            const priorityB = b.priorityLevel || 0;
            if (priorityA !== priorityB) {
                return priorityB - priorityA; // 優先級高的在前
            }
            
            // 3. 優先級也相同，用加入時間
            return new Date(a.joinTime) - new Date(b.joinTime);
        });

        return {
            members,
            activationCodes,
            queue, // 3. 回傳排好序的陣列
            gameSession: sessionSnapshot.val(),
            lastBackupTime: backupSnapshot.val()
        };
    } catch (error) {
        console.error('載入資料失敗:', error);
        return { members: [], activationCodes: [], queue: [], gameSession: null, lastBackupTime: null };
    }
}

async function saveData(members, activationCodes, queue, gameSession) {
    try {
        const membersObj = {};
        members.forEach(m => { membersObj[m.username] = m; });

        const codesObj = {};
        activationCodes.forEach(c => { codesObj[c.code] = c; });

        const queueObj = {};
        queue.forEach(q => { queueObj[q.username] = q; });

        await database.ref('members').set(membersObj);
        await database.ref('activationCodes').set(codesObj);
        await database.ref('queue').set(queueObj);
        await database.ref('gameSession').set(gameSession);
    } catch (error) {
        console.error('儲存資料失敗:', error);
        alert('資料儲存失敗，請稍後再試');
    }
}

function secondsToTime(seconds) {
    if (seconds <= 0) return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    const years = Math.floor(seconds / (365 * 24 * 60 * 60));
    seconds %= (365 * 24 * 60 * 60);
    const months = Math.floor(seconds / (30 * 24 * 60 * 60));
    seconds %= (30 * 24 * 60 * 60);
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds %= (24 * 60 * 60);
    const hours = Math.floor(seconds / (60 * 60));
    seconds %= (60 * 60);
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    return { years, months, days, hours, minutes, seconds };
}

function timeToSeconds(years, months, days, hours, minutes, seconds) {
    return (years * 365 * 24 * 60 * 60) +
        (months * 30 * 24 * 60 * 60) +
        (days * 24 * 60 * 60) +
        (hours * 60 * 60) +
        (minutes * 60) +
        seconds;
}

function formatTimeDisplay(timeObj) {
    const lang = getCurrentLang();
    const trans = translations[lang];
    const parts = [];
    if (timeObj.years > 0) parts.push(`${timeObj.years}${trans.time_year}`);
    if (timeObj.months > 0) parts.push(`${timeObj.months}${trans.time_month}`);
    if (timeObj.days > 0) parts.push(`${timeObj.days}${trans.time_day}`);
    if (timeObj.hours > 0) parts.push(`${timeObj.hours}${trans.time_hour}`);
    if (timeObj.minutes > 0) parts.push(`${timeObj.minutes}${trans.time_minute}`);
    if (timeObj.seconds > 0) parts.push(`${timeObj.seconds}${trans.time_second}`);
    return parts.join(' ') || `0${trans.time_second}`;
}

function getTimeColorClass(seconds) {
    if (seconds <= 0) return 'danger';
    if (seconds <= 259200) return 'danger';
    if (seconds <= 604800) return 'warning';
    return '';
}

function generateActivationCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

function copyToClipboard(text, button) {
    const lang = getCurrentLang();
    const trans = translations[lang];
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = trans.copy_ok;
        button.style.background = '#28a745';
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '#667eea';
        }, 2000);
    }).catch(() => {
        alert(trans.copy_fail);
    });
}

function openLoginModal() {
    document.getElementById('loginModalTitle').textContent = translations[getCurrentLang()].login_title_admin;
    document.getElementById('loginModal').classList.add('active');
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.remove('active');
}

function openChangePasswordModal() {
    document.getElementById('changePasswordModal').classList.add('active');
}

function closeChangePasswordModal() {
    document.getElementById('changePasswordModal').classList.remove('active');
    document.getElementById('currentPassword').value = '';
    document.getElementById('changeNewPassword').value = '';
    document.getElementById('changeConfirmPassword').value = '';
}

function openEditMemberModal() {
    document.getElementById('editMemberModal').classList.add('active');
}

function closeEditMemberModal() {
    document.getElementById('editMemberModal').classList.remove('active');
    editingMember = null;
}

async function login() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const lang = getCurrentLang();
    const trans = translations[lang];

    if (!username || !password) {
        alert(trans.alert_login_prompt);
        return;
    }

    showLoading();
    try {
        const data = await loadData();
        const passwordHash = await hashPassword(password);
        const member = data.members.find(m => m.username === username && m.passwordHash === passwordHash);

        if (!member) {
            alert(trans.alert_login_wrong);
            hideLoading();
            return;
        }

        if (!member.isAdmin) {
            alert(trans.alert_login_no_perm);
            hideLoading();
            return;
        }

        currentUser = member;
        sessionStorage.setItem('currentUser', member.username);

        alert(trans.alert_login_success);
        closeLoginModal();
        await initializeAdminDashboard();
        updateUserSection();
        
    } catch (error) {
        console.error('登入失敗:', error);
        alert(trans.alert_login_fail);
    } finally {
        hideLoading();
    }
}

async function logout() {
    sessionStorage.removeItem('currentUser');
    currentUser = null;
    
    document.getElementById('adminDashboard').style.display = 'none';
    updateUserSection();
    openLoginModal();
    
    stopAutoRefresh();
    stopCountdown();
    alert(translations[getCurrentLang()].alert_logout);
}

function updateUserSection() {
    const userSection = document.getElementById('userSection');
    const lang = getCurrentLang();
    const trans = translations[lang];
    
    const langSwitcher = userSection.querySelector('.lang-switcher');

    if (currentUser && currentUser.isAdmin) {
        userSection.innerHTML = `
    <div class="user-info">
        <div class="avatar">${currentUser.nickname.charAt(0)}</div>
        <span class="name">${currentUser.nickname}</span>
        <span class="badge-admin" data-lang-key="member_admin">${trans.member_admin}</span>
    </div>
    <button class="btn btn-danger btn-small" onclick="logout()" data-lang-key="logout">${trans.logout}</button>
`;
    } else {
        userSection.innerHTML = `
        <button class="btn btn-small" onclick="openLoginModal()" data-lang-key="login">${trans.login}</button>
        `;
    }
    if (langSwitcher) {
        userSection.prepend(langSwitcher);
    }
}

function startGlobalCountdown() {
    if (countdownInterval) clearInterval(countdownInterval);

    countdownInterval = setInterval(async () => {
        await updateAllCountdowns();
    }, 1000);
}

async function updateAllCountdowns() {
    try {
        const data = await loadData();
        const now = Math.floor(Date.now() / 1000);
        let membersToUpdate = {}; // 批次更新
        let needRefreshAdmin = false;

        data.members.forEach(member => {
            const elapsed = now - (member.lastUpdateTime || now); // 防呆
            if (elapsed > 0 && member.remainingSeconds > 0) {
                const oldRemaining = member.remainingSeconds;
                const oldExpired = oldRemaining <= 0;
                
                member.remainingSeconds = Math.max(0, member.remainingSeconds - elapsed);
                member.lastUpdateTime = now;

                if (oldRemaining !== member.remainingSeconds) {
                    membersToUpdate[member.username] = {
                        remainingSeconds: member.remainingSeconds,
                        lastUpdateTime: member.lastUpdateTime
                    };
                }

                const newExpired = member.remainingSeconds <= 0;
                if (!oldExpired && newExpired) {
                    needRefreshAdmin = true; // 有會員剛過期
                }
            }
        });

        if (Object.keys(membersToUpdate).length > 0) {
            for (const username in membersToUpdate) {
                // 使用 .update() 避免覆蓋其他欄位
                await database.ref('members/' + username).update(membersToUpdate[username]);
            }
        }
        
        // 如果有會員剛過期，且剛好在看會員列表，就刷新
        if (needRefreshAdmin && (currentMemberSubTab === 'active' || currentMemberSubTab === 'expired')) {
            await refreshAdminDashboard();
        }

        // 更新編輯彈窗中的倒數
        const modalCountdown = document.getElementById('editMemberCountdown');
        if (modalCountdown && editingMember) {
            const member = data.members.find(m => m.username === editingMember.username);
            if (member) {
                const timeObj = secondsToTime(member.remainingSeconds);
                modalCountdown.textContent = formatTimeDisplay(timeObj);
                modalCountdown.className = 'countdown-time ' + getTimeColorClass(member.remainingSeconds);
            }
        }

    } catch (error) {
        console.error('更新倒數失敗:', error);
    }
}

function stopCountdown() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
}

function startAutoRefresh() {
    if (autoRefreshInterval) clearInterval(autoRefreshInterval);

    autoRefreshInterval = setInterval(async () => {
        const hasOpenModal = document.querySelector('.modal.active');
        const isLoading = document.getElementById('loadingOverlay').classList.contains('active');
        if (hasOpenModal || isLoading) {
            return;
        }

        console.log('🔄 自動刷新管理員儀表板...');
        await refreshAdminDashboard();
    }, REFRESH_INTERVAL);
}

function stopAutoRefresh() {
    if (autoRefreshInterval) {
        clearInterval(autoRefreshInterval);
        autoRefreshInterval = null;
    }
}

async function initializeAdminPage() {
    showLoading();
    try {
        const loggedInUsername = sessionStorage.getItem('currentUser');
        const lang = getCurrentLang();
        const trans = translations[lang];

        if (!loggedInUsername) {
            console.log('未登入，要求管理員登入');
            updateUserSection();
            openLoginModal();
            hideLoading();
            return;
        }

        const data = await loadData();
        const member = data.members.find(m => m.username === loggedInUsername);

        if (!member || !member.isAdmin) {
            console.log('Session 驗證失敗，要求重新登入');
            sessionStorage.removeItem('currentUser');
            updateUserSection();
            openLoginModal();
            hideLoading();
            return;
        }

        console.log(`管理員 ${loggedInUsername} 驗證成功`);
        currentUser = member;
        
        await initializeAdminDashboard();
        updateUserSection();

        function setupEnterListener(inputId, callback) {
            const element = document.getElementById(inputId);
            if (element) {
                element.addEventListener('keyup', function(event) {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        callback();
                    }
                });
            }
        }

        setupEnterListener('loginUsername', login);
        setupEnterListener('loginPassword', login);
        setupEnterListener('changeConfirmPassword', changePassword);
        setupEnterListener('sessionDescription', createGameSession);
        setupEnterListener('codeAmount', generateCode);

    } catch (error) {
        console.error('管理頁面初始化失敗:', error);
        alert('頁面載入失敗，請重試');
    } finally {
        hideLoading();
    }
}

async function initializeAdminDashboard() {
    document.getElementById('adminDashboard').style.display = 'block';
    
    await refreshAdminDashboard();
    
    startGlobalCountdown();
    startAutoRefresh();
    initDailyBackup();
}

async function refreshAdminDashboard() {
    try {
        const data = await loadData();
        
        renderGameSession(data.gameSession);
        renderQueueList(data.queue);
        renderCodeLists(data.activationCodes);
        renderMemberLists(data.members);
        renderBackupInfo(data.lastBackupTime);

    } catch (error) {
        console.error("儀表板刷新失敗:", error);
    }
}

function renderGameSession(gameSession) {
    const container = document.getElementById('currentGameSession');
    const lang = getCurrentLang();
    const trans = translations[lang];

    if (gameSession) {
        const startTimeLocale = new Date(gameSession.startTime).toLocaleString(lang === 'zh' ? 'zh-TW' : 'en-US');
        container.innerHTML = `
        <div class="game-session-card">
            <h2>🎮 ${gameSession.gameName} (${trans.session_status_open})</h2>
            <div class="game-session-info">${trans.session_slots_label}: ${gameSession.slots}</div>
            <div class="game-session-info">${trans.session_start_label}: ${startTimeLocale}</div>
            ${gameSession.description ? `<div style="margin-top: 10px; font-size: 0.9em;">${gameSession.description}</div>` : ''}
        </div>
        `;
    } else {
        container.innerHTML = `
        <div class="empty-state" style="background: #f9f9f9; border-radius: 8px; padding: 20px;">
            <h3 data-lang-key="session_status_none">${trans.session_status_none}</h3>
            <p data-lang-key="session_status_prompt">${trans.session_status_prompt}</p>
        </div>
        `;
    }
}

// 【已修改】 包含插隊圖示 和 上下移動按鈕
function renderQueueList(queue) {
    const container = document.getElementById('adminQueueList');
    const lang = getCurrentLang();
    const trans = translations[lang];

    document.getElementById('queueCount').textContent = `${trans.queue_total_prefix}${queue.length}${trans.queue_total_suffix}`;
    
    if (queue.length === 0) {
        container.innerHTML = `<div class="empty-state" data-lang-key="queue_empty">${trans.queue_empty}</div>`;
        return;
    }
    
    container.innerHTML = queue.map((q, index) => {
        const levelText = q.level === 'legend' ? trans.level_legend_simple : (q.level === 'diamond' ? trans.level_diamond_simple : trans.level_gold_simple);
        const badgeClass = q.level === 'legend' ? 'badge-legend' : (q.level === 'diamond' ? 'badge-diamond' : 'badge-gold');
        
        const priorityIcon = q.priorityLevel === 2 ? '🔥' : (q.priorityLevel === 1 ? '💎' : '');

        // 【新增】上移/下移按鈕
        const upButton = (index === 0) ? '' : 
            `<button class="btn btn-small" style="padding: 5px 10px;" onclick="moveQueueItem('${q.username}', 'up')">⬆️</button>`;
        const downButton = (index === queue.length - 1) ? '' : 
            `<button class="btn btn-small" style="padding: 5px 10px;" onclick="moveQueueItem('${q.username}', 'down')">⬇️</button>`;

        return `
        <div class="queue-item">
            <div>
                <strong>${priorityIcon} #${index + 1} ${q.nickname}</strong>
                <span class="badge ${badgeClass}" style="margin-left: 10px;">${levelText}</span>
                <div style="font-size: 12px; color: #666; margin-top: 3px;">UID: ${q.gameUID}</div>
            </div>
            <div class="admin-actions">
                ${upButton}
                ${downButton}
                <button class="btn btn-danger btn-small" onclick="removeFromQueue('${q.username}')">${trans.queue_remove_button}</button>
            </div>
        </div>
        `;
    }).join('');
}

function renderCodeLists(activationCodes) {
    const unused = activationCodes.filter(c => !c.used);
    const used = activationCodes.filter(c => c.used);
    const lang = getCurrentLang();
    const trans = translations[lang];
    
    const unusedCountEl = document.getElementById('unusedCodeCount');
    if (unusedCountEl) unusedCountEl.textContent = unused.length;
    
    const usedCountEl = document.getElementById('usedCodeCount');
    if (usedCountEl) usedCountEl.textContent = used.length;

    if (currentCodeSubTab === 'unused') {
        const unusedContainer = document.getElementById('unusedCodeList');
        if (!unusedContainer) return; // 防呆
        unusedContainer.innerHTML = unused.length === 0 ? `<div class="empty-state" data-lang-key="code_no_unused">${trans.code_no_unused}</div>` :
            unused.map(c => {
                const levelText = c.level === 'legend' ? trans.level_legend_simple : (c.level === 'diamond' ? trans.level_diamond_simple : trans.level_gold_simple);
                const badgeClass = c.level === 'legend' ? 'badge-legend' : (c.level === 'diamond' ? 'badge-diamond' : 'badge-gold');
                const timeObj = secondsToTime(c.seconds);
                return `
                <div class="code-item">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <strong style="font-family: 'Courier New', monospace; font-size: 1.2em;">${c.code}</strong>
                            <span class="badge ${badgeClass}" style="margin-left: 10px;">${levelText}</span>
                        </div>
                        <button class="btn btn-danger btn-small" onclick="deleteCode('${c.code}')">${trans.code_delete_button}</button>
                    </div>
                    <div style="margin-top: 10px; color: #666;">
                        ${trans.code_duration} ${formatTimeDisplay(timeObj)} | ${trans.code_created_date} ${new Date(c.createdDate).toLocaleDateString(lang === 'zh' ? 'zh-TW' : 'en-US')}
                    </div>
                </div>
                `;
            }).join('');
    }

    if (currentCodeSubTab === 'used') {
        const usedContainer = document.getElementById('usedCodeList');
        if (!usedContainer) return; // 防呆
        usedContainer.innerHTML = used.length === 0 ? `<div class="empty-state" data-lang-key="code_no_used">${trans.code_no_used}</div>` :
            used.slice().reverse().map(c => {
                const levelText = c.level === 'legend' ? trans.level_legend_simple : (c.level === 'diamond' ? trans.level_diamond_simple : trans.level_gold_simple);
                const badgeClass = c.level === 'legend' ? 'badge-legend' : (c.level === 'diamond' ? 'badge-diamond' : 'badge-gold');
                return `
                <div class="code-item used">
                    <strong style="font-family: 'Courier New', monospace; font-size: 1.2em;">${c.code}</strong>
                    <span class="badge ${badgeClass}" style="margin-left: 10px;">${levelText}</span>
                    <div style="margin-top: 10px; color: #333;">
                        ${trans.code_used_by} <strong>${c.usedBy}</strong> | ${trans.code_used_date} ${new Date(c.usedDate).toLocaleDateString(lang === 'zh' ? 'zh-TW' : 'en-US')}
                    </div>
                </div>
                `;
            }).join('');
    }
}

function renderMemberLists(members) {
    const allMembers = members.filter(m => m.username !== 'admin');
    const lang = getCurrentLang();
    const trans = translations[lang];
    
    const active = allMembers.filter(m => m.remainingSeconds > 0);
    const expired = allMembers.filter(m => m.remainingSeconds <= 0);
    
    const activeCountEl = document.getElementById('activeMemberCount');
    if (activeCountEl) activeCountEl.textContent = active.length;
    
    const expiredCountEl = document.getElementById('expiredMemberCount');
    if (expiredCountEl) expiredCountEl.textContent = expired.length;

    const renderMemberItem = (m) => {
        const levelText = m.level === 'legend' ? trans.level_legend_simple : (m.level === 'diamond' ? trans.level_diamond_simple : trans.level_gold_simple);
        const badgeClass = m.level === 'legend' ? 'badge-legend' : (m.level === 'diamond' ? 'badge-diamond' : 'badge-gold');
        const timeObj = secondsToTime(m.remainingSeconds);
        const timeClass = getTimeColorClass(m.remainingSeconds);
        const platformText = m.platform === 'tiktok' ? 'TikTok' : 'YouTube';
        const itemClass = m.remainingSeconds > 0 ? 'active' : 'expired';

        return `
        <div class="member-item ${itemClass}">
            <div class="member-header">
                <div>
                    <strong>${m.nickname}</strong> (@${m.username})
                    <span class="badge ${badgeClass}" style="margin-left: 10px;">${levelText}</span>
                    ${m.isAdmin ? `<span class="badge-admin">${trans.member_admin}</span>` : ''}
                </div>
                <div class="admin-actions">
                    <button class="btn btn-small" onclick="openEditMember('${m.username}')">${trans.member_edit_button}</button>
                    <button class="btn btn-danger btn-small" onclick="deleteMember('${m.username}')">${trans.member_delete_button}</button>
                </div>
            </div>
            <div style="font-size: 14px; color: #333; line-height: 1.8;">
                <div>${trans.member_uid_label} ${m.gameUID} | ${trans.member_platform_label} ${platformText}</div>
                <div>${trans.member_remaining_label} <span class="countdown-time ${timeClass}" data-username="${m.username}">${formatTimeDisplay(timeObj)}</span></div>
                <div>${trans.member_join_date_label} ${new Date(m.joinDate).toLocaleDateString(lang === 'zh' ? 'zh-TW' : 'en-US')}</div>
            </div>
        </div>
        `;
    };

    if (currentMemberSubTab === 'active') {
        const activeContainer = document.getElementById('activeMemberList');
        if (!activeContainer) return; // 防呆
        activeContainer.innerHTML = active.length === 0 ? `<div class="empty-state" data-lang-key="member_no_active">${trans.member_no_active}</div>` : active.map(renderMemberItem).join('');
    }
    
    if (currentMemberSubTab === 'expired') {
        const expiredContainer = document.getElementById('expiredMemberList');
        if (!expiredContainer) return; // 防呆
        expiredContainer.innerHTML = expired.length === 0 ? `<div class="empty-state" data-lang-key="member_no_expired">${trans.member_no_expired}</div>` : expired.map(renderMemberItem).join('');
    }
}

function renderBackupInfo(lastBackupTime) {
    const container = document.getElementById('backupInfo');
    if (!container) return; // 防呆
    const lang = getCurrentLang();
    const trans = translations[lang];

    if (lastBackupTime) {
        container.innerHTML = `<strong>${trans.backup_last_time}</strong> ${new Date(lastBackupTime).toLocaleString(lang === 'zh' ? 'zh-TW' : 'en-US')}`;
    } else {
        container.innerHTML = `<strong>${trans.backup_none}</strong>`;
    }
}

async function createGameSession() {
    const gameName = document.getElementById('sessionGameName').value.trim() || 'CODM 會員場';
    const slots = parseInt(document.getElementById('sessionSlots').value.trim()) || 10;
    const description = document.getElementById('sessionDescription').value.trim();
    const startTimeInput = document.getElementById('sessionStartTime').value;
    const startTime = startTimeInput ? new Date(startTimeInput).toISOString() : new Date().toISOString();

    const lang = getCurrentLang();
    const trans = translations[lang];

    const newSession = {
        gameName,
        slots,
        description,
        startTime: startTime
    };

    const startTimeLocale = new Date(startTime).toLocaleString(lang === 'zh' ? 'zh-TW' : 'en-US');
    if (!confirm(`${trans.alert_session_confirm}\n${trans.alert_session_name} ${gameName}\n${trans.alert_session_time} ${startTimeLocale}`)) return;

    showLoading();
    try {
        await database.ref('gameSession').set(newSession);
        alert(trans.alert_session_open_success);
        document.getElementById('sessionStartTime').value = '';
        await refreshAdminDashboard();
    } catch (error) {
        console.error("開啟場次失敗:", error);
        alert(trans.alert_session_open_fail);
    } finally {
        hideLoading();
    }
}

async function closeGameSession() {
    const lang = getCurrentLang();
    const trans = translations[lang];
    if (!confirm(trans.alert_session_close_confirm)) return;

    showLoading();
    try {
        await database.ref('gameSession').set(null);
        alert(trans.alert_session_close_success);
        await refreshAdminDashboard();
    } catch (error) {
        console.error("關閉場次失敗:", error);
        alert(trans.alert_session_close_fail);
    } finally {
        hideLoading();
    }
}

async function removeFromQueue(username) {
    const lang = getCurrentLang();
    const trans = translations[lang];
    if (!confirm(trans.alert_queue_remove_confirm.replace('{username}', username))) return;

    showLoading();
    try {
        await database.ref(`queue/${username}`).remove();
        alert(trans.alert_queue_remove_success.replace('{username}', username));
        await refreshAdminDashboard();
    } catch (error) {
        console.error("移除排隊失敗:", error);
        alert(trans.alert_queue_remove_fail);
    } finally {
        hideLoading();
    }
}

async function clearQueue() {
    const lang = getCurrentLang();
    const trans = translations[lang];
    if (!confirm(trans.alert_queue_clear_confirm)) return;

    showLoading();
    try {
        await database.ref('queue').set(null);
        alert(trans.alert_queue_clear_success);
        await refreshAdminDashboard();
    } catch (error) {
        console.error("清空排隊失敗:", error);
        alert(trans.alert_queue_clear_fail);
    } finally {
        hideLoading();
    }
}

// 【已修改】 移除優先級檢查，改為手動設置 adminOrder
async function moveQueueItem(username, direction) {
    const lang = getCurrentLang();
    const trans = translations[lang];
    showLoading();
    
    try {
        const data = await loadData(); // 1. 取得當前已排序的列表
        let queue = data.queue;
        
        const currentIndex = queue.findIndex(q => q.username === username);
        if (currentIndex === -1) throw new Error("找不到該用戶");

        const targetIndex = (direction === 'up') ? currentIndex - 1 : currentIndex + 1;
        
        if (targetIndex < 0 || targetIndex >= queue.length) {
            hideLoading();
            return; 
        }

        // 2. 在本地陣列中移動
        const [itemToMove] = queue.splice(currentIndex, 1);
        queue.splice(targetIndex, 0, itemToMove);
        
        // 3. 建立一個更新物件，為 *所有* 項目分配新的 adminOrder
        const updates = {};
        queue.forEach((item, index) => {
            // `index + 1` 確保 order 從 1 開始
            updates[`/queue/${item.username}/adminOrder`] = index + 1;
        });
        
        // 4. 一次性將所有更新寫入 Firebase
        await database.ref().update(updates);
        
        await refreshAdminDashboard(); // 立即刷新畫面
        
    } catch (error) {
        console.error("調整順序失敗:", error);
        alert(trans.alert_op_fail);
    } finally {
        hideLoading();
    }
}


async function generateCode() {
    const level = document.getElementById('codeLevel').value;
    const days = parseInt(document.getElementById('codeDays').value) || 0;
    const amount = parseInt(document.getElementById('codeAmount').value) || 1;
    const lang = getCurrentLang();
    const trans = translations[lang];

    if (days <= 0) {
        alert(trans.alert_code_invalid_days);
        return;
    }

    if (amount > 100) {
        if (!confirm(trans.alert_code_gen_confirm.replace('{amount}', amount))) return;
    }
    
    const seconds = days * 24 * 60 * 60;
    const timeObj = secondsToTime(seconds);
    
    showLoading();
    const generatedList = document.getElementById('generatedCodesList');
    generatedList.innerHTML = `<h3>${trans.alert_code_gen_list_title.replace('{amount}', amount)}</h3>`;

    try {
        const data = await loadData();
        const newCodes = [];
        
        for (let i = 0; i < amount; i++) {
            let newCode;
            do {
                newCode = generateActivationCode();
            } while (data.activationCodes.find(c => c.code === newCode));

            const codeData = {
                code: newCode,
                level: level,
                seconds: seconds,
                createdDate: new Date().toISOString(),
                used: false,
                usedBy: null,
                usedDate: null
            };
            data.activationCodes.push(codeData);
            newCodes.push(codeData);
        }

        await saveData(data.members, data.activationCodes, data.queue, data.gameSession);
        
        newCodes.forEach(c => {
            const levelText = c.level === 'legend' ? trans.level_legend_simple : (c.level === 'diamond' ? trans.level_diamond_simple : trans.level_gold_simple);
            generatedList.innerHTML += `
            <div class="code-item">
                <strong style="font-family: 'Courier New', monospace; font-size: 1.2em;">${c.code}</strong>
                (${levelText} - ${formatTimeDisplay(timeObj)})
                <button class="btn-copy" onclick="copyToClipboard('${c.code}', this)">📋 ${trans.copy}</button>
            </div>
            `;
        });
        
        alert(trans.alert_code_gen_success.replace('{amount}', amount));
        await refreshAdminDashboard();
    } catch (error) {
        console.error("產生兌換碼失敗:", error);
        alert(trans.alert_code_gen_fail);
    } finally {
        hideLoading();
    }
}

async function deleteCode(code) {
    const lang = getCurrentLang();
    const trans = translations[lang];
    if (!confirm(trans.alert_code_delete_confirm.replace('{code}', code))) return;

    showLoading();
    try {
        await database.ref(`activationCodes/${code}`).remove();
        alert(trans.alert_code_delete_success.replace('{code}', code));
        await refreshAdminDashboard();
    } catch (error) {
        console.error("刪除兌換碼失敗:", error);
        alert(trans.alert_code_delete_fail);
    } finally {
        hideLoading();
    }
}

// 【已修改】 包含插隊權限的 HTML
async function openEditMember(username) {
    showLoading();
    const lang = getCurrentLang();
    const trans = translations[lang];
    try {
        const data = await loadData();
        const member = data.members.find(m => m.username === username);
        if (!member) {
            alert(trans.alert_member_not_found);
            hideLoading();
            return;
        }
        
        editingMember = member;
        
        const timeObj = secondsToTime(member.remainingSeconds);
        const timeClass = getTimeColorClass(member.remainingSeconds);
        
        const content = document.getElementById('editMemberContent');
        content.innerHTML = `
        <h3>${trans.edit_editing} ${member.nickname} (@${member.username})</h3>
        <p>${trans.edit_remaining_time} <span id="editMemberCountdown" class="countdown-time ${timeClass}">${formatTimeDisplay(timeObj)}</span></p>
        
        <hr style="margin: 20px 0;">
        
        <h4>${trans.edit_adjust_time}</h4>
        <div class="input-row">
            <input type="number" id="editYears" placeholder="${trans.edit_time_year}">
            <input type="number" id="editMonths" placeholder="${trans.edit_time_month}">
            <input type="number" id="editDays" placeholder="${trans.edit_time_day}">
            <input type="number" id="editHours" placeholder="${trans.edit_time_hour}">
        </div>
        <div style="margin: 10px 0; display: flex; gap: 10px;">
            <button class="btn btn-success btn-small" onclick="adjustTime(true)">${trans.edit_add_time}</button>
            <button class="btn btn-danger btn-small" onclick="adjustTime(false)">${trans.edit_reduce_time}</button>
        </div>
        
        <hr style="margin: 20px 0;">
        
        <h4>${trans.edit_modify_info}</h4>
        <div class="input-group">
            <label>${trans.edit_nickname}</label>
            <input type="text" id="editNickname" value="${member.nickname}">
        </div>
        <div class="input-group">
            <label>${trans.edit_game_uid}</label>
            <input type="text" id="editGameUID" value="${member.gameUID}">
        </div>
        <div class="input-group">
            <label>${trans.edit_level}</label>
            <select id="editLevel">
                <option value="gold" ${member.level === 'gold' ? 'selected' : ''}>${trans.level_gold}</option>
                <option value="diamond" ${member.level === 'diamond' ? 'selected' : ''}>${trans.level_diamond}</option>
                <option value="legend" ${member.level === 'legend' ? 'selected' : ''}>${trans.level_legend}</option>
            </select>
        </div>
        <div class="input-group">
            <label>${trans.edit_platform}</label>
            <select id="editPlatform">
                <option value="tiktok" ${member.platform === 'tiktok' ? 'selected' : ''}>TikTok</option>
                <option value="youtube" ${member.platform === 'youtube' ? 'selected' : ''}>YouTube</option>
            </select>
        </div>
        
        <div class="input-group">
            <label>${trans.edit_priority_quota}</label>
            <input type="number" id="editPriorityQuota" value="${member.priorityQuota || 0}">
        </div>
        
        <hr style="margin: 20px 0;">
        
        <h4>${trans.edit_admin_perm}</h4>
        <div class="input-group">
            <label>
                <input type="checkbox" id="editIsAdmin" ${member.isAdmin ? 'checked' : ''}>
                ${trans.edit_set_admin}
            </label>
        </div>
        
        <button class="btn" onclick="saveMemberEdit()" style="width: 100%;">${trans.edit_save}</button>
        `;
        
        openEditMemberModal();

        document.getElementById('editHours').addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                adjustTime(true);
            }
        });

        document.getElementById('editIsAdmin').addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                saveMemberEdit();
            }
        });
    } catch (error) {
        console.error("開啟編輯失敗:", error);
    } finally {
        hideLoading();
    }
}

async function adjustTime(isAdding) {
    const years = parseInt(document.getElementById('editYears').value) || 0;
    const months = parseInt(document.getElementById('editMonths').value) || 0;
    const days = parseInt(document.getElementById('editDays').value) || 0;
    const hours = parseInt(document.getElementById('editHours').value) || 0;
    const lang = getCurrentLang();
    const trans = translations[lang];
    
    const secondsToAdd = timeToSeconds(years, months, days, hours, 0, 0);
    
    if (secondsToAdd <= 0) {
        alert(trans.alert_time_invalid);
        return;
    }
    
    const actionText = isAdding ? trans.alert_time_add : trans.alert_time_reduce;
    const timeText = formatTimeDisplay(secondsToTime(secondsToAdd));
    
    if (!confirm(trans.alert_time_adjust_confirm.replace('{username}', editingMember.username).replace('{action}', actionText).replace('{timeText}', timeText))) return;
    
    showLoading();
    try {
        const memberRef = database.ref('members/' + editingMember.username);
        const snapshot = await memberRef.once('value');
        const member = snapshot.val();
        
        let newRemainingSeconds;
        if (isAdding) {
            newRemainingSeconds = (member.remainingSeconds || 0) + secondsToAdd;
        } else {
            newRemainingSeconds = Math.max(0, (member.remainingSeconds || 0) - secondsToAdd);
        }
        
        await memberRef.update({
            remainingSeconds: newRemainingSeconds,
            lastUpdateTime: Math.floor(Date.now() / 1000)
        });
        
        const timeObj = secondsToTime(newRemainingSeconds);
        const timeClass = getTimeColorClass(newRemainingSeconds);
        document.getElementById('editMemberCountdown').textContent = formatTimeDisplay(timeObj);
        document.getElementById('editMemberCountdown').className = 'countdown-time ' + timeClass;
        
        document.getElementById('editYears').value = '';
        document.getElementById('editMonths').value = '';
        document.getElementById('editDays').value = '';
        document.getElementById('editHours').value = '';

        alert(trans.alert_time_adjust_success.replace('{action}', actionText));
        await refreshAdminDashboard();
    } catch (error) {
        console.error("調整時間失敗:", error);
    } finally {
        hideLoading();
    }
}

// 【已修改】 包含儲存插隊權限
async function saveMemberEdit() {
    if (!editingMember) return;
    const lang = getCurrentLang();
    const trans = translations[lang];
    
    const newNickname = document.getElementById('editNickname').value.trim();
    const newGameUID = document.getElementById('editGameUID').value.trim();
    const newLevel = document.getElementById('editLevel').value;
    const newPlatform = document.getElementById('editPlatform').value;
    const newIsAdmin = document.getElementById('editIsAdmin').checked;
    const newPriorityQuota = parseInt(document.getElementById('editPriorityQuota').value) || 0; // 【新增】
    
    if (!newNickname || !newGameUID) {
        alert(trans.alert_member_empty_fields);
        return;
    }
    
    showLoading();
    try {
        // 使用 .update() 進行原子更新
        await database.ref('members/' + editingMember.username).update({
            nickname: newNickname,
            gameUID: newGameUID,
            level: newLevel,
            platform: newPlatform,
            isAdmin: newIsAdmin,
            priorityQuota: newPriorityQuota // 【新增】
        });
        
        alert(trans.alert_member_save_success);
        closeEditMemberModal();
        await refreshAdminDashboard();
        
    } catch (error) {
        console.error("儲存會員失敗:", error);
    } finally {
        hideLoading();
    }
}

async function deleteMember(username) {
    const lang = getCurrentLang();
    const trans = translations[lang];

    if (username === 'admin') {
        alert(trans.alert_member_delete_admin);
        return;
    }
    
    if (!confirm(trans.alert_member_delete_confirm.replace('{username}', username))) return;
    
    showLoading();
    try {
        // 原子刪除
        await database.ref('members/' + username).remove();
        await database.ref('queue/' + username).remove(); // 順便從排隊中移除
        
        alert(trans.alert_member_delete_success.replace('{username}', username));
        await refreshAdminDashboard();
        
    } catch (error) {
        console.error("刪除會員失敗:", error);
    } finally {
        hideLoading();
    }
}

async function changePassword() {
    const currentPassword = document.getElementById('currentPassword').value.trim();
    const newPassword = document.getElementById('changeNewPassword').value.trim();
    const confirmPassword = document.getElementById('changeConfirmPassword').value.trim();
    const lang = getCurrentLang();
    const trans = translations[lang];

    if (!currentPassword || !newPassword || !confirmPassword) {
        alert(trans.alert_fill_all);
        return;
    }
    if (newPassword.length < 6) {
        alert(trans.alert_password_short);
        return;
    }
    if (newPassword !== confirmPassword) {
        alert(trans.alert_password_mismatch);
        return;
    }

    showLoading();
    try {
        const currentPasswordHash = await hashPassword(currentPassword);
        if (currentPasswordHash !== currentUser.passwordHash) {
            alert(trans.alert_current_password_wrong);
            hideLoading();
            return;
        }

        const newPasswordHash = await hashPassword(newPassword);
        // 只更新密碼
        await database.ref('members/' + currentUser.username).update({
            passwordHash: newPasswordHash
        });

        currentUser.passwordHash = newPasswordHash;

        alert(trans.alert_password_change_success);
        closeChangePasswordModal();
    } catch (error) {
        console.error('更改密碼失敗:', error);
        alert(trans.alert_password_change_fail);
    } finally {
        hideLoading();
    }
}

function showCodeSubTab(tabName) {
    currentCodeSubTab = tabName;
    
    const codeCard = document.querySelector('#generate').closest('.card');
    
    codeCard.querySelectorAll('.sub-page').forEach(p => p.classList.remove('active'));
    codeCard.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    codeCard.querySelector(`.sub-tabs button[onclick="showCodeSubTab('${tabName}')"]`).classList.add('active');
    
    refreshAdminDashboard();
}

function showMemberSubTab(tabName) {
    currentMemberSubTab = tabName;
    
    const memberCard = document.querySelector('#activeMembers').closest('.card');

    memberCard.querySelectorAll('.sub-page').forEach(p => p.classList.remove('active'));
    memberCard.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));

    const elementId = tabName === 'active' ? 'activeMembers' : 'expiredMembers';
    
    document.getElementById(elementId).classList.add('active');
    memberCard.querySelector(`.sub-tabs button[onclick="showMemberSubTab('${tabName}')"]`).classList.add('active');
    
    refreshAdminDashboard();
}

function initDailyBackup() {
    function getTimeUntilMidnight() {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(23, 59, 59, 999);
        return midnight - now;
    }

    function performBackup() {
        console.log('執行每日自動備份...');
        exportToExcel(true);
    }

    const timeUntilMidnight = getTimeUntilMidnight();
    setTimeout(() => {
        performBackup();
        dailyBackupInterval = setInterval(performBackup, 24 * 60 * 60 * 1000);
    }, timeUntilMidnight);
    
    console.log(`每日自動備份將在 ${formatTimeDisplay(secondsToTime(Math.floor(timeUntilMidnight/1000)))} 後執行`);
}

async function exportToExcel(isAuto = false) {
    const lang = getCurrentLang();
    const trans = translations[lang];

    if (!isAuto) {
        showLoading();
    }
    try {
        const data = await loadData();

        if (data.members.length === 0) {
            if (!isAuto) alert(trans.alert_no_backup_data);
            return;
        }

        const memberData = data.members.map(member => {
            const timeObj = secondsToTime(member.remainingSeconds);
            const levelText = member.level === 'legend' ? '傳說會員' : (member.level === 'diamond' ? '鑽石會員' : '黃金會員');
            const platformText = member.platform === 'tiktok' ? 'TikTok' : 'YouTube';
            const statusText = member.remainingSeconds > 0 ? '生效中' : '已到期';

            return {
                '使用者名稱': member.username, '暱稱': member.nickname, '平台': platformText,
                'CODM UID': member.gameUID, '會員等級': levelText, '狀態': statusText,
                '剩餘時間': formatTimeDisplay(timeObj), '剩餘秒數': member.remainingSeconds,
                '兌換碼': member.activationCode, '加入日期': new Date(member.joinDate).toLocaleDateString('zh-TW'),
                '是否為管理員': member.isAdmin ? '是' : '否',
                '插隊次數': member.priorityQuota // 導出插隊次數
            };
        });

        const wb = XLSX.utils.book_new();
        const ws1 = XLSX.utils.json_to_sheet(memberData);
        XLSX.utils.book_append_sheet(wb, ws1, "會員資料");

        const codeData = data.activationCodes.map(code => {
            const levelText = code.level === 'legend' ? '傳說會員' : (code.level === 'diamond' ? '鑽石會員' : '黃金會員');
            const timeObj = secondsToTime(code.seconds);

            return {
                '兌換碼': code.code, '會員等級': levelText, '時長': formatTimeDisplay(timeObj),
                '秒數': code.seconds, '狀態': code.used ? '已使用' : '未使用',
                '使用者': code.usedBy || '', '創建日期': new Date(code.createdDate).toLocaleDateString('zh-TW'),
                '使用日期': code.usedDate ? new Date(code.usedDate).toLocaleDateString('zh-TW') : ''
            };
        });

        const ws2 = XLSX.utils.json_to_sheet(codeData);
        XLSX.utils.book_append_sheet(wb, ws2, "兌換碼");

        const now = new Date();
        const fileName = `CODM會員資料_${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}_${String(now.getHours()).padStart(2,'0')}${String(now.getMinutes()).padStart(2,'0')}.xlsx`;

        XLSX.writeFile(wb, fileName);

        await database.ref('lastBackupTime').set(new Date().toISOString());
        
        if (!isAuto) {
            alert('Excel 備份已完成！\n檔案名稱：' + fileName);
        }
        
        renderBackupInfo(new Date().toISOString());

    } catch (error) {
        console.error('備份失敗:', error);
        if (!isAuto) alert(trans.alert_backup_fail);
    } finally {
        if (!isAuto) hideLoading();
    }
}