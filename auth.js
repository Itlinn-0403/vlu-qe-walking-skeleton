function login(username, password) {
    if (username === 'admin' && password === '123') {
        return true;
    }
    return false;
}

// Xuất hàm ra để Jest có thể test được (chạy trong môi trường Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { login };
}
