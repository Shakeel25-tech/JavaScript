// Immediately Invoked Function Expresssion (IIFE)


(function chai(){
    //name IIFE
    console.log(`DB connected`);
    
})();//semicolon (;) is most imp in more than one IIEF without it, It will not understand where to end and through error

((name) =>{
    //Without name IIEF
    console.log(`DB two connected ${name}`);
    
})("raj")
