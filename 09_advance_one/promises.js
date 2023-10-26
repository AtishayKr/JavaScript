
const promiseOne = new Promise((resolve, reject) => {
    //DO an async task
    setTimeout(() => {
        console.log("Async task is complete")
        resolve()
    }, 1000);
});
promiseOne.then(function(){
    console.log("promise consumed")
})





new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task2 is complete")
        resolve()
    }, 1000);
}).then(function(){
    console.log("promise consumed")
})




const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task2 is complete")
        resolve({username: "Atishay kumar"})
    }, 1000);
})
promiseThree.then(function(data){
    console.log(data)
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Atishay kumar"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})
promiseFour.then(function(data){
    console.log(data)
    return data.username;
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("The promise is either resolved or rejected")
})



const promiseFive = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Saurabh kumar", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);

})

async function consumePromiseFive(){

    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()





// async function getAllUsers() {

//     const response = await fetch("https://api.github.com/users/atishaykr");
//     const data = await response.json()
//     console.log(data);
// }
// getAllUsers();



fetch("https://api.github.com/users/atishaykr").then(function(response){

    return response.json()
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error)
})
