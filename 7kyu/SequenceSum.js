Sum of 'n' Numbers

sum_of_n (or SequenceSum.sumOfN in Java, SequenceSum.SumOfN in C#) takes an integer n and 
returns a List (an Array in Java/C#) of length abs(n) + 1. The List/Array contains the numbers in the
arithmetic series produced by taking the sum of the consecutive integer numbers from 0 to n 
inclusive.

n can also be 0 or a negative value.

Example:

5 -> [0, 1, 3, 6, 10, 15]

-5 -> [0, -1, -3, -6, -10, -15]

7 -> [0, 1, 3, 6, 10, 15, 21, 28]

Solution 1:
function sumOfN(n) {
  var array = [0];
  var arraySize = Math.abs(n); 
  var increase = 1;
  var incre = 0;
    for(var i=0; i<arraySize; i++){
      incre += increase;
      increase++;
      if(n<0){
        array.push(incre*(-1));
      }else{
        array.push(incre);
      } 
    }
 return array;
}

Solution 2:
function sumOfN(n) {
  for (var i = 0, list = []; i <= Math.abs(n); i++) {
    list.push((list[i - 1] || 0) + i * (n < 0 ? -1 : 1))
  }
  
  return list
}

Solution 3:
function sumOfN(n) {
  var arr=[0];
  var i =0,j=0;
  while(i-n!=0){
    var nextNum = n < 0 ? --i : ++i ;
    arr.push(nextNum + arr[j]);
    j++;
  }
  return arr;
};