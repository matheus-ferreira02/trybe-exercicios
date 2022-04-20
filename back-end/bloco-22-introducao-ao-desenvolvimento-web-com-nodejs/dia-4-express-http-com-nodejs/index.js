const express = require('express');
const fs = require('fs').promises;
const PORT = 3005;
const app = express();
const crypto = require('crypto');

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

const getDataMiddleware = async (req, _res, next) => {
  try {
    const data = await fs.readFile('simpsons.json');
    req.characters = JSON.parse(data);
    next();
  } catch {
    return next({ status: 404, message: 'Arquivo não encontrado' });
  }
}

const authorizationMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if(authorization.length < 16) return res.status(401).json({ "message": "Token inválido!" });
  next();
}

app.get('/simpsons', authorizationMiddleware, getDataMiddleware, async (req, res) => {
  const { characters } = req;
  res.status(200).json({ "results": [...characters] });
});

app.post('/simpsons/regyster', authorizationMiddleware, getDataMiddleware, async (req, res) => {
  const { characters } = req;
  const { id, name } = req.body;

  const containCharacter = characters.some((character) => character.id === id);
  if(containCharacter) return res.status(409).json({ "message": "id already exists" });
  characters.push({ id, name });
  fs.writeFile('simpsons.json', JSON.stringify(characters, null, 2));
  res.status(200).json({ "results": [...characters] });
});

app.get('/simpsons/:id', authorizationMiddleware, getDataMiddleware, async (req, res) => {
  const { characters } = req;
  const { id } = req.params;
  const character = characters.find((element) => element.id === id);

  if(!character) return res.status(404).json({ "message": "simpson not found" });
  
  res.status(200).json({ "result": character });
});


const validationMiddleware = (req, res, next) => {
  const { email, password, firstName, phone } = req.body;
  if(!email || !password || !firstName || !phone) return res.status(401).json({ "message": "missing fields" });
  next();
}

app.post('/signup', validationMiddleware, (req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  res.status(200).json({ token });
});



const handleError = (err, _req, res, _next) => {
  const { status, message } = err;
  res.status(status).json({ message });
}

app.use(handleError);

app.listen(PORT);
