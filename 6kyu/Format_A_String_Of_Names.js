
/*
Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

 function list(names){
   return names.map(function(x){ return x.name; }).join(", ").replace(/,(?!.*,)/gmi, " &");
 }
 
 function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }
 
 function list(names) {
  var xs = names.map(p => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(", ") + " & " + x : x || ""
}

*/
function list(names) {
    var ansArr = [];
    var arrLength = names.length;
    if (arrLength === 0) {
        return '';
    }
    if (arrLength === 1) {
        ansArr.push(names[0].name)
        return ansArr.join(", ")
    }
    for (var i = 0; i < names.length; i++) {
        if (i !== arrLength - 1) {
            ansArr.push(names[i].name + ',')
        } else {
            ansArr.push('& ' + names[i].name)
        }
    }
    var last = removeComma(ansArr[ansArr.length - 2]);
    var change = ansArr.indexOf(ansArr[ansArr.length - 2])
    ansArr.splice(change, 1, last);
    return ansArr.join(' ');
}

function removeComma(str) {
    var sp = str.split('');
    sp.pop();
    return sp.join('')
}

list([{ name: 'Bart' }])

