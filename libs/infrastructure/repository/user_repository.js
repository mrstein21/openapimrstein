const User=require('../orm/user');

module.exports=class{
    async getUserByEmail(email){
          var data=await User.query().where("email",email).first();
          return data;
    }

    async registerUser(data){
        var data =await User.query().insert(data);
        return data;
    }
}