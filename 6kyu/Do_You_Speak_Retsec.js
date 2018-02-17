/*
You're given a single word. Your task is to swap the halves. If the word has an uneven length, leave the character in the middle at that position and swap the chunks around it.

reverseByCenter("agent") == "nteag" // center character is e
reverseByCenter("secret")  == "retsec" // no center character
*/

function reverseByCenter(s) {
    var ansArr = [];
    var sLength = s.length;
    var midPoint, firt, second;
    if (sLength % 2 === 0) {
        midPoint = (sLength / 2);
        first = s.slice(midPoint, sLength);
        ansArr.push(first);
        second = s.slice(0, midPoint);
        ansArr.push(second);
    } else {
        midPoint = Math.round(sLength / 2);
        pivot = s[midPoint - 1];
        first = s.slice(midPoint, sLength);
        ansArr.push(first);
        ansArr.push(pivot);
        second = s.slice(0, midPoint - 1);
        ansArr.push(second);
    }
    return ansArr.join('');
}

reverseByCenter("secret");
