/*
Measures the time taken by a function to execute.

Use console.time() and console.timeEnd() to measure the difference between the start and end times 
to determine how long the callback took to execute.
*/

const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};