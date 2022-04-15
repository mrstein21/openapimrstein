const Joi = require('joi');

const airsoft = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    image: Joi.string().required(),
    price:Joi.number().min(1).required(),
    qty:Joi.number().min(1).required()
 })

 const schemaTransaction= Joi.object({
   items:Joi.array().items(airsoft),
 });

 module.exports={
     schemaTransaction
 }