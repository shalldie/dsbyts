/*
 * @lc app=leetcode.cn id=10 lang=typescript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
    const reg = new RegExp('^' + p + '$');
    return reg.test(s);
}
// @lc code=end
