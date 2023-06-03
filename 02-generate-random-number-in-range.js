const minVal = 5;
const maxVal = 10;

function randomNumberGenerate(min, max) {

    const multiplier = max - min + 1; // 10 - 5 + + 1 = 6
    console.log(multiplier);
    
    const output =  Math.floor(Math.random()*multiplier) + min; 
    console.log(output);
    return output;

};

const result = randomNumberGenerate(minVal, maxVal);

console.log(result);

// Example: 
// 0.5174654281948983 * 6 = 3.104792569169388
// 3.104792569169388 + 1 = 4.104792569169388
// Math.floor(4.104792569169388) = 4 - random number generated 