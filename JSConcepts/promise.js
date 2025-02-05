const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('p1 success'), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('p1 success'), 3000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('p1 success'), 3000);
});

//returns an array if all are fulfilled, else returns an error
Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//allSettled returns an object
Promise.allSettled([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// race returns the value of first fulfilled promise or error of first failed promise
Promise.race([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//returns an aggregate error if all fail
Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
