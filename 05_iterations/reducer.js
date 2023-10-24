

const nums = [1, 2, 3, 4, 5];

const initialValue = 0;
const total = nums.reduce((accumulator, currentVal) => {
    console.log(`accumulato: ${accumulator}, currentValue: ${currentVal}`);
    return accumulator + currentVal
}, initialValue);

console.log(total);

// accumulato: 0, currentValue: 1
// accumulato: 1, currentValue: 2
// accumulato: 3, currentValue: 3
// accumulato: 6, currentValue: 4
// accumulato: 10, currentValue: 5





const shopingCart = [
    {
        itemName: "javascript",
        price: 200
    },
    {
        itemName: "cpp",
        price: 2000
    },
    {
        itemName: "pythn",
        price: 800
    }
]

const totalPrice = shopingCart.reduce((acc, item) => {
    return acc + item.price
}, 0)
console.log(totalPrice) // 3000