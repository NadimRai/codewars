/*
Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
 
 deleteNth ([1,1,1,1],2) // return [1,1]

 deleteNth ([20,37,20,21],1) // return [20,37,21]
 
 function deleteNth(arr,x) {
 var cache = {};
 return arr.filter(function(n) {
   cache[n] = (cache[n]||0) + 1;
   return cache[n] <= x;
 });
}

function deleteNth(arr, x){
 return arr.reduce(function(a, v){
   return count(a, v) < x ? a.concat(v) : a;
 }, []);
}

function count(arr, z){
 return arr.filter(function(q){ return z == q }).length;
}
*/

function deleteNth(arr, n) {
    var object = {};
    var ansArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (object[arr[i]]) {
            object[arr[i]] += 1;
        } else {
            object[arr[i]] = 1;
        }
        if (object[arr[i]] <= n) {
            ansArr.push(arr[i]);
        }
    }
    return ansArr;
}
deleteNth([1, 1, 1, 1], 2) // return [1,1]