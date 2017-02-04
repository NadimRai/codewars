Task
Given an array of integers, remove the smallest value. If there are multiple elements with 
the same value, remove the one with a lower index. If you get an empty array/list, 
return an empty array/list.

Do not change the order of the elements that are left.

Examples:
removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1]

Solution 1:
function removeSmallest(numbers) {
  var a = numbers;
  var b=[];
  if (a === undefined || a.length === 0) {
    return a;
  }else{
    min = Number.MAX_VALUE;
    for (var i = 0, l = a.length; i < l; i++) {
    min = Math.min(min, a[i]);
  }
   for(var j=0;j<a.length;j++){
      if(a[j]=== min){
         a.splice(j,1);
         return a;
      }
    }
  }
}

Solution 2:
function removeSmallest(numbers) {
  if(!numbers)return [];
  var min=Math.min.apply(null,numbers);
  numbers.splice(numbers.indexOf(min),1);
  return numbers;
}

Solution 3:
var index;
function removeSmallest(numbers) {
   index = numbers.indexOf(Math.min.apply( Math, numbers ));
   numbers.splice(index, 1);
   return numbers;
}

Solution 4:
function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}
