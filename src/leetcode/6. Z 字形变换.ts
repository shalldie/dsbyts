`
将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

P   A   H   N
A P L S I I G
Y   I   R
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);
 

示例 1：

输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"
示例 2：
输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I
示例 3：

输入：s = "A", numRows = 1
输出："A"
 

提示：

1 <= s.length <= 1000
s 由英文字母（小写和大写）、',' 和 '.' 组成
1 <= numRows <= 1000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zigzag-conversion
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
`;
export { convert };

function convert(s: string, numRows: number): string {
    // 坐标系 x 轴长度
    const xlen = Math.ceil(s.length / (numRows * 2 - 2)) * (1 + numRows - 2);
    // 坐标系 y 轴长度
    const ylen = numRows;

    // 坐标系画布
    const graphics: Record<number, Record<number, string>> = {};

    for (let i = 0; i < s.length; i++) {
        const { x, y } = getPoint(i, numRows);
        graphics[x] = graphics[x] || {};
        graphics[x][y] = s[i];
    }

    // console.log(JSON.stringify(graphics, null, '    '));
    for (let y = 0; y < ylen; y++) {
        let line = '';
        for (let x = 0; x < xlen; x++) {
            line += graphics[x]?.[y] || ' ';
        }
        console.log(line);
    }

    const result = [];

    for (let y = 0; y < ylen; y++) {
        for (let x = 0; x < xlen; x++) {
            if (graphics[x]?.[y]) {
                result.push(graphics[x][y]);
            }
        }
    }

    return result.join('');
}

function getPoint(i: number, numRows: number) {
    // 每对 竖线+折线 占用的长度
    const offsetLen = numRows * 2 - 2;

    // 当前偏移了多少对
    const offsetCount = ~~((i + 1) / offsetLen);
    // 当前偏移的余数
    const offsetLeft = (i + 1) % offsetLen;

    // x/y 坐标
    let x = offsetCount * (numRows - 1) - 1;
    let y = 0;

    // 如果在竖线前面一列
    if (!offsetLeft) {
        // x 不动
        y = 1;
    }
    // 如果在 竖线 上
    // x 坐标+1
    // y 坐标呈下降趋势
    else if (offsetLeft <= numRows) {
        x += 1;
        y = offsetLeft - 1;
    }
    // 如果在折线上
    // y 是上升趋势
    else {
        x += offsetLeft - numRows + 1;
        y = numRows - (offsetLeft - numRows) - 1;
    }
    return { x, y };
}
