var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gerenciador');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var Recorde = require('./models/recorde');
var RecordeRoutes = require('./routes/recorde');

app.use('/recorde',RecordeRoutes);
app.get('/',function(requisicao, resposta,proximo){
  resposta.send('ok');
});


app.listen(3000, function(){
  console.log('Rodando na porta: 3000');
});


module.export = app;
