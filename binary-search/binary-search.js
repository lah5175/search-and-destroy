'use strict';

// Complete this algo
// const binarySearch = (array, target) => {
// 	const sorted = array.sort((a, b) => a - b);
// 	const midpoint = Math.floor(sorted.length/2);
// 	if (sorted.length <= 1){
// 		if(sorted[0] === target){
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// 	let slicedArr = []
// 	if (sorted[midpoint] === target){
// 		return true;
// 	} else if (target > sorted[midpoint]){
// 		slicedArr = sorted.slice(midpoint)
// 	} else {
// 		slicedArr = sorted.slice(0, midpoint);
// 	}
// 	console.log(slicedArr);
// 	return binarySearch(slicedArr, target);
// };

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/


const binarySearch = (array, target) => {
	let upper = array.length;
	let lower = 0;
	while(upper - lower > 1){
		let midpoint = Math.floor((upper - lower) / 2) + lower;
		console.log('midpoint', midpoint);
		if(array[midpoint] === target){
			return true;
		} else if (target > array[midpoint]){
			lower = midpoint;
		} else {
			upper = midpoint;
		}
	}
	if(array[upper] === target || array[lower] === target) return true;
	return false;
}

module.exports = binarySearch
