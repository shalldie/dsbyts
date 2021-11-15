/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    // return nums.length !== [...new Set(nums)].length;
    const map = new Map<number, number>();
    for (const item of nums) {
        if (!map.has(item)) {
            map.set(item, item);
        } else {
            return true;
        }
    }
    return false;
}
// @lc code=end
