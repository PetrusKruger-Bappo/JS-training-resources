// As per tutorial from Web Dev Simplified
// * https://youtu.be/DHvZLI7Db8E?t=297

let p = new Promise((resolve, reject)=> {

    let a = 1+1;
    if (a==2){
        resolve("Success")
    }else {
        reject("Failed")
    }
})

p.then((message)=> {
    console.log('This is in the the "then": '+ message)
}).catch((message)=> {
    console.log('This is in the "catch": '+ message)
})