const Airsoft=require('../orm/airsoft')

module.exports=class{
    async getAirsoft(page,keyword){
        if(keyword == ""){
         var data=await Airsoft.query().page(page-1,10);
         return data;
        }else{
          var data=await Airsoft.query().where("name","LIKE","%"+keyword+"%").page(page-1,10);
          return data 
        }
    }

    async checkAirsoft(ids){
        var data=await Airsoft.query().whereIn("id",ids);
        return data;
    }

    async addAirsoft(data){
        var data=await Airsoft.query().insert(data);
        return data;
    }

    async deleteAirsoft(id){
        await Airsoft.query().findById(id).delete();
    }

    async editAirsoft(data){
      var data=await Airsoft.query().findById(data.id).update(data);
      return data;
    }
    async getAirsoftById(id){
        var data=await Airsoft.query().findById(id);
        return data;
    }
}