const express = require('express');
const cepsModels = require('./models/cepsModels');

const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/ping', async (_req, res) => {
  return res.status(200).json({ message: 'Pong!' });
});

app.get('/ceps', async (_req, res) => {
  const ceps = await cepsModels.getAllCeps();

  return res.status(200).json(ceps);
});

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
