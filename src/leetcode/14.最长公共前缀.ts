/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    strs = strs.sort();
    const str1 = strs[0];
    const str2 = strs[strs.length - 1];

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            return str1.substring(0, i);
        }
    }
    return str1;
}
// @lc code=end
