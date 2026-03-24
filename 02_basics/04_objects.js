//const tinderUser = new Object() // singleton object

const tinderUser = {}//non-singleton object
tinderUser.id = "ABC123"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email:"sam@gmail.com",
    userInfo:{
        fullname:{
            firstname:"Mohd",
            lastname:"Shakeel"
        }
    }
}
console.log(regularUser);
