const express = require('express')
const app = express()
global.__basedir = __dirname;
const path = require('path');
app.use(express.static(path.join(__dirname, 'public/')));
const UserRoute=require('./libs/interfaces/routes/user_routes');
const AirsoftRoute=require('./libs/interfaces/routes/airsoft_routes');


var bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token,Authorization');
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
			description: "A simple Airsoft API created by Mr.Stein",
		},
		servers: [
			{
				url: "https://openapi.mrstein.web.id",
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

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/airsoft",jwtMiddleware.verify_jwt(),AirsoftRoute);
app.use("/auth",UserRoute);

app.listen(5000, "0.0.0.0", () =>
  console.log(`welcome your listening at port 5000`)
);

