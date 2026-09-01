// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 4) {
        // console.log("4 is good");
        
    } 
    // console.log(element); 
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`iner loop value: ${i} and inner loop ${j}`);
        // console.log(i + '*' + j + ' = ' + i*j );
    }
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and contiune

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log('5 mil gya hai');
//         break
//     }
//     console.log(`value of i is ${index}`);  
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log('5 mil gya hai');
        continue
    }
    console.log(`value of i is ${index}`);  
}