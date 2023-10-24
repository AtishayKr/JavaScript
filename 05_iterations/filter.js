// used to filter the element and stored to new array
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums1 = myNums.filter((num) => num > 4)
console.log(newNums1);


const newNums = myNums.filter((num) => {
    return num > 4
})

console.log(newNums);