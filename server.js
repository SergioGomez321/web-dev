//Install express server
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');
const configMensaje = require('./configMensaje');
const app = express(); 

require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/dist/web_dev'));

app.get('*', function(req,res) {
  return  req.hostname;
});

app.post('/formulario', (req, res) => {
  configMensaje(req.body);
  res.status(200).send();
})

app.listen(process.env.PORT || 8080);