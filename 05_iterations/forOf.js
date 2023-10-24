// for of It will print value by default and does not work on object

const arr = [1,2,3,4];

for (const num of arr) {
    console.log(num);
}

// Maps
const map = new Map();
map.set('IN', "India")
map.set('UDA', "United States of America")
map.set('Fr', "France")

console.log(map)

for(const [key, val] of map) {
    console.log(key);
}

// const myObject = {
//     'game': 'NFS',
//     'game': 'Spiderman'
// }
// for(const key of myObject) {       // not able to iterate object through forof loop
//     console.log(key); 
// }

