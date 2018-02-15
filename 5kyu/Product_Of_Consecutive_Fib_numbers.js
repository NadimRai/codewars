/*
Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying
F(n) * F(n+1) = prod.
Your function productFib takes an integer (prod) and returns an array:
productFib(714) # should return [21, 34, true], 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return [34, 55, false], 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55

function productFib(prod){
  let [a, b] = [0, 1];
  while(a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}

function productFib(prod){
  let a = 0;
  let b = 1;
  for (let i = 0; i < prod; i++) {
    if (a * b > prod) return [a, b, false];
    if (a * b === prod) return [a, b, true];
    [a, b] = [b, a + b];
  }
}

*/
function productFib(prod) {
    current_value = 0;
    var x = 0;
    var fib1,
        fib2;
    while (current_value < prod) {
        x += 1;
        fib1 = fibonacci(x);
        fib2 = fibonacci(x + 1)
        current_value = fib1 * fib2;
    }

    if (current_value === prod) {
        return [fib1, fib2, true]
    } else {
        return [fib1, fib2, false]
    }
}

function fibonacci(n) {
    var a = 0;
    var b = 1;
    var c;
    for (var i = 2; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

productFib(5895)
