/*
In this kata you are required to, given a string, replace ever
letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return
it. a being 1, b being 2, etc.

alphabet_position("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}

*/

function alphabetPosition(text) {
    var inputText = text.toLowerCase();
    var alphabets = "abcdefghijklmnopqrstuvwxyz";
    var ansArray = [];

    for (var i = 0; i < inputText.length; i++) {
        var index = alphabets.indexOf(inputText[i]);
        if (index === -1) {
            continue;
        } else {
            ansArray.push(index + 1);
        }
    }

    return ansArray.join(' ')
}

alphabetPosition("The sunset sets at twelve o' clock.")
  //20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11