`
给你一个字符串 s，找到 s 中最长的回文子串。

 

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
示例 3：

输入：s = "a"
输出："a"
示例 4：

输入：s = "ac"
输出："a"
 

提示：

1 <= s.length <= 1000
s 仅由数字和英文字母（大写和/或小写）组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
`;

function longestPalindrome(s: string): string {
    let result = '';
    for (let i = 0; i < s.length; i += 0.5) {
        const palindrome = palindromeByCenter(s, i, Math.min(i, s.length - i - 1));
        if (palindrome.length > result.length) {
            result = palindrome;
        }
    }
    return result;
}

function palindromeByCenter(content: string, index: number, maxOffset: number) {
    const half = index % 1 === 0.5;
    let result = half ? '' : content[index];
    for (let i = half ? 0.5 : 1; i <= maxOffset; i++) {
        if (content[index - i] === content[index + i]) {
            result = content.slice(index - i, index + i + 1);
        } else {
            break;
        }
    }

    return result;
}

// todo: 了解动态规划，观看当前题目解析