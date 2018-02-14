/*
Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') 
between each two odd numbers in num. For example: if num is 454793 the output 
should be 4547-9-3. Don't count zero as an odd number.
*/

function insertDash(num) {
    var strNum = num.toString().split('');

    for (var i = 0; i < strNum.length; i++) {
        if (parseInt(strNum[i] % 2) && parseInt(strNum[i + 1] % 2)) {
            strNum.splice(i + 1, 0, '-');
        }
    }

    return strNum.join('');
}

insertDash(454793)
  //should return 4547-9-3
