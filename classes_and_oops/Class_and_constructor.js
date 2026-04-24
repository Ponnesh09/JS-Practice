// Class constructor and static

//class constructor

class User {
    constructor(userName, email, passWord,) {
        this.userName = userName;
        this.email = email;
        this.passWord = passWord;
    }

    encryptPassword(){
      return `${this.passWord}ABC`
    }

    changeUserName(){
        return `${this.userName.toUpperCase()}`
    }
}

 const newUser = new User("petter", "petter@gmail.com", 12345)

//  console.log(newUser);
 
// console.log(newUser.encryptPassword());
// console.log(newUser.changeUserName());


// behind the scene

function UserOne(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

UserOne.prototype.encryptPassword = function(){
    return `${this.password}XYZ`
}

UserOne.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const userTwo = new UserOne("jon", "jon@gmail.com",12354)

// console.log(userTwo);
// console.log(userTwo.encryptPassword());
// console.log(userTwo.changeUserName());

