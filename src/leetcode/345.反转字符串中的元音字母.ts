/*
 * @lc app=leetcode.cn id=345 lang=typescript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
function reverseVowels(s: string): string {
    const arr = s.split('');
    const isVowel = (char: string) => {
        return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char);
    };

    const len = arr.length;
    let left = 0;
    let right = len - 1;

    while (left < right) {
        if (!isVowel(arr[left])) {
            left++;
            continue;
        }
        if (!isVowel(arr[right])) {
            right--;
            continue;
        }

        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;
        right--;
    }
    return arr.join('');
}
// @lc code=end
