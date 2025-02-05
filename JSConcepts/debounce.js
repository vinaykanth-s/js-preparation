console.log('debounce module');

const ele = document.querySelector('input');

function getData(data) {
  console.log('Fetching data...', data);
}

function debounce(cb, wait) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
      timer = setTimeout(() => cb(args), wait);
    }
  };
}

const result = debounce(getData, 500);

ele.addEventListener('keydown', result);

// function debounce(callback, wait) {
//   let timeoutId = null;

//   function debounced(...args) {
//     // Clear the existing timeout
//     if (timeoutId) clearTimeout(timeoutId);

//     // Set a new timeout
//     timeoutId = setTimeout(() => {
//       callback(...args);
//       timeoutId = null; // Reset timeoutId after execution
//     }, wait);
//   }

//   // Method to cancel pending invocations
//   debounced.cancel = function () {
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//       timeoutId = null; // Reset timeoutId
//     }
//   };

//   // Method to flush pending invocations immediately
//   debounced.flush = function (...args) {
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//       callback(...args);
//       timeoutId = null; // Reset timeoutId after execution
//     }
//   };

//   return debounced;
// }
