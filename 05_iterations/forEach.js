// forEach loop does not able to return anything, even if you return,
const coding = ["js", "ruby", "pythn", "cpp"];

coding.forEach((item) => {
    console.log(item);
})

const printMe = (item) => console.log(item);
coding.forEach(printMe); 


// It have acess of val , index, arr
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "javascript",
        languageFileName: "js"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})