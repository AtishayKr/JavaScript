// not able to filter only iterate each element of array like forEach but able to return the element

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newNums = myNumbers.map((item) => item + 10);
console.log(newNums); //[11, 12, 13, 14, 15, 16, 17, 18, 19]


// chaining 
newNums = myNumbers.map((item) => item * 40).map((item) => item + 1).filter((item) => item >= 50)
console.log(newNums);