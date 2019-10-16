/* From any string, we can form a subsequence of that string by deleting some number of characters (possibly no deletions).

Given two strings source and target, return the minimum number of subsequences of source such that their concatenation equals target. If the task is impossible, return -1.

 

Example 1:

Input: source = "abc", target = "abcbc"
Output: 2
Explanation: The target "abcbc" can be formed by "abc" and "bc", which are subsequences of source "abc".
Example 2:

Input: source = "abc", target = "acdbc"
Output: -1
Explanation: The target string cannot be constructed from the subsequences of source string due to the character "d" in target string.
Example 3:

Input: source = "xyz", target = "xzyxz"
Output: 3
Explanation: The target string can be constructed as follows "xz" + "y" + "xz".
 

Constraints:

Both the source and target strings consist of only lowercase English letters from "a"-"z".
The lengths of source and target string are between 1 and 1000. */

/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
//Greedy, try to match the target, if unmatch then move the source
var shortestWay = function(source, target) {
    let j = 0;
    const set = new Set([...source]);
    for (let c of target) {
        if (!set.has(c)) return -1;
        while(c !== source.charAt(j % source.length)) j++;
        j++;
    }
    return ~~((j - 1) / source.length) + 1;
};