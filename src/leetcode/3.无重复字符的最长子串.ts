/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    const map = new Map<string, number>();

    let leftIndex = 0;
    let rightIndex = 0;

    let maxLen = 0;

    for (; rightIndex < s.length; ) {
        const cur = s[rightIndex];
        if (!map.has(cur) || map.get(cur)! < leftIndex) {
            map.set(cur, rightIndex);
            maxLen = Math.max(maxLen, rightIndex - leftIndex + 1);
            rightIndex++;
            continue;
        }

        leftIndex = map.get(cur)! + 1;
    }

    return maxLen;
}
// @lc code=end
