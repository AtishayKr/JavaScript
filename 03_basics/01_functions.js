function sayMyName() {
    console.log("Atishay Kumar");
}
sayMyName();

function addTwoNumbers(num1 = 0, num2 = 0) {
    console.log(num1 + num2);
}
addTwoNumbers(94, 3);
addTwoNumbers();

//parameters => when pass in in function during definition
//arguments => when pass during calling of function


// rest operator
// function calculateCartPrice(...num1) {
//     console.log(num1);
// }
// calculateCartPrice(100, 200, 300, 400);  // [ 100, 200, 300, 400 ]


function calculateCartPrice(val1, val2, ...num1) { 
    console.log(num1);
}
calculateCartPrice(100, 200, 300, 400);  // [ 300, 400 ] => 100 & 200 goest to val1 & val2