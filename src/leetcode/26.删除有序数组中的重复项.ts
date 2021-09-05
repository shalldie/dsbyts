/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    let curIndex = 0;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] !== nums[curIndex - 1]) {
            nums[curIndex++] = nums[i];
        }
    }
    return curIndex;
}
// @lc code=end
