class User {

    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptpassword(){
        return `${this.password}`
    }

    changeUserName() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Atishay", "atishay@gamil.com", "123");
console.log(chai.encryptpassword());
console.log(chai.changeUserName());




// BEHIND THE SCENE
function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}`;
}

User.prototype.changeUserName = function() {
    return `${this.username.toUpperCase()}`
}

const Tea = new User("Atishay", "atishay@gmail", "234");
console.log(Tea.encryptPassword());
console.log(Tea.changeUserName());