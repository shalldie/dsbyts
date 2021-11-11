/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        } else {
            return [left + 1, right + 1];
        }
    }

    return [];
}
// @lc code=end

// function twoSum(numbers: number[], target: number): number[] {
//     const map = new Map<number, number>();
//     const len = numbers.length;

//     for (let i = 0; i < len; i++) {
//         const cur = numbers[i];
//         const offset = target - cur;
//         if (map.has(offset)) {
//             return [map.get(offset)! + 1, i + 1];
//         }
//         map.set(cur, i);
//     }

//     return [];
// }
