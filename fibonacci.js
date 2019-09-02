function fibonacci(n, a = 0, b = 1) {
  if (n == 1) {
    return b;
  }

  var temp = a;
  a = b;
  b = a + temp;

  return fibonacci(n - 1, a, b);
}


console.log(fibonacci(5))
