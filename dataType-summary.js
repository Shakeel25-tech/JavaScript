//  Primitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const id = Symbol('123')
const anotherIdn = Symbol('123')
console.log(id==anotherIdn);




const bigNumber = 345876487737497697457697n


// Non-Primitive (Reference)

const hero = ["Shaktiman", "Iron Man", "Superman"];
console.log(hero);


let myObj = {
    name: "xyz",
    age: "20"
}
console.log(myObj);

let myFunction = function(){
    console.log("go to hell");
    
}




