const express = require('express');
const PORT = 3005;
const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}` }).end();
});

const validationAge = (req, res, next) => {
  const { age } = req.body;
  if(age <= 17) return res.status(401).json({ "message": "Unauthorized" });

  next();
}

app.post('/greetings', validationAge, (req, res) => {
  const { name } = req.body;

  res.status(200).json({ "message": `Hello, ${name}!` })
})

app.listen(PORT);
