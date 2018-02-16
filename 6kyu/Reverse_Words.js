/*Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Any spaces in the string should be retained.
  
  reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
  reverseWords("double  spaces"); // returns  "elbuod  secaps"
  
  function reverseWords(str) {
    var array=[]
    var ansArr= str.split(" ")
    for(var i=0;i<ansArr.length;i++){
      array.push(ansArr[i].split("").reverse().join(""))  
    }
    return array.join(" ")
    
  function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }
}
*/

function reverseWords(str) {
    var ansArr = [];
    var arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        for (var j = arr[i].length - 1; j >= 0; j--) {
            ansArr.push(arr[i][j])
        }
        ansArr.push(" ")
    }
    return ansArr.join("");
}
reverseWords('The quick brown fox jumps over the lazy dog.');
  //'ehT kciuq nworb xof spmuj revo eht yzal .god'

