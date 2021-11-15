/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
    const len = digits.length;
    let index = len - 1;
    let left = 1;

    while (left) {
        const sum = digits[index] + left;
        digits[index] = sum % 10;
        left = ~~(sum / 10);

        index--;
        if (index < 0) {
            break;
        }
    }
    if (left) {
        digits.unshift(left);
    }

    return digits;
}
// @lc code=end
