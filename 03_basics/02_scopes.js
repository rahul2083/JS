// let a = 10
// const b = 20
// var c = 30

let a = 300
if (true) {
    let a = 10
const b = 20
console.log("INNER: ", a);
    
}

console.log(a);
// console.log(b);
// console.log(c);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


function one(){
    const username = "Rahul"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }
    console.log(website);

    two()
}
