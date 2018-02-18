/*
Complete the solution so that the function will break up camel casing, using a space between words.
solution('camelCasing') // => should return 'camel Casing'

function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}

function solution(string){
  return string.replace(/[A-Z]/g, function(c){return " " + c;});
}
*/

function solution(string) {
    var ansString = '';
    for (var i = 0; i < string.length; i++) {
        if (string[i].toUpperCase() === string[i]) {
            ansString += ' ' + string[i];
        } else {
            ansString += string[i];
        }
    }
    return ansString;
}
solution('breakingCamelCasing')

