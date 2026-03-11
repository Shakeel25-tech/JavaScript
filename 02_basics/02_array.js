const marvel_heros = ["Ironman", "Thor", "Spiderman"];
const dc_heros = ["Flash", "Superman", "Batman"];

// marble_heros.push(dc_heros);

// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);


//concat operator
const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

//spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

//Array.from() → convert something into array
console.log(Array.isArray("Shakeel"));//return false because shakeel is not a array
console.log(Array.from("Shakeel"));//return shakeel in an array form
console.log(Array.from({name:"Shakeel"}))//it will return an empty array untill u specify key or value to change in array

//Array.of() → create array from values
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));







