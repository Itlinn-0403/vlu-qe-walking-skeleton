const { login } = require('./auth');

test('should return true for valid admin credentials', () => {
    expect(login('admin', '123')).toBe(true);
});

test('should return false for invalid credentials', () => {
    expect(login('wrong_user', 'wrong_pass')).toBe(false);
});
