function sayHello(){
    console.log("Hello World")
}

let greet = (name) => {
    console.log(`Welcome, ${name}`)
}

function myCallBack(callback){
    callback();
}

//Call
myCallBack(sayHello)

function myCallBackGreet(name, callback){
    callback(name);
}

//Call
myCallBackGreet("Pritesh", greet)

function myCallBackGreetNEW(n, name, hello /*sayHello*/, greeting /*greet*/){
    if(n == 1)
        greeting(name);
    else
        hello()
}

//Call
myCallBackGreetNEW(1, "Pritesh", sayHello, greet)
myCallBackGreetNEW(2, "Pritesh", sayHello, greet)

myCallBackGreetNEW(2, "Pritesh", () => { console.log("I am direct called") }, greet)

