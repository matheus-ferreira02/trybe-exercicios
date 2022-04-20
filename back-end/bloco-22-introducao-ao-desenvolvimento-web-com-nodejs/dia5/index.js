const express = require('express');

const app = express();

app.use(express.json());

const validateBody = (req, res, next) => {
  const { username, email, password } = req.body;

  const validationUsername = username.length > 3;
  const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const validationEmail = regexEmail.test(email);
  const validatePassword = password.length > 4 && password.length < 8;

  if(!(validationUsername && validationEmail && validatePassword)) return res.status(400).json({ "message": "invalid data" });

  next();
}

app.post('/user/register', validateBody, (req, res) => {
  res.status(201).json({ "message": "user created" });
});

const generateToken = () => {
  const tokenArray = [];
  const alpha = ['a', 'e', 'i', 'o', 'u', 'y'];
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  for(let i = 1; i <= 6; i += 1) {
    const random = Math.round(Math.random() * 5);
    tokenArray.push(alpha[random]);
    tokenArray.push(numbers[random]);
  }
  return tokenArray.join('');
};
const validateBodyLogin= (req, res, next) => {
  const { email, password } = req.body;
  const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const validationEmail = regexEmail.test(email);
  const validatePassword = password.length > 4 && password.length < 8;
  if(!(validationEmail && validatePassword)) return res.status(400).json({ "message": "email or password is incorrect" });
  next();
}
app.post('/user/login', validateBodyLogin, (req, res) => {
  const token = generateToken();
  // token: string com 12 caracteres;
  res.status(200).json({token});
})

const PORT = 3200;

app.listen(PORT);