function User(email, password){
    this._email = email,
    this._password = password,

    Object.defineProperty(this, "email",{
       
        get : function(){
            return this._email.toUpperCase()
        },

        set : function(value){
            this._email = value
        }
    })
}

const newUser = new User("petter@gmail.com","poo")
console.log(newUser);                     //User { _email: 'petter@gmail.com', _password: 'poo' }
console.log(newUser.email);                 //PETTER@GMAIL.COM
console.log(newUser._email);                //petter@gmail.com

