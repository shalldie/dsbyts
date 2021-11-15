/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
    const map = new Map<number, number>();
    for (const item of nums1) {
        const cache = map.get(item) || 0;
        map.set(item, cache + 1);
    }

    const arr: number[] = [];
    for (const item of nums2) {
        if (map.get(item)) {
            map.set(item, map.get(item)! - 1);
            arr.push(item);
        }
    }

    return arr;
}
// @lc code=end
