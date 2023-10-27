const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor) // we can not change the value of PI and other constant define by javascript because of the following properties
/*

    {
    value: 3.141592653589793,
    writable: false,
    enumerable: false,  // if this is false, this particular element will not visible, when we try to loop on object
    configurable: false
    }

*/

const user = {
    name: 'atishay',
    email: 'atishay@gmail.com',
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(user, "name")) //when we create new object we have the following default properties
/*
    {
    value: 'atishay',
    writable: true,
    enumerable: true,
    configurable: true
    }

*/

Object.defineProperty(user, 'name', { //we can change the default properties by this way
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(user, 'name')) 
/*

    {
    value: 'atishay',
    writable: false,
    enumerable: false,
    configurable: true
    }

*/