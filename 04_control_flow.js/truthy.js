// falsy values
// false, 0, -0, 0n, "", null, undefined, Nan

//truthy values
// "0", 'false', " ", [], {}, function(){}


//if wants to check the array
let arr = [];
if(arr.length){
    console.log('THis is true')
} else {
    console.log("this is false");
}

// check if object is empty
let obj = {}
if(Object.keys(obj).length) {
    console.log("this is true");
} else {
    console.log("this is false");
}


// Nulish Coalescian Operator (??) : null undefined
let val1;
val1 = 5 ?? 10;
console.log(val1);

let val2;
val2 = null ?? 10
console.log(val2);

let val3;
val3 = undefined ?? 20;
console.log(val3);