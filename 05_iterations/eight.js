const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval ) { 
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)

const myTotal =  myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingcart = [
    {
        itemName: "js course",
        price: 2333
    },

     {
        itemName: "py course",
        price: 3000
    },

     {
        itemName: "mobile course",
        price: 2000
    },

     {
        itemName: "data science course",
        price: 2333
    },
]

const pricetopaay = shoppingcart.reduce((acc, item) =>
     acc + item.price, 0)

console.log(pricetopaay);
