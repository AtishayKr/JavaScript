function SetUserName(username){
    this.username = username
}

function createUser(username, email, password){

    // SetUserName(username) // thi will not call as refrence will delete after the exicution
    SetUserName.call(this, username) // .call will hold the refrence of the function SetUserName

    this.email = email
    this.password = password
}

const chai = new createUser("atishay", "atishay1950@gmail.com", "123");
console.log(chai);