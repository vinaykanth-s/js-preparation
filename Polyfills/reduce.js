const arr = [1, 2, 3, 4, 5];

let res = arr.reduce((acc, cur) => acc + cur, 0);
console.log(res);

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? callback(accumulator, this[i]) : this[i];
  }
  return accumulator;
};

let res2 = arr.myReduce((acc, cur) => acc + cur, 0);
console.log(res2);
