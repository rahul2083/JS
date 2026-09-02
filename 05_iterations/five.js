const coding = ["js", "rb", "py", "php", "java"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

coding.forEach( (item) => {
    // console.log(item);
    
} )

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr ) => {
//     console.log(item, index, arr);
// })

const myCodding = [
    {
        language: "js",
        framework: "react"
    },

    {
        language: "rb",
        framework: "rails"          
    },

    {
        language: "py", 
        framework: "django"
    }
]

myCodding.forEach( (item) => {
    console.log(item.language);
})