const express = require('express');
var router = express.Router();
const transaction_controller=require('../controllers/transaction_controller');
 /**
  * @swagger
  * tags:
  *   name: Transaction
  *   description: API to manage Transaction Airsoft
  */

  /**
 * @swagger
 * /transaction:
 *   post:
 *    security:
 *     - bearerAuth: []
 *    summary: do Transaction For Airsoft
 *    tags: [Transaction]
 *    requestBody:
 *     content:
 *      application/json:
 *         schema:
 *           type: object
 *           properties: 
 *             items: 
 *               type: array
 *               description: List Of Airsoft 
 *               items:
 *                 type: object
 *                 properties:
 *                     id:
 *                      type: int
 *                      description: ID of Airsoft
 *                      example: 1
 *                     name:
 *                      type: string
 *                      description: Name of Airsoft
 *                      example: AK47
 *                     price:
 *                      type: int
 *                      description: Price of Airsoft
 *                      example: 1000000
 *                     qty: 
 *                      type: int
 *                      description: Quantities of Airsoft
 *                      example: 12
 *                     image:
 *                      type: string
 *                      description: Image of Airsoft
 *                      example: assets/M14.png
 *                 
 *                 
 *    responses: 
 *     200:
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          success:
 *           type: boolean
 *           example: true
 *           description: Status API Response contains true or false
 *          message:
 *           type: string
 *           example: Response OK from Server API !
 *           description: Message From API
 *          data:
 *           type: object
 *           description: Transaction Information after Transaction Success
 *           properties:
 *             id:
 *              type: int
 *              description: Auto Generate ID after transaction Success
 *              example: 1
 *             trans_code:
 *              type: string
 *              description: Transaction unique code after transaction Success
 *              example: TR-1238456
 *             date: 
 *              type: string
 *              description: Date of Transaction (format YYYY-MM-DD)
 *              example: 2022-01-22
 *             detail:
 *              type: array 
 *              description: List Of Airsoft in Transaction
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: int
 *                    description: Id of Airsoft
 *                    example: 1
 *                  name:
 *                    type: string
 *                    description: Name of Airsoft
 *                    example: Mosin Nagant
 *                  photo:
 *                    type: string
 *                    description: Photo Name of Airsoft
 *                    example: Mosin.PNG
 *                  description:
 *                    type: string
 *                    description: Description of Airsoft
 *                    example: This Airsoft is AEG type
 *                  price:
 *                    type: int
 *                    description: Price of Airsoft in Rupiah
 *                    example: 2000000
 *                  qty:
 *                    type: int
 *                    description: Quantity of Airsoft
 *                    example: 1
 *     400:               
 *      description: Bad Request 
 *      content:
 *       application/json:
 *        schema: 
 *         $refs: "#components/schemas/Error"
 *        example:
 *         success: false
 *         message: items is Required
 *     401:               
 *      description: Unauthorized 
 *      content:
 *       application/json:
 *        schema: 
 *         $refs: "#components/schemas/Error"
 *        example:
 *         success: false
 *         message: Authorization is Required to access this data
 *     500:
 *      description: Server Error
 *      content:
 *       application/json:
 *        schema:
 *          $ref: "#/components/schemas/Error" 
 *    
 */

router.post("/",transaction_controller.doTransaction);

router.get("/",transaction_controller.GetTransactionRequest);
/**
 * @swagger
 * /transaction/{id}:
 *   get:
 *    security:
 *     - bearerAuth: []
 *    summary: Get Detail Transaction
 *    tags: [Transaction]
 *    parameters:
 *     - in: path
 *       required: true
 *       name: id
 *       type: int
 *       example: 1
 *       description: ID of Transaction (Auto Increment ID) like 1,2,5
 *    responses: 
 *     200:
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          success:
 *           type: boolean
 *           example: true
 *           description: Status API Response contains true or false
 *          message:
 *           type: string
 *           description: Message From API
 *          data:
 *           type: object
 *           description: Transaction Information after Transaction Success
 *           properties:
 *             id:
 *              type: int
 *              description: Auto Generate ID after transaction Success
 *              example: 1
 *             trans_code:
 *              type: string
 *              description: Transaction unique code after transaction Success
 *              example: TR-1238456
 *             date: 
 *              type: string
 *              description: Date of Transaction (format YYYY-MM-DD)
 *              example: 2022-01-22
 *             detail:
 *              type: array 
 *              description: List Of Airsoft in Transaction
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: int
 *                    description: Id of Airsoft
 *                    example: 1
 *                  name:
 *                    type: string
 *                    description: Name of Airsoft
 *                    example: Mosin Nagant
 *                  description:
 *                    type: string
 *                    description: Description of Airsoft
 *                    example: This Airsoft is AEG type
 *                  price:
 *                    type: int
 *                    description: Price of Airsoft in Rupiah
 *                    example: 2000000
 *                  qty:
 *                    type: int
 *                    description: Quantity of Airsoft
 *                    example: 1
 *     400:               
 *      description: Bad Request 
 *      content:
 *       application/json:
 *        schema: 
 *         $refs: "#components/schemas/Error"
 *        example:
 *         success: false
 *         message: items is Required
 *     401:               
 *      description: Unauthorized 
 *      content:
 *       application/json:
 *        schema: 
 *         $refs: "#components/schemas/Error"
 *        example:
 *         success: false
 *         message: Authorization is Required to access this data
 *     404:               
 *      description: Not Found
 *      content:
 *       application/json:
 *        schema: 
 *         $refs: "#components/schemas/Error"
 *        example:
 *         success: false
 *         message: Transaction ID Not Found
 *     500:
 *      description: Server Error
 *      content:
 *       application/json:
 *        schema:
 *          $ref: "#/components/schemas/Error" 
 *    
 */

router.get("/:id",transaction_controller.GetDetailTransaction);
/**
 * @swagger
 * /transaction:
 *   get:
 *    security:
 *     - bearerAuth: []
 *    summary: Get List Transaction from Database
 *    tags: [Transaction]
 *    produces:
 *     - application/json
 *    parameters:
 *     - in: query
 *       name: page
 *       description: Page to access another List Transaction,Default value is 1
 *       type: int
 *       example: 2
 *       required: false
 *    responses: 
 *     200:
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          success:
 *           type: boolean
 *           example: true
 *           description: Status API Response contains true or false
 *          message:
 *           type: string
 *           description: Message from API Server
 *          data:
 *           type: object
 *           description: Contains List of Airsoft and All Result Count from Database
 *           properties:
 *             total:
 *              type: int
 *              description: All Result Count from Database
 *              example: 35
 *             results:
 *              type: array
 *              description: List of Transaction
 *              items:
 *               type: object
 *               properties:
 *                 id:
 *                   type: int
 *                   description: ID of Transaction
 *                   example: 1
 *                 trans_code:
 *                   type: string
 *                   description: Unique Code Number of Transaction
 *                   example: TR=13234849
 *                 date:
 *                   type: string
 *                   description: Date of Transaction Format(YYYY-MM-DD)
 *                   example: 2022-01-28 
 *     401:
 *      description: Unauthorized 
 *      content:
 *       application/json:
 *        schema: 
 *         $refs: "#components/schemas/Error"
 *        example:
 *         success: false
 *         message: Authorizartion is required to access this data 
 *     500:
 *      description: Server Error
 *      content:
 *       application/json:
 *        schema:
 *          $ref: "#/components/schemas/Error" 
 *    
 */
module.exports=router;

