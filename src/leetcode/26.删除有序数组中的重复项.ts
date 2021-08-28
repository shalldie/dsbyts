/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    const len = nums.length;

    if (len <= 1) {
        return nums.length;
    }

    let x = 1;
    let y = 1;
    for (; y < len; ) {
        if (nums[y] === nums[y - 1]) {
            y++;
        } else {
            nums[x] = nums[y];
            x++;
            y++;
        }
    }
    return x;
}
// @lc code=end
