// const userEmail = []

// if (userEmail) {
//     console.log("user email");
    
// }else {
//     console.log("don't user email");
    
// }

// falsy value 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value

// "0", "false", " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyobj = {}

// if (Object.keys(emptyobj).length === 0 ) {
//     console.log("object empty");
    
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);
