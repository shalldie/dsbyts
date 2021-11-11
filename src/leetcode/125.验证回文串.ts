/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    s = s.toLowerCase().replace(/[^a-z\d]*/g, '');
    const len = s.length;
    let left = 0;
    let right = len - 1;

    while (left <= right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
// @lc code=end
