let first = 'second';
let second = 'first';

console.log(`
    ////                                                                                \\\\\\\\                                                                            
            Before the swap. First varibale is ${first}, second varibale is ${second}.
    \\\\\\\\                                                                                ////     
`);

// Use array destructuring
[second, first] = [first, second];

console.log(`
    ////                                                                                \\\\\\\\                                                                            
             After the swap. First varibale is ${first}, second varibale is ${second}.
    \\\\\\\\                                                                                ////     
`);

