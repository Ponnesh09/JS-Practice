 class User {
    constructor(email, password) {
        this.email =email;
        this.password = password;
    }

    get email(){
        // return this.email.toUpperCase()      //error RangeError: Maximum call stack size exceeded
        return this._email.toUpperCase()  
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password.toUpperCase()}`
        // return `${this._password.toUpperCase()}azxcbfg`
    }

    set password(value){
    //    this.password = value   ❌❌
       this._password = value
    }

 }
 const petter = new User("petter@gmail.com", "goodBye")

 console.log(petter.password);
 console.log(petter.email);
 
 