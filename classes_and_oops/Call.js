
const SetUser = function(userName){
    //complex DB calls
    this.userName = userName;
    console.log('called');
}


const createUser = function(userName, email , passWord){
    SetUser.call(this,userName)

    this.email = email;
    this.passWord = passWord;
}

const userOne = new createUser("petter","petter@gmail.com",1234)

console.log(userOne);
console.log(userOne.passWord);

