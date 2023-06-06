let arrayToSwap = [1, 2, 3, 4, 5];

// swap 1 and 5 - first and last

console.log(`Original Array: ${arrayToSwap}`);

[arrayToSwap[arrayToSwap.length-1], arrayToSwap[0]] = [arrayToSwap[0], arrayToSwap[arrayToSwap.length-1]];

console.log(`Array After Swapping First and Last: ${arrayToSwap}`);

// new array is 5,2,3,4,1

// swap 5 and 2 - first and second

[arrayToSwap[1], arrayToSwap[0]] = [arrayToSwap[0], arrayToSwap[1]];

console.log(`Array After Swapping First and Second: ${arrayToSwap}`);
