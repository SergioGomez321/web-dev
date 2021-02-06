//Install express server
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');
const configMensaje = require('./configMensaje');
const app = express(); 

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/dist/web_dev'));

app.get('*', function(req,res) {
  console.log(req.hostname);
  return  req.hostname;
  //res.sendFile(path.join(__dirname + '/dist/web_dev/index.html'));
});

app.post('/formulario', (req, res) => {
  configMensaje(req.body);
  res.status(200).send();
})

app.listen(process.env.PORT || 8080);