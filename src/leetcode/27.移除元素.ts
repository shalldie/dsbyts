/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    let curIndex = 0;
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        if (nums[i] !== val) {
            nums[curIndex++] = nums[i];
        }
    }

    return curIndex;
}
// @lc code=end
