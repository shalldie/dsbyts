/*
 * @lc app=leetcode.cn id=387 lang=typescript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
function firstUniqChar(s: string): number {
    const cache = new Map<string, boolean>();
    for (let i = 0; i < s.length; i++) {
        if (cache.has(s[i])) {
            continue;
        }
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        } else {
            cache.set(s[i], true);
        }
    }
    return -1;
}
// @lc code=end
