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
