const express = require('express');
const fs = require('fs').promises;
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
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.status(200).send({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
});

const getData = async () => {
  try {
    const data = await fs.readFile('simpsons.json');
    return JSON.parse(data);
  } catch {
    throw new Error('Erro');
  }  
}

app.post('/simpsons/regyster', async (req, res) => {
  const characters = await getData();
  const { id, name } = req.body;

  const containCharacter = characters.some((character) => character.id === id);
  if(containCharacter) return res.status(409).json({ "message": "id already exists" });

  characters.push({ id, name });
  fs.writeFile('simpsons.json', JSON.stringify(characters, null, 2));
  res.status(200).json({ "results": [...characters] });
});

app.get('/simpsons/:id', async (req, res) => {
  const characters = await getData();
  const { id } = req.params;
  const character = characters.find((element) => element.id === id);

  if(!character) return res.status(404).json({ "message": "simpson not found" });
  
  res.status(204).end();
});

app.get('/simpsons', async (_req, res) => {
  const characters = await getData();
  
  res.status(200).json({ "results": [...characters] });
});

app.listen(PORT);
