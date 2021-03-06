/*Implement the function unique_in_order which takes as argument a sequence and returns a 
list of items without any elements with the same value next to each other and preserving 
the original order of elements.

Example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

solution 1:
var uniqueInOrder=function(iterable){
  var unique =[];
  for(var i=0; i<iterable.length;i++){
  	if(iterable[i] !== iterable[i+1]){
    	unique.push(iterable[i]);
  	}
  }
 return unique;
}

solution 2:
var uniqueInOrder = function (iterable){
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}

solution 3:
var uniqueInOrder=function(iterable){
  return Array.prototype.filter.call(iterable, function(current, index){ return iterable[index - 1] !== current})
}

solution4:

var uniqueInOrder=function(iterable){
  var ansArray = [];
  for(var i=0; i<iterable.length; i++){
    var curr = iterable[i];
    var next = iterable[i+1];
    if(curr !== next){
      ansArray.push(curr);
    }
  }
  return ansArray;
}