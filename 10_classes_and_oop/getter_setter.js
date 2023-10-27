class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
}

const obj = new User("atishay@gmail.com", "123");
console.log(obj.password);