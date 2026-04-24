class User {
    constructor(userName) {
        this.userName = userName;
    }

    logMe(){
        console.log(`User Name is ${this.userName} `);
        
    }
}


class Teach extends User {
    constructor(userName,email,passWord){
            super(userName)
            this.email = email;
            this.passWord = passWord
    }

    addLecture(){
        console.log(`a new course added by ${this.userName}`);
    }
}


const newUser = new Teach("jon" ,"email.com",9870)
// console.log(newUser);
newUser.addLecture()



const newUserMore = new User("new joint")
newUserMore.logMe()



// User === newUserMore
// instanceof



  
