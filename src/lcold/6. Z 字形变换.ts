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
    // 每一份的x轴长度
    const pieceXLen = numRows <= 2 ? 1 : numRows - 1;
    // 每一份占用字符长度
    const pieceLen = numRows <= 2 ? numRows : numRows * 2 - 2;

    // x/y 轴长度
    const xlen = Math.ceil(s.length / pieceLen) * pieceXLen;
    const ylen = numRows;

    const graphics: Record<number, Record<number, string>> = {};

    for (let i = 0; i < s.length; i++) {
        const { x, y } = getPoint(i, numRows, pieceXLen, pieceLen);

        graphics[x] = graphics[x] || {};
        graphics[x][y] = s[i];
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

function getPoint(index: number, numRows: number, pieceXLen: number, pieceLen: number) {
    // <=2 的时候比较特殊
    if (numRows <= 2) {
        return {
            x: ~~(index / numRows),
            y: index % numRows
        };
    }

    // 份数
    const pieceNum = ~~((index + 1) / pieceLen);
    // 余数
    const pieceLeft = (index + 1) % pieceLen;

    // x/y 坐标
    let x = pieceXLen * pieceNum - 1; // 整除情况的 x 坐标
    let y = 0;

    // 余数为0，整除
    if (!pieceLeft) {
        // x 不变
        y = 1;
    }
    // 在竖线上
    else if (pieceLeft <= numRows) {
        x += 1;
        y = pieceLeft - 1;
    }
    // 在折线上
    else {
        x += (pieceLeft % numRows) + 1;
        y = numRows - (pieceLeft % numRows) - 1;
    }

    return { x, y };
}

`
执行用时：
144 ms
, 在所有 TypeScript 提交中击败了
26.56%
的用户
内存消耗：
45.1 MB
, 在所有 TypeScript 提交中击败了
25.52%
的用户

todo：需要优化，看下解析
`;
