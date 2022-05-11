const express = require('express');
const Joi = require('joi');
const { BAD_REQUEST } = require('./statusCode');

const app = express();

app.use(express.json());

const errorConstructor = (status, message) => {
  return {
    status,
    message
  }
}

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const validationEmail = regexEmail.test(email);

  if (!validationEmail) next(errorConstructor(BAD_REQUEST, 'Invalid email'));

  next();
}

const PASSWORDSCHEMA = Joi.object({
  password: Joi.string().required().min(3).max(8),
})

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  const { error } = PASSWORDSCHEMA.validate({ password });

  if (error) next({ status: 400, message: error.message })

  // const validatePassword = password.length > 4 && password.length < 8;

  // if (!validatePassword) next();

  next();
}

const validateName = (req, res, next) => {
  const { username } = req.body;

  const validationUsername = username.length > 3;

  if (!validationUsername) next(errorConstructor(BAD_REQUEST, 'invalid username'));

  next();
}

const errorMiddleware = (err, req, res, next) => {

  console.log(err.message);
  if (err.status) return res.status(err.status).json({ message: err.message })

  if (err) return res.status(500).json({ message: "Internal Server Error" });
}

app.post('/user/register', validateEmail, validateName, validatePassword, (req, res) => {
  return res.status(201).json({ "message": "user created" });
});


app.use(errorMiddleware);

const generateToken = () => {
  const tokenArray = [];
  const alpha = ['a', 'e', 'i', 'o', 'u', 'y'];
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  for (let i = 1; i <= 6; i += 1) {
    const random = Math.round(Math.random() * 5);
    tokenArray.push(alpha[random]);
    tokenArray.push(numbers[random]);
  }
  return tokenArray.join('');
};

const validateBodyLogin = (req, res, next) => {
  const { email, password } = req.body;
  const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const validationEmail = regexEmail.test(email);
  const validatePassword = password.length > 4 && password.length < 8;
  if (!(validationEmail && validatePassword)) return res.status(400).json({ "message": "email or password is incorrect" });
  next();
}
app.post('/user/login', validateBodyLogin, (req, res) => {
  const token = generateToken();
  // token: string com 12 caracteres;
  res.status(200).json({ token });
})

const PORT = 3200;

app.listen(PORT);

// Atividade 3
/* const express = require('express');
const app = express();
app.use(express.json());
const postReturn = [{id: 1, message: 'deu certo'}, {id: 2, message: 'deu certo tbm'}]

app.get('/posts/:id', (req, res) => {
  const { id } = req.params
  const findId = postReturn.find((value) => value.id === parseInt(id))
  if (findId) {
    console.log('entrou');
    return res.status(200).json(findId)
  }

  return res.status(404).json({ "message": "post not found" });

})

const PORT = 3300
app.listen(PORT); */

