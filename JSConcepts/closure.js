var a = 4;
var b = 4;
function closureExample() {
  var c = 4;
  return function () {
    console.log(a);
    console.log(b);
  };
}
console.log(closureExample());
