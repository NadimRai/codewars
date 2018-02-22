/*
Your objective is to add formatting to a plain number to display it as price.

The function should return a string like this:

var price = numberToPrice(13253.5123);
console.log(price); // 13,253.51
Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

function should return a string 'NaN' if the input is not a valid number

var numberToPrice = function(n) {
  return typeof n != 'number' ? 'NaN' : n.toFixed(3).replace(/\d$/, '').replace(/(\d)(?=(?:\d{3})+\.)/g, '$1,')
}

function numberToPrice(number) {
  if (isNaN(number) || number === '') {
    return NaN.toString();
  }
  let sign = (number < 0 ? '-' : '');
  number = Math.abs(number).toFixed(3).slice(0, -1);
  let chars = number.toString().split('');
  for (let i = chars.length - 6; i > 0; i -= 3) {
    chars.splice(i, 0, ',');
  }
  return sign + chars.join('');
}

*/
var numberToPrice = function (number) {
    if (typeof (number) !== 'number') {
        return 'NaN';
    }

    var numStr = number.toString();
    var numArr = numStr.split('');
    if (numArr[0] === '-') {
        var aa = "-" + numArr[1];
        numArr.splice(0, 2)
        numArr.unshift(aa)
        console.log(numArr)
    }
    if (numArr.includes('.')) {
        var dot = numArr.indexOf('.');
        var decimal = numArr.splice(dot);
        var first = commSep(numArr);
        if (decimal.length > 3) {
            decimal.splice(3)
        } else if (decimal.length <= 2) {
            decimal.push(0);
        }
        return first.concat(decimal.join(''));
    } else {
        var aaa = commSep(numArr);
        return aaa + ".00"
    }
}


function commSep(arrNum) {
    var arr = [];

    while (arrNum.length > 3) {
        var b = arrNum.splice(arrNum.length - 3);
        arr.unshift(b.join(''));
    }
    arr.unshift(arrNum.join(''))
    return arr.join(',')
}



numberToPrice(-10000)
//should return '-10,000.00'