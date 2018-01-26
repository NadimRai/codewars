/*
Given a string str, reverse it omitting all non-alphabetic characters.

Example

For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

*/

function reverseLetter(str) {
    var ans = [];
    var str1 = str.replace(/[^a-zA-Z]+/ig, "").split('');
    for (var i = str1.length; i >= 0; i--) {
        ans.push(str1[i]);
    }
    return ans.join('');
}