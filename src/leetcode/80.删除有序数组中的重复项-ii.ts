/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    const len = nums.length;
    let curIndex = 0;

    for (let i = 0; i < len; i++) {
        if (nums[curIndex - 2] !== nums[i]) {
            nums[curIndex++] = nums[i];
        }
    }

    return curIndex;
}
// @lc code=end

export { removeDuplicates as removeDuplicates2 };
