'use strict';

// Complete this algo
const minJumps = arr => {
  let currentIdx = 0;
  let jumps = 0;

  while (currentIdx < arr.length-1){
    let value = arr[currentIdx];

    if (currentIdx + value >= arr.length-1){
      return jumps+1;
    }

    const steps = arr.slice(currentIdx+1, currentIdx + value + 1);
    const maxVal = Math.max.apply(null, steps);
    const stepIdx = steps.indexOf(maxVal) + currentIdx + 1;

    jumps++;
    currentIdx = stepIdx;
  }
};

module.exports = minJumps
