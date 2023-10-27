//In javascript we can say th basic unit is Object

const user = {
    username: "Atishay",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user detailx from database");
        //console.log(`username: ${this.username}`)
        console.log(this);


    }
}

console.log(user.getUserDetails()); // print the current contest, as getUserDerails current context is Object User, Hence it print the below thing
/* 
{
  username: 'Atishay',
  loginCount: 8,
  signedIn: true,
  getUserDetails: [Function: getUserDetails]
}
*/


// constructor function
function User(username, loginCount, isLoggesdInd) {
    this.username = username
    this.loginCount = loginCount
    this.LoggedIn = isLoggesdInd

    return this // Bydefault function return 'this' current contxt
}
const userOne = new User("Atishay", 12, true);
console.log(userOne);
console.log(userOne.constructor); // [Function: User] , constructor is the refrence of the own function only