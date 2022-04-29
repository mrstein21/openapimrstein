const AirsoftRepository=require('../infrastructure/repository/airsoft_repository');
const airsoft_repository=new AirsoftRepository();
var fs = require('fs');


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
        
        var path=__basedir + "/public/uploads/"+exist.photo;
        if(fs.existsSync(path)){
            fs.unlinkSync(path);
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

    async getAirsoft(page){
        var data=await airsoft_repository.getAirsoft(page);
        return data;
    }

    async getAirsoftById(id){
        var data=await airsoft_repository.getAirsoftById(id);
        return data;
    }
}