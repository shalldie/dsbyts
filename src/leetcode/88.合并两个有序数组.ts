/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let index1 = m - 1;
    let index2 = n - 1;
    let curIndex = nums1.length - 1;

    while (curIndex >= 0) {
        if ((index1 >= 0 && nums1[index1] >= nums2[index2]) || index2 < 0) {
            nums1[curIndex] = nums1[index1--];
        } else {
            nums1[curIndex] = nums2[index2--];
        }
        curIndex--;
    }
}
// @lc code=end
