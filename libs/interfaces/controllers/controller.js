

function responseOK(res,data){
    return res.status(200).json({
       "success":true,
       "data":data,
       "message":"Response Success !"
    });
}

function responseOKWithoutData(res,message){
    return res.status(200).json({
       "success":true,
        "message":message
    });
}

function responseProcessFailed(statusCode,res,error){
    return res.status(statusCode).json({
       "success":false,
       "message":error
    });
}

function responseFailure(res,err){
    console.log(err);
    return res.status(500).json({
        "success":false,
        "message":"Internal Server Error"
    })
}

module.exports={
    responseOK,
    responseOKWithoutData,
    responseFailure,
    responseProcessFailed
}