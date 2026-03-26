const user={
    username: "hitesh",
    prize: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
        
    }
}

user.welcomeMessage()
user.username="Shakeel"
user.welcomeMessage()
console.log(this);


//this refers to the current object (user)
//So this.username always picks the latest value inside the object

const chai1 = function(){
    let username = "shakeel"
    console.log(this.username);
    
}


const chai2 = () =>{
    let username = "Sahil"
    console.log(this);
    
}
chai2()



// ++++++++++Arrow functions++++++++++++//


//method first
const addTwo = (num1,num2) =>{
    return num1+num2
}

//method second
const addTwo = (num1,num2) => num1+num2


//method third
const addTwo = (num1,num2) => (num1+num2)
console.log(addTwo(2,3))