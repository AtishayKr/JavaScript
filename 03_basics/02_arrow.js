const user = {
    username: "Atishay",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome`)
        console.log(this);
    }
}

user.welcomeMessage(); // Atishay, welcome

// arrow funciton
const one = () => {
    console.log("hi");
}
one();

const two = () => console.log("hi");
two();

const add = (num1, num2) => (num1 + num2)


const three = (num1, num2) => ({name : "atishay", calss: "top"}) // return object in this way