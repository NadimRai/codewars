Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. 
No floats or empty arrays will be passed.

For example, when an array is passed like [19,5,42,2,77], the output should be 7.

[10,343445353,3453445,3453545353453] should return 3453455.

Solution 1: //Bubble Sort
function sumTwoSmallestNumbers(numbers) {  
   var len = numbers.length;
  do{
    for(var i=0; i<len-1; i++){
      if(numbers[i]>numbers[i+1]){
        swap(numbers,i,i+1);
      }
    }
  }while(len--);
  return numbers[0]+numbers[1];
};

function swap(arr,indexA,indexB){
  var tmp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = tmp;
}

Solution 2:
function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};

Solution 3:
function sumTwoSmallestNumbers(numbers) {  
  var min = Number.MAX_SAFE_INTEGER;
  var secondMin = Number.MAX_SAFE_INTEGER;
  
  var n;
  for (i = 0; i < numbers.length; i++) {
    n = numbers[i];
    if(n < min) {
      secondMin = min;
      min = n;
    } else if( n < secondMin ) {
      secondMin = n;
    }
  }
  
  return min + secondMin;
}

Solution 4:
function sumTwoSmallestNumbers(numbers) {  
  var lowest = numbers.sort(function(a, b){return b-a}).slice(-2);
  return lowest.pop() + lowest.pop();
};