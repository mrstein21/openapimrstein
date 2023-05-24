const Joi = require('joi');
///schema add airsofy
const schemaAddAirsoft=Joi.object({
    name:Joi.string().required(),
    description:Joi.string().required(),
    price:Joi.number().required(),
})

const schemaTestUpload=Joi.object({
    caption:Joi.string().required(),
})

//schema edit airsoft
const schemaEditAirsoft=Joi.object({
    id:Joi.number().required(),
    name:Joi.string().required(),
    description:Joi.string().required(),
    price:Joi.number().required(),
})

  const airsoft = Joi.object({
     id: Joi.number().required(),
     name: Joi.string().required(),
     image: Joi.string().required(),
     price:Joi.number().min(1).required(),
     qty:Joi.number().min(1).required()
  })
 
  const schemaPostJSON= Joi.object({
    items:Joi.array().items(airsoft),
    ids:Joi.array().items(Joi.number()).required()
  });

module.exports={
    schemaAddAirsoft,
    schemaEditAirsoft,
    schemaTestUpload,
    schemaPostJSON
}