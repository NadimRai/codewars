/*
    seven(times(five())); // must return 35
    four(plus(nine())); // must return 13
    eight(minus(three())); // must return 5
    six(dividedBy(two())); // must return 3

    Requirements:
    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
*/

function calculation(num, operation) {
    if (operation === undefined) {
        return num;
    } else {
        return operation(num);
    }
}

function zero(n) {
    return calculation(0, n);
}
function one(n) {
    return calculation(1, n);
}
function two(n) {
    return calculation(2, n);
}
function three(n) {
    return calculation(3, n);
}
function four(n) {
    return calculation(4, n);
}
function five(n) {
    return calculation(5, n);
}
function six(n) {
    return calculation(6, n);
}
function seven(n) {
    return calculation(7, n);
}
function eight(n) {
    return calculation(8, n);
}
function nine(n) {
    return calculation(9, n);
}

function plus(right) {
    return function (left) { return left + right; };
}
function minus(right) {
    return function (left) {
        return left - right;
    };
}
function times(right) {
    return function (left) { return left * right; };
}
function dividedBy(right) {
    return function (left) { return left / right; };
}

eight(minus(three())); // return 5
