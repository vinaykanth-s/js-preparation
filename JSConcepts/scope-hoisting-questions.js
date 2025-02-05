//question 1
var a = 10;

function test() {
  a = 20;
}

test();
console.log(a);

//question 2
function example() {
  if (true) {
    let x = 10; //or const
  }
  console.log(x);
}

example();

//question 3
let x = 10;
function foo() {
  console.log(x);
  let x = 20;
}
foo();

//question 4
var a = 1;
(function x() {
  console.log(a);
  if (a) {
    var a = 9;
  }
  console.log(a);
})();
