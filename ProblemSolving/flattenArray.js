function flatten(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? [...acc, ...flatten(val)] : [...acc, val],
    []
  );
}
console.log(flatten([[2, [3, [4, [5]]]]]));

console.log(flatten([1, [2, 3], [4, [5, 6]], 7]));
