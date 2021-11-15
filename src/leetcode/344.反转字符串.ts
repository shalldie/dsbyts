/*
 * @lc app=leetcode.cn id=344 lang=typescript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    const len = s.length;

    for (let i = 0; i < len - 1 - i; i++) {
        [s[i], s[len - 1 - i]] = [s[len - 1 - i], s[i]];
    }
}
// @lc code=end
