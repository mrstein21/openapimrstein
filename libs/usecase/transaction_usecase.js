const AirsoftRepository=require('../infrastructure/repository/airsoft_repository');
const airsoft_repository=new AirsoftRepository();
const TransactionRepository=require('../infrastructure/repository/transaction_repository');
const transaction_repository=new TransactionRepository();
const MOMENT= require( 'moment' );

module.exports=class{
    async getTransaction(page){
        var data=await transaction_repository.getTransaction(page);
        for(var i=0;i<data.results.length;i++){
            data.results[i].date=MOMENT(data.results[i].date).format('YYYY-MM-DD');

        }
        return data;
    }

    async getDetailTransaction(id){
        var data=await transaction_repository.detailTransaction(id);
        if(data==null){
            return {
                "message":"Transaction ID Not Found"
            }
        }
        for(var i=0;i<data.detail.length;i++){
            var detail_airsoft=data.detail[i].airsoft;
            detail_airsoft.qty=data.detail[i].qty;
            data.detail[i]=detail_airsoft;
        }
        data.date=MOMENT(data.date).format('YYYY-MM-DD');
        return data;
    }

    async doTransaction(items){
        let datetime = MOMENT().format( 'YYYY-MM-DD' )
        var ids=[];
        var detail=[];
        for(var i=0;i<items.length;i++){
            ids.push(items[i].id);
            detail.push({
                airsoft_id:items[i].id,
                qty:items[i].qty
            })
        }
        var check=await airsoft_repository.checkAirsoft(ids);
        for(var i=0;i<ids.length;i++){
          var check_items=check.find(airsoft => airsoft.id===ids[i]);
          if(check_items==null){
              return {
                  "message": "There is no Airsoft with id "+ids[i]
              }
          }
        }

        var uniqueNumber="TR-"+Math.random().toString().slice(2,11);
        var request={
            "date":datetime,
            "trans_code":uniqueNumber,
            "detail":detail
        }
        var data=await transaction_repository.doTransaction(request);

        for(var i=0;i<check.length;i++){
            var detail_t=data.detail.find(airsoft => airsoft.airsoft_id===check[i].id);
            check[i].qty=detail_t.qty;
        }
        data.date=MOMENT(data.date).format('YYYY-MM-DD');
        data.detail=check;
        return data;
    }
}
