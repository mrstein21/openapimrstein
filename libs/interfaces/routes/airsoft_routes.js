const express = require('express');
var router = express.Router();
var airsoft_controller=require('../controllers/airsoft_controller');
var multerUpload=require('../../infrastructure/multer/upload');

/** 
 * @swagger
 * components:
 *  schemas:
 *   Airsoft:
 *    type: object
 *    properties:
 *     id:
 *      type: number
 *      description: auto generated id of Airsoft
 *     name:
 *      type: string
 *      description: Name of an Airsoft's Model
 *     description:
 *      type: string
 *      description: Description of An Airsoft
 *     price:
 *      type: int
 *      description: Price of An Airsoft in dollar
 *     photo:
 *      type: string
 *      description: Image of An Airsoft
 *    example:
 *     id: 1
 *     name: M14
 *     description: M14 AEG Version
 *     price: 200
 *     image: M14.png
 *   Error:
 *    type: object
 *    properties:
 *     success: 
 *      type: boolean
 *      description: Status of API Response contains true or false
 *     message:
 *      type: string
 *      description: Error Message because API error
 *    example:
 *     success: false 
 *     message: Internal Server Error
 *      
*/


 /**
  * @swagger
  * tags:
  *   name: Airsoft
  *   description: API to manage CRUD Airsoft
  */

 /**
  * @swagger
  * /airsoft/add:
  *   post:
  *    security:
  *     - bearerAuth: []
  *    summary: Add New Airsoft to the Database
  *    tags: [Airsoft]
  *    requestBody:
  *     required: true
  *     content: 
  *      multipart/form-data:
  *       schema:
  *        type: object
  *        properties:
  *          name: 
  *            type: string
  *            description: Name of airsoft Model
  *            example: M14
  *            required: true
  *          description:
  *            type: string
  *            description: Description of Airsoft Model  
  *            example: M14 AEG Version Made By Tokyo Marui 
  *          price:
  *            type: int
  *            required: true
  *            description: Price of Airsoft in Rupiah
  *            example: 1000
  *          file:
  *            type: string
  *            format: binary
  *            description: File Image of Airsoft,Make sure 'file' params on the last position,otherwise the other params after params "file" will not be readed or return null by API
  *            required: true
  *    responses:
  *     200:
  *      description: Airsoft has been added to the Database
  *      content:
  *       application/json:
  *        schema:
  *         type: object
  *         properties:
  *          success:
  *           type: boolean
  *           description: Status of API Response contain true or false
  *          message:
  *           type: string
  *           description: Message from API Server
  *          data:
  *           type: object
  *           description: The Airsoft that has been Added
  *           $ref: '#/components/schemas/Airsoft'
  *     400: 
  *      description: There is an Empty Parameter
  *      content:
  *       application/json:
  *        schema:
  *         $ref: "#/components/schemas/Error"
  *        example:
  *         success: false
  *         message: You must upload image file only
  *     401:
  *      description: Unauthorized 
  *      content:
  *       application/json:
  *        schema:
  *         $ref: '#components/schemas/Error'
  *        example:
  *         success: false
  *         message: Unauthorized Access
  *     500:
  *      description: Server Error
  *      content:
  *       application/json:
  *        schema:
  *          $ref: "#/components/schemas/Error"   
  *           
  *  
  *  
  */
router.post("/add",airsoft_controller.AddAirsoftRequest);
/**
 * @swagger
 * /airsoft:
 *   get:
 *    security:
 *     - bearerAuth: []
 *    summary: Get Airsoft from Database
 *    tags: [Airsoft]
 *    produces:
 *     - application/json
 *    parameters:
 *     - in: query
 *       name: page
 *       description: Page to access another List Airsoft,Default value is 1
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
 *              description: List of Airsoft
 *              items:
 *               $ref: "#components/schemas/Airsoft"
 *     401:
 *      description: Unauthorized 
 *      content:
 *       application/json:
 *        schema: 
 *         $refs: "#components/schemas/Error"
 *        example:
 *         success: false
 *         message: Unauthorized Access
 *     500:
 *      description: Server Error
 *      content:
 *       application/json:
 *        schema:
 *          $ref: "#/components/schemas/Error" 
 *    
 */
router.get("/",airsoft_controller.GetAirsoftRequest);
/**
 * @swagger
 * /airsoft/delete/{id}:
 *   delete:
 *    security:
 *      - bearerAuth: []
 *    summary: Delete Airsoft from Database
 *    tags: [Airsoft]
 *    produces:
 *     - application/json
 *    parameters:
 *     - in: path
 *       required: true
 *       name: id
 *       type: int
 *       example: true
 *       description: ID of Airsoft  
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
 *           message: Message From API Server
 *          data:
 *           type: string
 *           description: Contains List of Airsoft and All Result Count from Database
 *           example: Airsoft has been Deleted
 *          
 *     401:
 *      description: Unauthorized Access 
 *      content:
 *       application/json:
 *        schema: 
 *         $refs: "#components/schemas/Error"
 *        example:
 *         success: false
 *         message: Unauthorized Access
 *     500:
 *      description: Server Error
 *      content:
 *       application/json:
 *        schema:
 *          $ref: "#/components/schemas/Error" 
 *    
 */

router.delete("/delete/:id",airsoft_controller.DeleteAirsoftRequest);
/**
  * @swagger
  * /airsoft/update:
  *  post:
  *   security:
  *    - bearerAuth: []
  *   summary: Update Airsoft to the Database
  *   tags: [Airsoft]
  *   requestBody:
  *     required: true
  *     content: 
  *      multipart/form-data:
  *       schema:
  *        type: object
  *        properties:
  *          id:
  *            type: int
  *            required: true
  *            example: 1
  *            description: ID of Airsoft
  *          name: 
  *            type: string
  *            description: Name of airsoft Model
  *            example: M14
  *            required: true
  *          description:
  *            type: string
  *            description: Description of Airsoft Model  
  *            example: M14 AEG Version Made By Tokyo Marui 
  *          price:
  *            type: int
  *            required: true
  *            description: Price of Airsoft in Rupiah
  *            example: 1000
  *          file:
  *            type: string
  *            format: binary
  *            description: File Image of Airsoft,Make sure 'file' params on the last position,otherwise the other params after params "file" will not be readed or return null by API 
  *            required: true
  *   produces:
  *    - application/json
  *   
  *   responses:
  *    200:
  *     description: Airsoft has been edited to the Database
  *     content:
  *      application/json:
  *       schema:
  *        type: object
  *        properties:
  *         success:
  *          type: boolean
  *          description: Status of API Response contain true or false
  *         message:
  *           type: string
  *           description: Message from API
  *    400: 
  *     description: There is an Empty Parameter
  *     content:
  *      application/json:
  *       schema:
  *         $ref: "#/components/schemas/Error"
  *       example:
  *        success: false
  *        message: You must upload image file only
  *    401:
  *      description: Unauthorized Access 
  *      content: 
  *       application/json:
  *        schema: 
  *         $refs: "#components/schemas/Error"
  *        example:
  *         success: false
  *         errors: Unauthorized Access 
  *    404:
  *      description: Airsoft Not Found 
  *      content:
  *       application/json:
  *        schema: 
  *         $refs: "#components/schemas/Error"
  *        example:
  *         success: false
  *         message: Airsoft not found 
  *    500:
  *     description: Server Error
  *     content:
  *       application/json:
  *        schema:
  *          $ref: "#/components/schemas/Error"   
  *           
  *  
  */
router.post("/update",airsoft_controller.EditAirsoftRequest);
/**
 * @swagger
 * /airsoft/{id}:
 *   get:
 *    security: 
 *      - bearerAuth: []
 *    summary: Get Single Airsoft
 *    tags: [Airsoft]
 *    produces:
 *     - application/json
 *    parameters:
 *     - in: path
 *       required: true
 *       name: id
 *       type: int
 *       example: 2
 *       description: ID of Airsoft
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
 *           description: Message From API Server
 *          data:
 *           type: object
 *           description: Item Airsoft
 *           $ref: "#/components/schemas/Airsoft"
 *          
 *     401:
 *      description: Unauthorized Access
 *      content:
 *       application/json:
 *        schema: 
 *         $refs: "#components/schemas/Error"
 *        example:
 *         success: false
 *         message: Unauthorized Access
 *     500:
 *      description: Server Error
 *      content:
 *       application/json:
 *        schema:
 *          $ref: "#/components/schemas/Error" 
 *    
 */
router.get("/:id",airsoft_controller.GetAirsoftByIdRequest);

/**
 * @swagger
 * /uploads/{filename}:
 *   get:
 *    summary: Get Photo of Airsoft
 *    tags: [Airsoft]
 *    produces:
 *     - application/json
 *    parameters:
 *     - in: path
 *       required: true
 *       name: filename
 *       type: string
 *       example: m14.png
 *       description: File image's name of Airsoft from API response
 *    responses: 
 *     200:
 *      content:
 *       image/png: 
 *    
 */
 router.post("/test_upload",airsoft_controller.UploadTestFile);
 /**
  * @swagger
  * /airsoft/test_upload:
  *  post:
  *   summary: Test Upload Photos for Airsoft
  *   tags: [Airsoft]
  *   requestBody:
  *     required: true
  *     content: 
  *      multipart/form-data:
  *       schema:
  *        type: object
  *        properties:
  *          caption: 
  *            type: string
  *            description: Caption of Photo
  *            example: M14
  *            required: true
  *          file:
  *            type: string
  *            format: binary
  *            description: File Image of Airsoft,Make sure 'image' params on the last position,otherwise the other params after params "file" will not be readed or return null by API 
  *            required: true
  *   produces:
  *    - application/json
  *   
  *   responses:
  *    200:
  *     description: Test Uploaded Photo Success
  *     content:
  *      application/json:
  *       schema:
  *        type: object
  *        properties:
  *         success:
  *          type: boolean
  *          description: Status of API Response contain true or false
  *         message:
  *           type: string
  *           description: Message from API
  *         data:
  *           type: object
  *           properties:
  *             file:
  *               type: string
  *               description: Image Name that you upload
  *             caption:
  *               type: string
  *               description: Caption Image 
  *    400: 
  *     description: There is an Empty Parameter
  *     content:
  *      application/json:
  *       schema:
  *         $ref: "#/components/schemas/Error"
  *       example:
  *        success: false
  *        message: You must upload image file only
  *    500:
  *     description: Server Error
  *     content:
  *       application/json:
  *        schema:
  *          $ref: "#/components/schemas/Error"   
  *           
  *  
  */

  router.post("/test_post_json",airsoft_controller.PostTestJSON);
  /**
 * @swagger
 * /airsoft/test_post_json:
 *   post:
 *    summary: Testing Post JSON
 *    tags: [Airsoft]
 *    requestBody:
 *     content:
 *      application/json:
 *         schema:
 *           type: object
 *           properties: 
 *             ids:
 *               type: array
 *               description: ids of Airsoft
 *               items:
 *                 type: int
 *                 description: id of Airsoft
 *                 example: 1
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
 *           description: Message From API
 *          data:
 *           type: array
 *           description: List Item Airsoft
 *           items:
 *             type: object
 *             properties: 
 *               id:
 *                 type: int
 *                 description: id Of Airsoft
 *                 example: 1
 *               name:
 *                 type: string
 *                 description: Name of Airsoft
 *                 example: M14
 *               price:
 *                 type: int
 *                 description: Price of Airsoft
 *                 example: 1000000
 *               qty:
 *                 type: int
 *                 description: Quantities of Airsoft
 *                 example: 1
 *               image:
 *                 type: string
 *                 description: Image of Airsoft
 *                 example: M14.png
 * 
 *     400:
 *      description: Forbidden Access 
 *      content:
 *       application/json:
 *        schema: 
 *         $refs: "#components/schemas/Error"
 *        example:
 *         success: false
 *         message: Ids is Required
 *     500:
 *      description: Server Error
 *      content:
 *       application/json:
 *        schema:
 *          $ref: "#/components/schemas/Error" 
 *    
 */

module.exports=router;



