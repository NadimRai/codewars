/*
Given an array, find the int that appears an odd number of times.
There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  return A.reduce(function(c,v){return c^v;},0);
}

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

*/
function findOdd(A) {
    A.sort();
    var count = 0;
    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < A.length; j++) {
            if (A[i] === A[j]) {
                count++;
            }
        }
        if (count % 2 !== 0) {
            return A[i];
        }
        count = 0;
    }
}
findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])
  //should return 5