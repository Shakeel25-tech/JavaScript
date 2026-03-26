// function addTwonumbers(number1,number2){
//     console.log(number1+number2);
    
// }
// addTwonumbers(4,1)

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
    
}
console.log(loginUserMessage("Raj"));


function calculateCartPrize(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrize(200,300,400,500));
//function is using the rest parameter syntax (...num1), which collects all remaining arguments into an array.
//val1 = 200
//val2 = 300
//...num1 = [400, 500] (rest of the arguments go into an array)