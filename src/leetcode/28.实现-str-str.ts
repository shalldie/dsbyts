/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
    if (!needle.length) {
        return 0;
    }

    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        // 先判断首字母，如果不相等
        if (haystack[i] !== needle[0]) {
            continue;
        }

        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }

    return -1;
}
// @lc code=end
