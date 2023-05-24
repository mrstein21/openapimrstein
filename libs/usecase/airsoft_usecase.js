const AirsoftRepository=require('../infrastructure/repository/airsoft_repository');
const airsoft_repository=new AirsoftRepository();
var fs = require('fs');
var dotenv=require("dotenv");
dotenv.config();


module.exports=class {
    async addAirsoft(request){
        var data=await airsoft_repository.addAirsoft(request);
        data.price=parseInt(data.price);
        return data;        
    }

    async editAirsoft(request){
        var exist=await airsoft_repository.getAirsoftById(request.id);
        if(exist==null){
          return null;
        }
        if(request.photo != null){
            var path=__basedir + "/public/uploads/"+exist.photo;
            if(fs.existsSync(path)){
                fs.unlinkSync(path);
            }
        }
        await airsoft_repository.editAirsoft(request);
        return  "Airsoft has been edited"
    }

    async deleteAirsoft(id){
        var exist=await airsoft_repository.getAirsoftById(id);
        if(exist==null){
          return null;
        }
        var path=__basedir + "/public/uploads/"+exist.photo;
        if(fs.existsSync(path)){
            fs.unlinkSync(path);
        }
        await airsoft_repository.deleteAirsoft(id);
        return "Airsoft has been deleted";
    }

    async getAirsoft(page,keyword){
        var image_path=process.env.IMAGE_PATH;
        var data=await airsoft_repository.getAirsoft(page,keyword);
        for(var i=0;i<data.results.length;i++){
           data.results[i].full_path=image_path+data.results[i].photo; 
        }
        return data;
    }

    async getAirsoftById(id){
        var image_path=process.env.IMAGE_PATH;
        var data=await airsoft_repository.getAirsoftById(id);
        data.full_path = image_path+data.photo;
        return data;
    }
}