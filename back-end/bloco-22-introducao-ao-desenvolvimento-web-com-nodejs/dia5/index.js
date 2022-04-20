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

const PORT = 3200;

app.listen(PORT);

