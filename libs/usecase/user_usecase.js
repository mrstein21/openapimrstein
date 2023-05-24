const UserRepository=require('../infrastructure/repository/user_repository');
const user_repositor=new UserRepository();
var bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');

module.exports=class{
    async login(request){
        var data=await user_repositor.getUserByEmail(request.email);
        if(data==null){
            return {
                "message":"User Not Found"
            }
        }
        data.password = data.password.replace('$2y$', '$2a$');
       
        if (await bcrypt.compareSync(request.password, data.password)) {
            var token= jwt.sign(data.toJSON(),'secretkey');
            data.token=token;
            var data_new={
                id : data.id,
                name:data.name,
                email:data.email,
                token:data.token
            }
            return data_new;
          } else {
            return {
                "message":"Password Incorrect"
            }
        }
    }

   async register(request){
      var data=await user_repositor.getUserByEmail(request.email);
      if(data!=null){
          return {
              message: "Email already exists"
          }
      } 
      request.password=bcrypt.hashSync(request.password,8);
      var data=await user_repositor.registerUser(request);
      var token= jwt.sign(data.toJSON(),'secretkey');
      data.token=token;
      var data_new={
        id : data.id,
        name:data.name,
        email:data.email,
        token:data.token
    }
      return data_new;
   }
}