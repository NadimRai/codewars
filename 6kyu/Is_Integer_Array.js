/*
Write a function isIntArray with the below signature.

returns true if every element in an array is an integer. 
returns true if array is empty.
returns false for every other input.

function isIntArray(arr) {
  return Array.isArray(arr) && arr.every(function (x) { return Math.floor(x) === x });
}

let isIntArray = arr => !!arr && arr.every(Number.isInteger);
*/
function isIntArray(arr) {
    if (!Array.isArray(arr)) {
        return false;
    }
    if (arr.length < 1) {
        return true;
    }
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i])) {
            return false
        } else {
            count++
        }
    }
    if (count === arr.length) return true;
}

isIntArray(0)
