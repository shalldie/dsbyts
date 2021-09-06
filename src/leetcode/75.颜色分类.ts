/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    const len = nums.length;

    let lastRed = 0;
    let firstBlue = len - 1;

    const switchItems = (index1: number, index2: number) => {
        if (index1 === index2) {
            return;
        }
        let temp = nums[index1];
        nums[index1] = nums[index2];
        nums[index2] = temp;
    };

    for (let i = 0; i <= firstBlue; i++) {
        // 红色放左边
        if (nums[i] === 0) {
            switchItems(lastRed, i);
            lastRed++;
        }
        // 蓝色放右边
        else if (nums[i] === 2) {
            switchItems(firstBlue, i);
            firstBlue--;
            i--;
        }
    }
}
// @lc code=end
