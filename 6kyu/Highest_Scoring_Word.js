/*
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

function high(x){
  //transform the input string into array & define a string of alphabetical latin characters
  var arr = x.split(' ');
  var str = 'abcdefghijklmnopqrstuvwxyz';
  //Iterate through the array with input words to find the one with the greatest sum
  var newArr = arr.map(function(word){
    var sum = 0;
    for (var i = 0; i < word.length; i++) {
      sum += str.indexOf(word[i]);
    }
    return sum;
  });
  //Return the word with the greatest sum
  return arr[newArr.indexOf(Math.max(...newArr))];
}

*/
function high(x) {
    var sum = 0;
    var ansArr = [];
    var arr = x.split(' ');
    var alpphabets = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < arr.length; i++) {
        var arrStr = arr[i].split('');

        for (var j = 0; j < arrStr.length; j++) {
            var idx = parseInt(alpphabets.indexOf(arrStr[j]));
            if (idx === -1) {
                continue;
            } else {
                sum += (idx + 1);
            }
        }
        ansArr.push(sum);
        sum = 0;
    }
    var ansIndex = indexOfMax(ansArr);
    return arr[ansIndex];
}

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }
    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    return maxIndex;
}

high('what time are we climbing up the volcano');
  //should return volcano