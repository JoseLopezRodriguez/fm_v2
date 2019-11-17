class User{
    new_user(username,mail,pass,realname){
        this.username= username;
        this.mail= mail;
        this.pass= pass;
        this.realname= realname;
    }
    get_user(user){
        this.username= user.username;
        this.realname= user.realname;
        this.token= user.token;
    }
    edit(mod){
        if(typeof this != 'undefined'){
            for(prop in this){
                if(prop===mod.prop)
                    this.prop=mod.value;
            }
        }else{
            return false;
        }
    }

}