const b=500
if(true){
    let a=10
    const b=20
    var c=30
    console.log("Inner: ",b);
    
}
//console.log(a);
console.log("outer: ",b);
console.log(c);


//let & const → block scoped
//var → function scoped (can leak outside blocks)
//Avoid using var in modern JavaScript — use let or const to prevent unexpected bugs like this