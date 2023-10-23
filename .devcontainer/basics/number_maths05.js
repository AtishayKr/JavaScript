let score = 1234;

console.log(score.toString());
console.log(score.toFixed(2));

score = 123.438948;
console.log(score.toPrecision(5));

score = 483928943;
console.log(score.toLocaleString()); // 483,928,943
console.log(score.toLocaleString('en-IN')); // 48,39,28,943


// +++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++++++


console.log(Math.abs(-4)); // 4
console.log(Math.round(4.3)); // 4
console.log(Math.floor(4.3)); // 4
console.log(Math.ceil(4.3));  // 5
console.log(Math.min(4, 5, 2, 6, 9)); // 2
console.log(Math.max(3, 4, 5,2 ,6 ,7)); //7

console.log(Math.floor(Math.random() * 10) + 1); // value will always lies between 1 to 10;


const min = 1;
const max = 6;
console.log(Math.floor(Math.random() * (max - min + 1) + min));  // value lies between min to max;


