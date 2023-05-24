const express = require('express');
var router = express.Router();
var user_controller=require('../controllers/user_controller');
/** 
 * @swagger
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 *  schemas:
 *   User:
 *    type: object
 *    properties:
 *     id:
 *      type: number
 *      description: auto generated id of User
 *     name:
 *      type: string
 *      description: Name of an User
 *     email:
 *      type: string
 *      description: Email of User
 *     token:
 *      type: string
 *      description: Token from Authorization process
 *    example:
 *     id: 1
 *     name: Mr.Stein
 *     email: stein@gmail.com 
 *     token: your_token_bearer  
 *      
*/

 /**
  * @swagger
  * tags:
  *   name: Auth
  *   description: API for Authentication
  */
 

  /**
  * @swagger
  * /auth/login:
  *  post:
  *   summary: User Login
  *   tags: [Auth]
  *   requestBody:
  *      required: true
  *      content:
  *       application/x-www-form-urlencoded:
  *         schema:
  *          type: object
  *          properties:
  *           email:
  *            type: string
  *            description: User's Email
  *            example: mrstein@gmail.com
  *            required: true
  *           password:
  *            type: string
  *            description: User's Password
  *            example: mypasswordsecret
  *            required: true
  *   produces:
  *    - application/json
  *   responses: 
  *    200:
  *     description: Login Success
  *     content:
  *      application/json:
  *       schema:
  *        type: object
  *        properties:
  *         success:
  *          type: boolean
  *          description: Status of API Response contain true or false
  *         data:
  *          type: object
  *          description: User Data
  *          $ref: '#/components/schemas/User'
  *    400: 
  *     description: There is an Empty Parameter
  *     content:
  *      application/json:
  *       schema:
  *         $ref: "#/components/schemas/Error"
  *       example:
  *         success: false
  *         message: Email is required 
  *         
  *    403:
  *     description: Wrong Password
  *     content:
  *      application/json:
  *       schema:
  *        $ref: '#components/schemas/Error'
  *       example:
  *        success: false
  *        errors: Forbidden Access
  *    500:
  *     description: Server Error
  *     content:
  *       application/json:
  *        schema:
  *          $ref: "#/components/schemas/Error"   
  *           
  *  
  *  
  */
router.post("/login", user_controller.login)

/**
  * @swagger
  * /auth/register:
  *  post:
  *   summary: User Register
  *   tags: [Auth]
  *   requestBody:
  *      required: true
  *      content:
  *       application/x-www-form-urlencoded:
  *         schema:
  *          type: object
  *          properties:
  *           email:
  *            type: string
  *            description: User's Email
  *            example: mrstein@gmail.com
  *            required: true
  *           name:
  *            type: string
  *            description: User's Name
  *            example: Mr.Professor Stein
  *            required: true
  *           password:
  *            type: string
  *            description: User's Password
  *            example: mypasswordsecret
  *            required: true
  *   produces:
  *    - application/json
  *   responses: 
  *    200:
  *     description: Login Success
  *     content:
  *      application/json:
  *       schema:
  *        type: object
  *        properties:
  *         success:
  *          type: boolean
  *          description: Status of API Response contain true or false
  *         data:
  *          type: object
  *          description: User Data
  *          $ref: '#/components/schemas/User'
  *    400: 
  *     description: There is an Empty Parameter
  *     content:
  *      application/json:
  *       schema:
  *         $ref: '#components/schemas/Error'
  *       example:
  *         success: false
  *         errors: Email is required
  *    403:
  *     description: Wrong Password
  *     content:
  *      application/json:
  *       schema:
  *        $ref: '#components/schemas/Error'
  *       example:
  *        success: false
  *        errors: Forbidden Access
  *    500:
  *     description: Server Error
  *     content:
  *       application/json:
  *        schema:
  *          $ref: "#/components/schemas/Error"   
  *           
  *  
  *  
  */

router.post("/register",user_controller.register);

module.exports=router;