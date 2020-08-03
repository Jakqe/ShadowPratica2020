var routes = require('express').Router();
var Recorde = require('../models/recorde');


//POST adicionar um novo Recorde
routes.post('/', function(req, res){
  if(!req.body.username || !req.body.recorde){
    return res.status(422).send({error: "Faltam dados."});
  }
  var novoRecorde = new Recorde({
    username: req.body.username,
    recorde:parseFloat(req.body.recorde)
  });
  novoRecorde.save(function(err){
    if(err) return res.status(403).send({error: err});
    return res.send({recorde: novoRecorde});
  });
});

// GET pegar um get pelo id
routes.get('/id/:id', function(req, res){
  if(!req.params.id){
    return res.status(422).send({error: "Faltam dados."});
  }
  Recorde.findById(req.params.id).select('_id username recorde').exec(function(err, recorde){
    if(err) return res.status(403).send({error: err});
    if(!recorde) return res.status(422).send({error: "Recorde não existe para este id."});
    return res.send({recorde});
  });
});
// get pegar um recorde pelo token
routes.get('/id/:token', function(req, res){
  if(!req.params.token){
    return res.status(422).send({error: "Faltam dados."});
  }
  Recorde.findOne({
    token: req.params.token
  }).select('_id username recorde').exec(function(err, recorde){
    if(err) return res.status(403).send({error: err});
    if(!recorde) return res.status(422).send({error: "Recorde não existe para este token."});
    return res.send({recorde});
  });
});

//PUT atualizar um recorde pelo token
routes.put('/',function(req, res){
  if(!req.body.token || !req.body.recorde){
    return res.status(422).send({error: "Faltam dados."});
  }
  Recorde.findOne({
    token: req.body.token
  }).exec(function(err, recorde){
      if(err) return res.status(403).send({error: err});
      if(!recorde) return res.status(422).send({error: "Recorde não existe para este token."});
      if(parseFloat(req.body.recorde) > recorde.recorde){
        recorde.recorde = parseFloat(req.body.recorde);
      }
      recorde.save(function(err){
          if(err) return res.status(403).send({error: err});
          return res.send({recorde});
      })
  })
});

module.exports = routes;
