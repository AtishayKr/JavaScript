

// Singleton Object
// const tinderUser = new Object();



const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Atishay";
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {

    email: "atishay@gmail.com",
    fullname: {
        userfullname: {
            firstname: "atishay",
            lastname: "kumar"
        }
    }
}

console.log(regularUser)
console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);     //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const obj4 = {...obj1, ...obj2};
console.log(obj4);


console.log(tinderUser);  // { id: '123abc', name: 'Atishay', isLoggedIn: false }
console.log(Object.keys(tinderUser)) //[ 'id', 'name', 'isLoggedIn' ] => return array with all keys.
console.log(Object.values(tinderUser)) //[ '123abc', 'Atishay', false ] => return array with all values.
console.log(Object.entries(tinderUser)) //[ [ 'id', '123abc' ], [ 'name', 'Atishay' ], [ 'isLoggedIn', false ] ]




// object destructuring
const course ={
    coursename: "js in hindi",
    price: "999",
    instructor: "Atishay"
}

console.log(course.instructor);
const {instructor} = course;
const {instructor: teacher} = course;
console.log(instructor); // Atishay
console.log(teacher) ; // Atishay



