const Joi = require('joi');

const schemaBody = Joi.object({
  cep: Joi.string().required(),
  logradouro: Joi.string().required(),
  bairro: Joi.string().required(),
  localidade: Joi.string().required(),
  uf: Joi.string().required(),
});

const validatorBody = (req, res, next) => {
  const { error } = schemaBody.validate(req.body);

  if(error) return res.status(400).json({ error: { code: "invalidData", message: error.message } })

  next();
}

module.exports = validatorBody;
