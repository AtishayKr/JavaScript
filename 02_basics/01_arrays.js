const arr = [1,2,3, 'atishay', true]; // it is a collection of one or more datatype

console.log(arr); //[1, 2, 3, 'atishay', true];

console.log(arr[0]) // 1


//Array methods
arr.push(6);
console.log(arr); // [ 1, 2, 3, 'atishay', true, 6 ]

arr.pop();
console.log(arr)  // [ 1, 2, 3, 'atishay', true ]

arr.unshift(0);
console.log(arr)  //[ 0, 1, 2, 3, 'atishay', true ]  => add the element in start

arr.shift();
console.log(arr) //[ 1, 2, 3, 'atishay', true ] => remove the element from first

console.log(arr.includes(3)) // true
console.log(arr.indexOf(3)) // 2

const newArr = arr.join();
console.log(newArr); // 1,2,3,atishay,true  => array convert in string

const myNewArr = arr.slice(1, 2);
console.log(myNewArr);  // [ 2 ] 
console.log(arr);  // [ 1, 2, 3, 'atishay', true ] => original array is same when we use slice

const myNewArr2 = arr.splice(1, 2);
console.log(myNewArr2);  // [ 2, 3 ]
console.log(arr); // [ 1, 'atishay', true ]  => original array is not same in when we use splice


