// get a random large floating point number from 0 to 1 (not including 1)
console.log(Math.random());

// get a random number between 0 and 1
const randomNumberZeroToOne = Math.floor(Math.random()*2);

console.log(`Generated random number between 0 and 1 is ${randomNumberZeroToOne}.`);

// get a random number between 1 and 10
    // Math.floor() rounds a number to the closest whole number (integer)
    // 0.4528293 * 10 = 4.528293
    // 4 + 1 = 5
    // plus 1 avoids 0 
const randomNumberOneToTen = Math.floor(Math.random()*10) + 1;

console.log(`Generated random number between 1 and 10 is ${randomNumberOneToTen}.`);

// get a random number between 0 and 10
const randomNumberZeroToTen = Math.floor(Math.random()*11);

console.log(`Generated random number between 0 and 10 is ${randomNumberZeroToTen}.`);

// get a random number between 1 and 20  
const randomNumberOneToTwenty = Math.floor(Math.random()*20) + 1;

console.log(`Generated random number between 1 and 20 is ${randomNumberOneToTwenty}.`);

// get a random number between 0 and 20
const randomNumberZeroToTwenty = Math.floor(Math.random()*21);

console.log(`Generated random number between 0 and 20 is ${randomNumberZeroToTwenty}.`);

// get a random number between 0 and 6
const randomNumberZeroToSix = Math.floor(Math.random()*7);

console.log(`Generated random number between 0 and 6 is ${randomNumberZeroToSix}.`);

// get a random number between 1 and 6
const randomNumberOneToSix = Math.floor(Math.random()*6) + 1;

console.log(`Generated random number between 1 and 6 is ${randomNumberOneToSix}.`);