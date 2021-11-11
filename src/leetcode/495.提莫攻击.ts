/*
 * @lc app=leetcode.cn id=495 lang=typescript
 *
 * [495] 提莫攻击
 */

// @lc code=start
function findPoisonedDuration(timeSeries: number[], duration: number): number {
    const len = timeSeries.length;

    let sum = timeSeries[len - 1] - timeSeries[0] + duration;

    for (let i = 1; i < len; i++) {
        const diff = timeSeries[i] - timeSeries[i - 1] - duration;
        if (diff > 0) {
            sum -= diff;
        }
    }

    return sum;
}
// @lc code=end
