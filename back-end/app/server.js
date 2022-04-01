const express = require('express');
const router = require("./routers/root.router");
const app = express();
const port = 3000;

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


//setup sequelize
const {sequelize} = require('./model');
sequelize.sync({alter: true});