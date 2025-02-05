function throttle(callback, wait) {
  let lastExecutedTime = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastExecutedTime >= wait) {
      // Update the last executed time and call the callback
      lastExecutedTime = now;
      callback(...args);
    }
  };
}
