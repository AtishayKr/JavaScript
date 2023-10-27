
class User {

    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){ //this function is not accessible by any object of this class
        return `123`
    }
}

const obj = new User("Atishay")
console.log(obj.createId())  // this give error since this createId method is static