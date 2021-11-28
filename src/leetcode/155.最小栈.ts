/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
class MinStack {
    private list: number[] = [];

    push(val: number): void {
        this.list.push(val);
    }

    pop(): void {
        this.list.pop();
    }

    top(): number {
        return this.list[this.list.length - 1];
    }

    getMin(): number {
        return Math.min(...this.list);
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
