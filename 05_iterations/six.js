// const coding = ["js", "rb", "py", "php", "java"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
  
// })
// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
//    } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {
        title: "Book one", genre: "History", publish: 1990, 
        edition: 2016
    },

    {
       title: "Book Two", genre: "SS", publish: 1896, 
        edition: 2009
    },

    {
        title: "Book Three", genre: "Science", publish: 1995, 
        edition: 2003
    },

    {
        title: "Book Four", genre: "Non-Fiction", publish: 1992, 
        edition: 2002
    },

    {
        title: "Book five", genre: "Fiction", publish: 2000, 
        edition: 2006
    }
];

let userBooks = books.filter( (bk) => bk.genre === 'History' )

userBooks = books.filter( (bk) => {
    return bk.publish  >= 1995 && bk.genre === 'Hitory'
} )
console.log(userBooks);




