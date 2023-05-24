const Joi = require('joi');
///schema register
const schemaRegister=Joi.object({
    name:Joi.string().min(4).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(4).required(),
})

//schema login
const schemaLogin=Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(4).required(),
})

module.exports={
    schemaRegister,
    schemaLogin
}