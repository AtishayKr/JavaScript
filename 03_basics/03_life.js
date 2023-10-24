// Immediately Invoked Function Expressions (IIFE)

(function connection() {
    //named IIFE
    console.log(`DB is connected`);
})();


(() =>  {
    console.log(`DB-2 is connected`);
})();


((name) =>  {
    console.log(`${name} is connected`);
})("atishay");

