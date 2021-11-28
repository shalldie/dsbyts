/*
 * @lc app=leetcode.cn id=278 lang=typescript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
    return function (n: number): number {
        let start = 1;
        let end = n;

        while (true) {
            if (start === end) {
                n = start;
                break;
            }

            let mid = ~~(start + (end - start) / 2);
            // 相邻
            if (mid === start) {
                if (isBadVersion(mid)) {
                    n = start;
                } else {
                    n = end;
                }
                break;
            }

            if (isBadVersion(mid)) {
                end = mid;
            } else {
                start = mid;
            }
        }

        return n;
    };
};
// @lc code=end
