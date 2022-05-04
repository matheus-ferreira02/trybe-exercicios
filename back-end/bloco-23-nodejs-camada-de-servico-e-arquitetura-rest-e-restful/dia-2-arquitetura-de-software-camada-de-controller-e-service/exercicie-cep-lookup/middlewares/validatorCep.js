const validatorCep = (req, res, next) => {
  const { id } = req.params;

  if (id.length !== 8) {
    return res.status(400).json({ "error": { "code": "invalidData", "message": "CEP inválido" }});
  }

  next();
}

module.exports = validatorCep;
