// singleton
// object.create()

//object literals

const mySym = Symbol("123");
const MyUser = {
    name: "Atihay",
    "full name ": "Atishay Kumar",       // It will only access by MyUser["full name"];
    [mySym] : "my123",                   // It will also only access by MyUser[mySum];
    age: 18,
    email: "atishay1950@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(MyUser.name);
console.log(MyUser["name"]);
console.log(MyUser["full name "])
console.log(MyUser[mySym]);

MyUser.email ="atishay@gmail.com";

// Object.freeze(MyUser);        // Not able to change the object after this declaration.



MyUser.greeting = function() {

    console.log(`Hi ${this.name}`);
}

console.log(MyUser.greeting());

