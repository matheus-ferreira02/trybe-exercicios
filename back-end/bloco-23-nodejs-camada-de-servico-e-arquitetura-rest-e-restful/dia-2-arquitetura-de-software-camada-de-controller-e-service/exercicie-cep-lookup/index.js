const express = require('express');
const validatorCep = require('./middlewares/validatorCep');
const cepControllers = require('./controllers/cepControllers');
const rescue = require('express-rescue');

const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/ping', async (_req, res) => {
  return res.status(200).json({ message: 'Pong!' });
});

app.get('/ceps', cepControllers.getAll);

app.get('/cep/:id', validatorCep, rescue(cepControllers.getCepById));

app.use((err, _req, res, _next) => {
  if (err.code) return res.status(err.code).json({ message: err.message })
})

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
