Your goal in this kata is to implement an difference function, which subtracts one list from another.
It should remove all values from list a, which are present in list b.
difference([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:
difference([1,2,2,2,3],[2]) == [1,3]

solution 1:
function array_diff(a, b) {
  return a.filter(function(value){
        return b.indexOf(value) == -1;
    });
}

solution 2:
function array_diff(a, b) {
	var arr = new Array();
    for(var i = 0;i<a.length;i++){
        if(b.indexOf(a[i])<0){
            arr.push(a[i]);
        }
    }
  
    return arr;
}

solution 3:
function array_diff(a, b) {
  return a.filter(function(value)
  {
    return !(b.includes(value))  
  });
}
