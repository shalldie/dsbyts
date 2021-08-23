/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const left = target - current;
        if (map.has(left)) {
            return [map.get(left)!, i];
        } else {
            map.set(current, i);
        }
    }

    return [];
}
// @lc code=end
