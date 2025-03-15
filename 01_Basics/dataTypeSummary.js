// Primitive 
   
    //  7 Type  => string, number, Boolearn, null, undefiend, symbol, BigInt


const score = 100           //Number
const scoreValue = 100.3

const isLoggedIn = false        // Boolearn
const outsideTemp = null      //object
let userEmail;              //undefinde

const id = Symbol('123')            //Symbol 
const anotherId = Symbol('123')

console.log(id === anotherId);          //Comprison 

// const bigNumber = 3456543576654356754n       // BigInt 



// Reference (non primitive)

    // Array, Object, Function


const heros = ["shaktiman", "spider man", "iron man"];  // Object

let myObj = {       // Object 
    name: "hitesh",
    age: 22,
}

const myFunction = function(){   // Function (Object)
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


JavaScript ek dynamically typed language hai, jisme variable ke types ko runtime par decide kiya jata hai, aur aap variables ke types ko change kar sakte hain bina error ke.
