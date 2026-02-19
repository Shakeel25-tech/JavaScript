//+++++++++++++++++++++++++ Numbers +++++++++++++++++++++

const score = 400
console.log(score);

//using new keyword it will definately number

const balance = new Number(100)
console.log(balance);

console.log(balance.toFixed(2));//it give upto two decimal value ==>like 100.00





/*using toString method the number is treated as string can now we can perform any st
ring operation on it. */
console.log(balance.toString());

console.log(balance.toString().length);



//Another methods

//It will return roundoff value as u want. The 4 means upto 4 digits.
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));


//It will return values seperated with commas on Indian standard.
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));



//+++++++++++++++++++++++ Maths +++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.floor(4.5));
console.log(Math.ceil(4.5));
console.log(Math.min(1,2,34,5));
console.log(Math.max(1,2,34,5));

//Understanding random method

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min + 1))+min);

