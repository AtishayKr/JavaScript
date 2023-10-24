
let date = new Date();

console.log(date) // 2023-10-23T18:32:24.641Z
console.log(date.toDateString()); //Mon Oct 23 2023
console.log(date.toLocaleString()); //10/23/2023, 6:33:53 PM
console.log(date.toISOString()); //2023-10-23T18:35:19.746Z
console.log(date.toJSON()); //2023-10-23T18:35:19.746Z
console.log(date.toLocaleDateString()); //10/23/2023
console.log(date.toLocaleTimeString()); //6:35:19 PM

// let myCreatedDate = new Date(2023, 0, 24);
// let myCreatedDate = new Date("2023-01-11");
let myCreatedDate = new Date("01-11-2023");
console.log(myCreatedDate.toLocaleString()); //11/24/2023, 12:00:00 AM


let timeStamp = Date.now();
console.log(timeStamp);
console.log(myCreatedDate.getTime());

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getTime());