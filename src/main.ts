function longestPalindromex(s: string): string {
    let result = '';
    for (let i = 0; i < s.length; i += 0.5) {
        const palindrome = palindromeByCenterx(s, i, Math.min(i, s.length - i - 1));
        if (palindrome.length > result.length) {
            result = palindrome;
        }
    }
    return result;
}

function palindromeByCenterx(content: string, index: number, maxOffset: number) {
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

function main(): void {
    console.log(longestPalindromex('aacabdkacaa'));
}

main();
