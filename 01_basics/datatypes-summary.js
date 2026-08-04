// Primitive 

// 7 types : String, Number, Boolearn, Null, Undefined, Symbol, BigInt

// const score = 100
// const score = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

const bigNumber = 564632945638645166136131n

// Reference (Non primitive)

// Array, objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myobj = {
    name: "Rahul",
    age: 23,
}

const myFunction = function(){
    // console.log("Hello world")
}

// console.log(typeof(bigNumber)) // bigint
// console.log(typeof(myFunction)) // function

// https://262.ecma-internationl.org/5.1/#sec-11.4.3  for documents



// ++++++++++++++++++++++++++++++++++++++++++

//  Stack(Primitive), Heap(Non-primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "rahul@google.com"

console.log(userOne.email);
console.log(userTwo.email);