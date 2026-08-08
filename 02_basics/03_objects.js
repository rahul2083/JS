// singleton 

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Rahul",
    "fullname": "Rahul Sharma",
    [mySym]: "mykey1",
    age: 18,
    location: "Alwar",
    email: "rahul@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);
// console.log(JsUser[mySym]);


JsUser.email = "rahul@chat.com"
// Object.freeze(JsUser)
JsUser.email = "rahul@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("heello JS JsUser");
    
}

JsUser.greetingTwo = function(){
    console.log(`heello JS JsUser, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
