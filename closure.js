function closure(b) {
  let a = 4;
  return function (c) {
    console.log(c);
    console.log(a);
    console.log(c);
    return c + a + 2;
  };
}

const total = closure(5);
console.log(total(2));
