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
// newUser.addLecture()



const newUserMore = new User("new joint")
// newUserMore.logMe()



// User === newUserMore
// instanceof



// Statics and prop >>> properties 


class UserOne {
    constructor(userName){
            this.userName = userName;
    }

    logMe(){
        console.log(`User Name ${this.userName}`);
        
    }

    // createId(){
    //     return `231`
    // }
    
     static createId(){
        return `231`
    }
}

const petter = new UserOne("petter")
// console.log(petter);

// console.log(petter.createId());


class Teacher extends UserOne {
    constructor(userName , email) {
        super(userName);
        this.email =email
    }
}

const sam = new Teacher("petter","petter@gmail.com")
console.log(sam);

// console.log(sam.createId());  error
