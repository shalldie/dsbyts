/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const len = nums.length;
    k = len - (k % len);

    if (!k) {
        return;
    }

    const arr = [...nums.slice(k), ...nums.slice(0, k)];
    nums.splice(0, len, ...arr);
}
// @lc code=end
