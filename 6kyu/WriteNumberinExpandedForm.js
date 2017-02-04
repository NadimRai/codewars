You will be given a number and you will need to return it as a string in Expanded Form. 
For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

Solution 1:
function expandedForm(num) {
  var expand = [],
    output = [],
    sNumber = num.toString(),
    ten = 10;
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
      output.push(+sNumber.charAt(i));
    }
    var d = output[output.length-1];
     output.pop();
    console.log(output);
    var c= output.length;
    var e = output.reverse();
    console.log(e);
    for(var j=0;j<c;j++){
      expand.push(e[j]*ten);
      ten *=10;
    }
    var g=expand.reverse();
    g.push(d);
    function isNotZero(value) {
      return value > 0;
    }
    var ans = g.filter(isNotZero);
    return ans.join(" + ");
}

Solution 2:
var expandedForm = (num) => {
  var arr = num.toString().split('').reverse();
  var result = [];
  for(var i = 0; i < arr.length; i++){
    arr[i] == 0 ? result.push() : result.push(arr[i] + ('0'.repeat(i)))
  }
  return result.reverse().join(' + ')
}

Solution 3:
function expandedForm(n) {
  return n.toString().split("").map((e, i) => e + "0".repeat(n.toString().length - i - 1)).join(" + ").replace(/ 0+ \+/g, "").replace(/ \+ 0$/, "");
}

Solution 4:
function expandedForm(num) {
  var result = "";
  for (var i = 1; num > 0; i*=10) {
    if (num % i !== 0) {
      if (result == "") {
        result = result + num % i;
      } else {
        result = (num % i) + " + " + result;
      }
    }
    num = num - num % i;
  }
  return result;
}