// Task3 from Nurtilek
const number = (num, fn) => {
  return !!fn ? fn(num) : num;
};

const zero = (fn) => (fn ? fn(0) : 0);
const one = (fn) => (fn ? fn(1) : 1);
const two = (fn) => (fn ? fn(2) : 2);
const three = (fn) => (fn ? fn(3) : 3);
const four = (fn) => (fn ? fn(4) : 4);
const five = (fn) => (fn ? fn(5) : 5);
const six = (fn) => (fn ? fn(6) : 6);
const seven = (fn) => (fn ? fn(7) : 7);
const eight = (fn) => (fn ? fn(8) : 8);
const nine = (fn) => (fn ? fn(9) : 9);

const plus = (inner) => {
  return function (outer) {
    return outer + inner;
  };
};

const minus = (inner) => {
  return function (outer) {
    return outer - inner;
  };
};

const times = (inner) => {
  return function (outer) {
    return outer * inner;
  };
};

const dividedBy = (inner) => {
  return function (outer) {
    return Math.floor(outer / inner);
  };
};

console.log(seven(times(five()))); // 35
console.log(four(plus(nine()))); // 13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two()))); // 3
console.log(eight(dividedBy(three()))); // 2
