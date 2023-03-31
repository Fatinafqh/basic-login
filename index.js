let dbUsers = [
    {
        username:"Fatin",
        password : "password",
        name : "Fatin Afiqah",
        email : "fatin@utem.edu.my"
    },
    {
        username:"ali",
        password:"123456",
        name:"Ali",
        email:"ali@utem.edu.my"
    },
    {
        usermane:"Ying",
        password:"321654",
        name:"Ruying",
        email:"ying@utem.edu.my"
    },
]

function login(username, password){
    console.log("someone try to login with", username, password)
    let matched = dbUsers.find(element =>
        element.username == username
    )
    if(matched){
        if(matched.password == password){
            return matched
        }
    else{
        return "Password not matched"

    }
}else{
        return "username not found"
    }
}

//try to login
//console.log(login ("ali", "password"))
//console.log(login("ali", "123456"))


 function register(newusername, newpassword, newname, newemail){
     //TO CHECK IF USERNAME EXIST
     let matched = dbUsers.find(element =>
        element.username == newusername
    )
    if(matched){
       return "username already exist"
}else{
    dbUsers.push({
        username: newusername,
        password: newpassword,
        name: newname,
        email: newemail
     })
    }
    //push new element to array
 }

//call function register
register("abu", "425", "abu", "abu@utem.edu.my")
console.log(dbUsers)
