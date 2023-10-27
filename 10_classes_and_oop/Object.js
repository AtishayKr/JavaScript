function multiplyBy5(num){
    return num * 5;
}

multiplyBy5.power = 2
// console.log(multiplyBy5(5)); // normal as function works
// console.log(multiplyBy5.power); // since function is also resolved at Object at higher level(we can say protype inheritance) hence we have access of object method too
// console.log(multiplyBy5.prototype); // we can access the prototype of function





function createUser(username, score) {

    this.username = username  // this will create the property username at current context and assign username to current contest
    this.score = score
}

createUser.prototype.increment = function() {
    this.score++;
}

createUser.prototype.printMe = function() {
    console.log(`score is ${this.score}`);
}

// const chai = createUser("chai", 25) //this only assign the default protype method of object but not the newOne that is create by us above, to do so we hace to use 'new' keyword
const chai = new createUser("chai", 25) //since we use 'new' keyword here it will search for all userdefine protype method and link this with OBject and return new object for u
// const tea = createUser("tea", 250); // this overrite the chai Object, if we want the new instance of object we have to declare this as a 'new' object
const tea = new createUser("tea", 250) // now this reaturn the new instance of createObject
chai.printMe()

/*
    Here's what happens behind the scenes when the new keyword is used:

    A new object is created: The new new keywoetd initiates the creation of a new JavaScript object.

    A protype is linked: The newly created object get linked to the protype propert of the constructor function. 
    This means that it has access to properties and methods defined on the constuctor's protype.

    The constructor is called: The constructor function is called with specified arguments and this is bound to the
    newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, 
    the newly created object, to be the intended return value.

    The new object is returned: After the constructor function bas been called, if it doesn't 
    return a non-primitive value (object, array, funciton, etc.), the newly careted object is returned.
*/