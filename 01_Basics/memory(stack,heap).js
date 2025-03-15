// Stack(Primitive),  Heap(Non Primitive)


    // Stack Example

// isme se copy memory ja kar new values milta hain 

let youtubrName="TauhidFun"

let anotherName=youtubrName;

anotherName="TauhidShekhar"

console.log(anotherName);
console.log(youtubrName);


    //  Heap example 
        // isme main memory se values change hota hain 
let userOne={
    email:"tauhid@gmail.com",
}

let usetTwo=userOne;

usetTwo.email="tauhidshekhar.com";

console.log(userOne.email)
console.log(usetTwo.email)
