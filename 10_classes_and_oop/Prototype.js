let myName = "Atishay      ";
console.log(myName.length);     //It prints the length as 13 But we need any method through which we can print 7;





let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//Creating new method on object level
Object.prototype.atishay = function() {     // Since we create this at objct level 
    console.log(`Atishay is present in all object`) //and everything is going through object this protype method atishay is accessible by all object, array, string
}

console.log(heroPower.atishay()); //Atishay is present in all object
console.log(myHeros.atishay()); // Atishay is present in all object




//Creating new method on Array level
Array.prototype.hiArray = function(){
    console.log(`This is created at array level`);
}

console.log(myHeros.hiArray()) // since myHero is array it can access hiArray and print => This is created at array level
// console.log(heroPower.hiArray()) // since heroPower is an object which is higher then array it can not access hiArray method and throw array







// Inheritance
const user = {
    name: "Atishay",
    email: "atishay@gmail.com"
}

const Teacher ={
    makeVideo: true
}

const TeachingSupport = {
    isAvailabe: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport              // this is for inherit the property of Teaching Support (old method for inheritance)
}

Teacher.__proto__ = user               // this also can use if want to declare outside (again old method for inheritance)

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) //here TeachingSupport can access the property of Teacher








// solving the above first One proble 
let name = "Atishay        ";
String.prototype.trueLength = function() {
    console.log(`True length is: ${this.trim().length}`);
}
name.trueLength(); // trueLength can be used on any string, since this define as protype of String, here it print => True length is: 7 