Create a function that takes a string and returns that string with the first half lowercased 
and the last half uppercased.

eg: foobar == fooBAR

If it is an odd number then 'round' it up to find which letters to uppercase. 

Solution 1:
function sillycase(silly) {
  var a = silly.split('');
  var b = Math.round((a.length)/2);
  var c =a.splice(b);
  var firstHalf = a.join('').toLowerCase();
  var lastHalf = c.join('').toUpperCase();
  return firstHalf.concat(lastHalf);
}

Solution 2:
function sillycase(silly) {
  var c = Math.round(silly.length / 2);
  return silly.substr(0, c).toLowerCase() + silly.substr(c).toUpperCase();
}

Solution 3:
function sillycase(silly) {
  return silly.split('').map(function(c,i){return i<silly.length/2 ? c.toLowerCase():c.toUpperCase()}).join('')
}