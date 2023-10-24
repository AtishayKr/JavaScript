let name = "Atishay";

console.log(`my name is ${name.toLowerCase()}`); // atishay

name = "            atishay";
console.log(name.trim()); // atishay

name = "my name is Atishay";
console.log(name.split(" ")); // ["my", "name", "is", "Atishay"];

console.log(name.indexOf('t')); // 12

console.log(name.length)

let temp = name.substring(0, 4);
console.log(temp) // my n

name = "atishay";
console.log(name.charAt(0).toUpperCase() + name.slice(1)); // Atishay (first character upper);