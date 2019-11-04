/* You are given two strings s1 and s2 of equal length consisting of letters "x" and "y" only. Your task is to make these two strings equal to each other. You can swap any two characters that belong to different strings, which means: swap s1[i] and s2[j].

Return the minimum number of swaps required to make s1 and s2 equal, or return -1 if it is impossible to do so.

 

Example 1:

Input: s1 = "xx", s2 = "yy"
Output: 1
Explanation: 
Swap s1[0] and s2[1], s1 = "yx", s2 = "yx".
Example 2: 

Input: s1 = "xy", s2 = "yx"
Output: 2
Explanation: 
Swap s1[0] and s2[0], s1 = "yy", s2 = "xx".
Swap s1[0] and s2[1], s1 = "xy", s2 = "xy".
Note that you can't swap s1[0] and s1[1] to make s1 equal to "yx", cause we can only swap chars in different strings.
Example 3:

Input: s1 = "xx", s2 = "xy"
Output: -1
Example 4:

Input: s1 = "xxyyxyxyxx", s2 = "xyyxyxxxyx"
Output: 4
 

Constraints:

1 <= s1.length, s2.length <= 1000
s1, s2 only contain 'x' or 'y'. */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
//carefully go through the examples, you will find the mismatch xy or yx matters.
//so count two kinds of mismatch, then find if all mismatch are odd number (Example 3), you can't make it equal, so return -1
//when are even number, the every pairs of same kind mismatch (Example 1: like xy and xy), you only need switch one time to solve it
//but different two kinds mismatch together, you need two swaps, (Example 2: like xy and yx)
var minimumSwap = function(s1, s2) {
    let xy = 0, yx = 0;
    for (let i = 0; i < s1.length; i++) {
        const c1 = s1.charCodeAt(i), c2 = s2.charCodeAt(i);
        if (c1 > c2) yx++;
        else if (c1 < c2) xy++;
    }
    return (xy + yx)%2 === 0 ? ~~(yx/2) + (yx%2) + ~~(xy/2) + (xy%2) : -1;
};