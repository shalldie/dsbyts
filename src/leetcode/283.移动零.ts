/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let curIndex = 0;
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        if (nums[i]) {
            nums[curIndex] = nums[i];
            curIndex++;
        }
    }

    for (; curIndex < len; curIndex++) {
        nums[curIndex] = 0;
    }
}
// @lc code=end
