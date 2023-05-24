const express = require('express')
const app = express()
global.__basedir = __dirname;
const path = require('path');
app.use(express.static(path.join(__dirname, 'public/')));
const UserRoute=require('./libs/interfaces/routes/user_routes');
const AirsoftRoute=require('./libs/interfaces/routes/airsoft_routes');
const TransactionRoute=require('./libs/interfaces/routes/transaction_routes');



var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Credentials',true);
  next();
});


const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const jwtMiddleware=require('./libs/infrastructure/middleware/jwt')

const options = {
	definition: {
		openapi: "3.0.3",
		info: {
			title: "Mr.Stein Airsoft API",
			version: "1.0.0",
			description: "A simple Airsoft API created by Mr.Stein using Express.js",
		},
		servers: [
			{
				url: "https://openapi.mrstein.web.id",
			},
			{
				url: "http://192.168.100.10:5000",
			},
			{
				url: "http://localhost:5000",
			},
			{
				url: "https://prod.mrstein.web.id",
			},
		],
	},
	apis: ["./libs/interfaces/routes/*.js"],
};

const specs = swaggerJsDoc(options);



app.post("/api/bidding/paket/detail",(request,response)=>{
	var json = {
		"success":true,
		"timestamp":"2022-04-26 00:13:44",
		"message":"Data retrieved successfully",
		"data":[
		   {
			  "packageNo":"000048.PKT.W003.08.2015",
			  "contractNo":"020110118550",
			  "incBasePrice":1051105,
			  "incValue":100000,
			  "highBid":5000000,
			  "whName":"BANDUNG",
			  "myBid":"1051105",
			  "myWishList":"0",
			  "objType":"SCOOTERMATIC",
			  "objDesc":"  HONDA PCX150",
			  "tahun":"2006",
			  "grade":"A -",
			  "stnkDate":"24-AUG-2015",
			  "packageDate":"2015-08-25",
			  "flagApps": 1,
			  "flagCancel": 0
		   },
		   {
			  "packageNo":"000048.PKT.W003.08.2015",
			  "contractNo":"020110118551",
			  "incBasePrice":1051105,
			  "incValue":100000,
			  "highBid":5000000,
			  "whName":"BANDUNG",
			  "myBid":"1051105",
			  "myWishList":"0",
			  "objType":"SCOOTERMATIC",
			  "objDesc":"  YAMAHA NMAX150",
			  "tahun":"2007",
			  "grade":"A -",
			  "stnkDate":"24-AUG-2015",
			  "packageDate":"2015-08-25",
			  "flagApps": 1,
			  "flagCancel": 0
		   }
		]
	 }
    return response.json(json);
});



app.post("/api/bidding/paket/list",(request,response)=>{
	var json = {
		"success": true,
		"timestamp": "2022-04-26 00:12:13",
		"message": "Data retrieved successfully",
		"data": [
		  {
			"packageNo": "000048.PKT.W003.08.2015",
			"contractNo": "020110118550",
			"brandDesc": null,
			"modelDesc": null,
			"objYear": "2006",
			"objGroup": "01",
			"incBasePrice": 1051105,
			"incValue": 100000,
			"highBid": 5000000,
			"myBid": 1051105,
			"myWishList": 0
		  },
		  {
			"packageNo": "000049.PKT.W003.08.2015",
			"contractNo": "020111105044",
			"brandDesc": null,
			"modelDesc": null,
			"objYear": "2011",
			"objGroup": "01",
			"incBasePrice": 3214079,
			"incValue": 100000,
			"highBid": 5214079,
			"myBid": 5214079,
			"myWishList": 0
		  }
		]
	  }
    return response.json(json);
});


app.post("/api/bidding/paket/detail/unit",(request,response)=>{
	var json = {
		"success": true,
		"timestamp": "2022-06-27 16:07:46",
		"message": "Data retrieved successfully",
		"data": {
		  "packageNo": "000001.PKT.W001.11.2021",
		  "contractNo": "020121101528",
		  "incBasePrice": 1162980,
		  "incValue": 100000,
		  "highBid": 0,
		  "whName": "SERPONG",
		  "myBid": "0",
		  "myWishList": "0",
		  "objType": "BEBEK MATIC",
		  "objDesc": "HONDA REVO TECHNO AT",
		  "objYear": "2020",
		  "grade": "A STD",
		  "stnkDate": "-",
		  "packageDate": "2021-11-03",
		  "productName": "HONDA REVO TECHNO AT",
		  "startPrice": 1162980,
		  "endPrice": 0,
		  "flagApps": 1,
		  "flagCancel": 0
		}
	  }
    return response.json(json);
});

app.post("/api/bidding/list/active-detail",(request,response)=>{
	var json = {
		"success": true,
		"timestamp": "2022-06-28 13:09:38",
		"message": "Data retrieved successfully",
		"data": [
		  {
			"invNo": "000006.INV.W027.06.2022",
			"coeNo": "000009.LOU.W027.06.2022",
			"contNo": "032107107279",
			"warehouse": "W027",
			"startTime": "2022-06-23 01:00:00",
			"endTime": "2023-03-21 09:38:00",
			"openhouseDate": "2022-06-23",
			"salesDate": "2022-06-30 23:00:00",
			"paketNo": "000014.PKT.W027.06.2022",
			"highPrice": 0,
			"startPrice": 441090,
			"methodBidding": "Closed",
			"typeBidding": "Public"
		  },
		    {
			"invNo": "000006.INV.W027.06.2022",
			"coeNo": "000009.LOU.W027.06.2022",
			"contNo": "032107107278",
			"warehouse": "W027",
			"startTime": "2022-06-23 01:00:00",
			"endTime": "2023-03-21 09:38:00",
			"openhouseDate": "2022-06-23",
			"salesDate": "2022-06-30 23:00:00",
			"paketNo": "000014.PKT.W025.06.2022",
			"highPrice": 0,
			"startPrice": 441090,
			"methodBidding": "Closed",
			"typeBidding": "Public"
		  },
		  {
			"invNo": "000008.INV.W027.04.2022",
			"coeNo": "000009.LOU.W027.04.2022",
			"contNo": "032108105751",
			"warehouse": "W027",
			"startTime": "2022-04-08 01:00:00",
			"endTime": "2022-04-08 23:00:00",
			"openhouseDate": "2022-04-08",
			"salesDate": "2022-04-08 23:00:00",
			"paketNo": "000007.PKT.W027.06.2022",
			"highPrice": 0,
			"startPrice": 80000,
			"methodBidding": "Closed",
			"typeBidding": "Private"
		  },
		   {
			"invNo": "000008.INV.W027.04.2022",
			"coeNo": "000009.LOU.W050.04.2022",
			"contNo": "032108105751",
			"warehouse": "W027",
			"startTime": "2022-04-08 01:00:00",
			"endTime": "2022-04-08 23:00:00",
			"openhouseDate": "2022-04-08",
			"salesDate": "2022-04-08 23:00:00",
			"paketNo": "000007.PKT.W030.06.2022",
			"highPrice": 0,
			"startPrice": 80000,
			"methodBidding": "Closed",
			"typeBidding": "Private"
		  },
		  {
			"invNo": "000008.INV.W027.04.2022",
			"coeNo": "000009.LOU.W027.04.2022",
			"contNo": "032108105751",
			"warehouse": "W027",
			"startTime": "2022-04-08 01:00:00",
			"endTime": "2022-04-08 23:00:00",
			"openhouseDate": "2022-04-08",
			"salesDate": "2022-04-08 23:00:00",
			"paketNo": "000007.PKT.W030.06.2022",
			"highPrice": 0,
			"startPrice": 80000,
			"methodBidding": "Closed",
			"typeBidding": "Private"
		  },
		]
	  }
    return response.json(json);
});



app.post("/api/bidding/rebidding/list/active",(request,response)=>{
	var json = {
		"success": true,
		"timestamp": "2022-05-13 18:56:54",
		"message": "Data retrieved successfully",
		"data": {
		  "count": 2,
		  "currPage": 1,
		  "totalItem": 3,
		  "totalPage": 2,
		  "list": [
			{
			  "coeNo": "000003.LOU.W042.05.2015",
			  "packagesNo": "000009.PKT.W042.05.2015",
			  "startDatetime": "2023-02-21 09:17:00",
			  "endDateTime": "2023-03-21 09:32:00",
			  "startDate": "2015-05-27",
			  "startTime": "11:00:00",
			  "endTime": "00:00:00",
			  "highPrice": 3700000,
			  "startPrice": null,
			  "methodBidding": "Open",
			  "typeBidding": "Public",
			  "currentlyRunning": true
			},
			{
			  "coeNo": "000003.LOU.W042.05.2015",
			  "packagesNo": "000010.PKT.W042.05.2015",
			  "startDatetime": "2015-05-27 11:00:00",
			  "endDateTime": "2022-12-12 00:00:00",
			  "startDate": "2015-05-27",
			  "startTime": "11:00:00",
			  "endTime": "00:00:00",
			  "highPrice": 3700000,
			  "startPrice": null,
			  "methodBidding": "Closed",
			  "typeBidding": "Public",
			  "currentlyRunning": true
			}
		  ]
		}
	  }
    return response.json(json);
});


app.post("/api/bidder/profile",(request,response)=>{
	
var json = {
	"data": [
	  {
		"bidder_CURR_BALANCE_PLAFOND": 0,
		"bidder_NAME_PIC_ALT": "NAME ERP_BP_ZPIC_VND2",
		"arec_BIDDER_EMAIL": "Bdc01@ERP.COM",
		"LAST_CHANGE_PASS_DATE": null,
		"bidder_PLAFOND": null,
		"nama_BIDDER": "ERP BIDDER NAME 2",
		"type_BIDDER": "REG",
		"alamat_OUTLET": "ERP STREET NAME",
		"warehouse": null,
		"owner_TELP": "081635330456",
		"reg_DATE": "2018-12-31T17:00:00.000+00:00",
		"logid": "[A500765D-0EE9-0CD7-E044-000B5DE07B1C]",
		"jenis_BIDDER": "PKS",
		"telp": "081635330456",
		"nama_OUTLET": "ERP BIDDER NAME 2",
		"kode_BIDDER": "BD1600A",
		"nama_OWNER": "NAME ERP_BP_ZPIC_VND2",
		"no_KTP": "065984653122",
		"bidder_PIC_HP": "081635330456",
		"kode_OUTLET": null,
		"fax": "1236",
		"fdelete": 0,
		"jenis_UKJ": "-",
		"status_BIDDER": "P",
		"bidder_OWN_HP1": "081635330456"
	  }
	],
	"message": "Success",
	"httpCode": 200,
	"status": "OK"
  }
    return response.json(json);
});


app.get("/api/bidding/get-config/3",(request,response)=>{
	var json = { 
  "success": true, 
  "timestamp": "2023-03-15 15:26:19", 
  "message": "Data retrieved successfully", 
  "data": { 
    "configId": 1, 
    "configName": "EXPIRED PASSWORD", 
    "configValue": "10", 
    "configStatus": 1 
  } 
}

    return response.json(json);
});

app.get("/api/bidding/get-config/1",(request,response)=>{
	var json = { 
  "success": true, 
  "timestamp": "2023-03-15 15:26:19", 
  "message": "Data retrieved successfully", 
  "data": { 
    "configId": 1, 
    "configName": "EXPIRED PASSWORD", 
    "configValue": "10", 
    "configStatus": 1 
  } 
}

    return response.json(json);
});

app.post("/api/bidding/get-list-object-group",(request,response)=>{
	var json=  {
		"httpCode": "200",
		"status": "Success",
		"message": "Success",
		"data": [
		  {
			"OBJT_CODE": "01",
			"OBJT_DESC": "MOTOR"
		  },
		  {
			"OBJT_CODE": "02",
			"OBJT_DESC": "MOBIL"
		  },
		  {
			"OBJT_CODE": "03",
			"OBJT_DESC": "DURABLE"
		  },
		  {
			"OBJT_CODE": "04",
			"OBJT_DESC": "PROPERTY"
		  },
		  {
			"OBJT_CODE": "08",
			"OBJT_DESC": "HEAVY EQUIPMENT"
		  },
		  {
			"OBJT_CODE": "9 ",
			"OBJT_DESC": "OTHER"
		  }
		]
	  }
	  

    return response.json(json);
});
		


app.post("/api/bidding/paket/detail",(request,response)=>{
	var json = {
		"success":true,
		"timestamp":"2022-04-26 00:13:44",
		"message":"Data retrieved successfully",
		"data":[
		   {
			  "packageNo":"000048.PKT.W003.08.2015",
			  "contractNo":"020110118550",
			  "incBasePrice":1051105,
			  "incValue":100000,
			  "highBid":5000000,
			  "whName":"BANDUNG",
			  "myBid":"1051105",
			  "myWishList":"0",
			  "objType":"SCOOTERMATIC",
			  "objDesc":"  HONDA PCX150",
			  "tahun":"2006",
			  "grade":"A -",
			  "stnkDate":"24-AUG-2015",
			  "packageDate":"2015-08-25",
			  "flagApps": 1,
			  "flagCancel": 0
		   },
		   {
			  "packageNo":"000048.PKT.W003.08.2015",
			  "contractNo":"020110118551",
			  "incBasePrice":1051105,
			  "incValue":100000,
			  "highBid":5000000,
			  "whName":"BANDUNG",
			  "myBid":"1051105",
			  "myWishList":"0",
			  "objType":"SCOOTERMATIC",
			  "objDesc":"  YAMAHA NMAX150",
			  "tahun":"2007",
			  "grade":"A -",
			  "stnkDate":"24-AUG-2015",
			  "packageDate":"2015-08-25",
			  "flagApps": 1,
			  "flagCancel": 0
		   }
		]
	 }
    return response.json(json);
});


app.post("/api/bidding/get-list-area",(request,response)=>{
	var json = {
   "httpCode":"200",
   "status":"Success",
   "message":"Success",
   "data":[
      {
         "BRAN_BR_NAME":"HEAD OFFICE",
         "BRAN_BR_ID":"0000"
      },
      {
         "BRAN_BR_NAME":"AREA JABOTABEK",
         "BRAN_BR_ID":"0001"
      },
      {
         "BRAN_BR_NAME":"AREA JABAR",
         "BRAN_BR_ID":"0002"
      },
      {
         "BRAN_BR_NAME":"AREA JATIM",
         "BRAN_BR_ID":"0003"
      },
      {
         "BRAN_BR_NAME":"AREA JATENG",
         "BRAN_BR_ID":"0004"
      },
      {
         "BRAN_BR_NAME":"AREA BALI-NUSRA",
         "BRAN_BR_ID":"0005"
      },
      {
         "BRAN_BR_NAME":"AREA SUMATERA 1",
         "BRAN_BR_ID":"0006"
      },
      {
         "BRAN_BR_NAME":"AREA SULAWESI",
         "BRAN_BR_ID":"0007"
      },
      {
         "BRAN_BR_NAME":"AREA KALIMANTAN",
         "BRAN_BR_ID":"0008"
      },
      {
         "BRAN_BR_NAME":"AREA SUMATERA 2",
         "BRAN_BR_ID":"0011"
      }
   ]
}


    return response.json(json);
});

app.post("/api/bidding/get-list-object",(request,response)=>{
	var json = {
   "httpCode":"200",
   "status":"Success",
   "message":"Success",
   "data":[
      {
         "OBJECT_CODE":"005",
         "GROUP_CODE":"003",
         "OBJECT_DESC":"DURABLE"
      },
      {
         "OBJECT_CODE":"0N5",
         "GROUP_CODE":"003",
         "OBJECT_DESC":"DURABLE FRANS"
      },
      {
         "OBJECT_CODE":"020",
         "GROUP_CODE":"008",
         "OBJECT_DESC":"HE BARU"
      }
   ]
}

    return response.json(json);
});


app.post("/api/bidding/get-list-brand",(request,response)=>{
	var json = {
   "httpCode":"200",
   "status":"Success",
   "message":"Success",
//    "data":null
   "data":[
      {
         "BRAND_CODE":"021",
         "BRAND_DESC":"HONDA"
      },
      {
         "BRAND_CODE":"022",
         "BRAND_DESC":"TOYOTA"
      }
   ]
}
    return response.json(json);
});

app.post("/api/bidding/get-list-model",(request,response)=>{
	var json = {
   "httpCode":"200",
   "status":"Success",
   "message":"Success",
   "data":[
      {
         "TYPE_CODE":"018",
         "TYPE_DESC":"BOX"
      },
      {
         "TYPE_CODE":"089",
         "TYPE_DESC":"BUS"
      }
   ]
}
    return response.json(json);
});


app.post("/api/bidding/get-list-type",(request,response)=>{
var json={
   "httpCode":"200",
   "status":"Success",
   "message":"Success",
   "data":[
      {
         "TYPE_CODE":"001",
         "TYPE_DESC":"BEBEK"
      },
      {
         "TYPE_CODE":"092",
         "TYPE_DESC":"BEBEK MATIC"
      },
      {
         "TYPE_CODE":"004",
         "TYPE_DESC":"JETMATIC"
      },
      {
         "TYPE_CODE":"SCP21",
         "TYPE_DESC":"MOTOR LISTRIK TEST DUMMY KELUARAN TERBARU 2021"
      }
   ]
}
    return response.json(json);
});


app.post("/api/bidding/list/active",(request,response)=>{
var json={
  "success": true,
  "timestamp": "2022-05-23 12:09:07",
  "message": "Data retrieved successfully",
  "data": {
    "count": 4,
    "currPage": 1,
    "totalItem": 4,
    "totalPage": 1,
    "list": [
		{
			"louNo": "000014.LOU.W027.04.2022",
			"contractNo": null,
			"whCode": "W027",
			"whName": "SURABAYA",
			"whOpenHouseDate": "2022-04-11",
			"bidType": "Private",
			"methodBidding" : "Open",
			"bidStatusDesc": "Open For Bidding",
			"bidStartDate": "2022-03-21 08:27:00",
			"bidEndDate": "2023-03-27 17:21:00",
			"objGroup": "01|Motorcycle"
		  },
		{
			"louNo": "000014.LOU.W028.04.2022",
			"contractNo": null,
			"whCode": "W028",
			"whName": "BANDUNG",
			"whOpenHouseDate": "2022-04-11",
			"bidType": "Private",
			"methodBidding" : "Closed",
			"bidStatusDesc": "Open For Bidding",
			"bidStartDate": "2022-04-11 01:00:00",
			"bidEndDate": "2023-03-25 23:50:00",
			"objGroup": "01|Motorcycle"
		  },
			{
			"louNo": "000014.LOU.W028.04.2022",
			"contractNo": null,
			"whCode": "W028",
			"whName": "BANDUNG",
			"whOpenHouseDate": "2022-04-11",
			"bidType": "Private",
			"methodBidding" : "Open",
			"bidStatusDesc": "Closed For Bidding",
			"bidStartDate": "2022-04-11 01:00:00",
			"bidEndDate": "2023-12-12 14:45:00",
			"objGroup": "01|Motorcycle"
		  },
			  {
			"louNo": "000014.LOU.W028.04.2022",
			"contractNo": null,
			"whCode": "W028",
			"whName": "BANDUNG",
			"whOpenHouseDate": "2022-04-11",
			"bidType": "Private",
			"methodBidding" : "Closed",
			"bidStatusDesc": "Not Started",
			"bidStartDate": "2022-04-11 01:00:00",
			"bidEndDate": "2023-12-12 14:45:00",
			"objGroup": "01|Motorcycle"
		  }
    ]
  }
}

    return response.json(json);
});



app.post("/api/bidding/won/list",(request,response)=>{
	var json={
	  "success": true,
	  "timestamp": "2022-05-23 12:09:07",
	  "message": "Data retrieved successfully",
	  "data": {
		"count": 0,
		"currPage": 1,
		"totalItem": 0,
		"totalPage": 1,
		"list": [
			
		]
	  }
	}
	
		return response.json(json);
	});










app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/airsoft",jwtMiddleware.verify_jwt(),AirsoftRoute);
app.use("/transaction",jwtMiddleware.verify_jwt(),TransactionRoute);
app.use("/auth",UserRoute);

app.listen(5000, "0.0.0.0", () =>
  console.log(`welcome your listening at port 5000`)
);

