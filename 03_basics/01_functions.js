 function sayMyname(){
   console.log("R");
   console.log("A");
   console.log("h");
   console.log("U");
   console.log("l"); 
 }

//  sayMyname()

// function addTwoNumbers(number1, number2){
//   console.log(number1 + number2);
// }

// addTwoNumbers(3, 5)

function addTwoNumbers(number1, number2){
//   let result = number1 = number2
//   return result

   return number1 + number2
 }

 const result = addTwoNumbers(3, 5)

//  console.log("Result: ", result);

function loginUserMessage(username = "Ram"){
  if(username === undefined){
        // console.log("please enter a username");
        return
      }
   return `${username} just loggd in`
}

// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage());


function calculateCartPrice(...num1){
  return num1

}

// console.log(calculateCartPrice(200, 400, 600 ));

const user = {
  username: "rahul",
  price: 199
}

function handleobject(anyobject){
  console.log(`Username is ${anyobject.username} 
    and price is ${anyobject.price}`);
  }

  // handleobject(user)
handleobject({
  username: "uday",
  price: 2000
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

console.log(returnSecondValue(myNewArray));
