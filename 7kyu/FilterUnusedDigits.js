Given few numbers, you need to print out the digits that are not being used.

Example:
unusedDigits(12, 34, 56, 78) // "09"
unusedDigits(2015, 8, 26) // "3479"

Solution 1:
function unusedDigits(a){
 var ans=[];
 var num = a.join('');
 var nums = num.split('');
 var roots = nums.map(function(x) {
   return parseInt(x) ;
 });

for(var i=0;i<=9;i++){
	if(roots.indexOf(i) === -1){
    ans.push(i);
  }
}
  return (ans.join(''));
}

Solution 2:
function unusedDigits(...args){
  return "0123456789".replace(new RegExp('['+args.join('')+']','g'), '')
}

Solution 3:
function unusedDigits(...args){
  return args.reduce(function(left, num) {
    (num+'').split('').map(function(digit) {
      left = left.replace(digit, '');
    });
    return left;
  }, '0123456789');
}

