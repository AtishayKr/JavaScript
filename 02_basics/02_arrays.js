const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];

// marvel_heros.push(dc);
console.log(marvel_heros); //['thor','Ironman','spiderman',['superman','flash','batman']] => array inside array
console.log(marvel_heros[3]); // [ 'superman', 'flash', 'batman' ]

// const allHeros = marvel_heros.concat(dc);
// console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_Heros = [...marvel_heros, ...dc]; // => known as spread operator
console.log(all_Heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3,[4,5,6, [2,3]],7,8,9];
const real_another_array = another_array.flat(Infinity); // will flat the array
console.log(real_another_array); //[1, 2, 3, 4, 5, 6, 2, 3, 7, 8, 9]


console.log(Array.from("Atishay")); // ['A', 't', 'i','s', 'h', 'a','y']

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)) // [ 100, 200, 300 ]


