// memoise the funtion

function calculateFactorial(n) {
  if (n == 1 || n == 2) {
    return n;
  } else {
    return n * calculateFactorial(n - 1);
  }
}

function memoiseFunction(fun) {
  let cache = {};
  return function (...args) {
    let n = args[0];

    // let n = JSON.stringify(arguments);
    console.log(n);
    if (cache[n]) {
      return cache[n];
    } else {
      cache[n] = fun(n);
      return cache[n];
    }
  };
}

const exceute = memoiseFunction(calculateFactorial);
console.time();
console.log(exceute(8));
console.timeEnd();
console.time();
console.log(exceute(8));
console.timeEnd();
