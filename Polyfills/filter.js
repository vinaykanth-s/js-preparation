const arr = [1, 2, 3, 4, 5];

const res = arr.filter((num) => num > 3);
console.log(res);

Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

const res2 = arr.myFilter((num) => num > 3);
console.log(res2);
