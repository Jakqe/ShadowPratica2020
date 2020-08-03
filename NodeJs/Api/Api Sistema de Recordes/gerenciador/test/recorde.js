var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var Recorde = require('../models/recorde');
var should = chai.should();
//should(res.body).be.a('array');
//var chai = require('chai'), chaiHttp = require('chai-http');

chai.use(chaiHttp);
//chai.use(chaiHttp);

describe('Recorde', function(){

  var id;
  var token;

  before(function(next){
    Recorde.remove({},function(err){
      next();
    });
  });

  it('Novo Recorde', function(done){
    var novoRecorde = {
      username:'Mateus',
      recorde: 1000
    };

    chai.request(server)
      .post('/recorde')
      .send(novoRecorde)
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.have.property('_id');
        res.body.recorde.should.have.property('token');
        res.body.recorde.should.have.property('token');
        res.body.recorde.should.have.property('username');
        res.body.recorde.should.have.property('recorde');

        res.body.recorde.username.should.be.equals('Mateus');
        res.body.recorde.username.should.be.equal(1000);

        token = res.body.recorde.token;
        id = res.body.recorde._id;

        done();
      });
  });

  it('Pegar recorde pelo Id', function(done){
    .get('/recorde/id' + id)
    .end(function(err, res){
      console.log(res.body);
      res.should.have.status(200);
      res.body.should.have.property('recorde');

      res.body.should.have.property('_id');
      res.body.recorde.should.have.property('token');
      res.body.recorde.should.have.property('username');
      res.body.recorde.should.have.property('recorde');

      res.body.recorde.username.should.be.equals('Mateus');
      res.body.recorde.username.should.be.equal(1000);

      done();
    });
  });

  it('Pegar recorde pelo Token', function(done){
    .get('/recorde/id' + token)
    .end(function(err, res){
      console.log(res.body);
      res.should.have.status(200);
      res.body.should.have.property('recorde');

      res.body.should.have.property('_id');
      res.body.recorde.should.have.property('token');
      res.body.recorde.should.have.property('username');
      res.body.recorde.should.have.property('recorde');

      res.body.recorde.username.should.be.equals('Mateus');
      res.body.recorde.username.should.be.equal(1000);

      done();
  });

  it('Alterar Recorde - recorde menor ', function(done){
    var recordeAlterado = {
      token: token,
      recorde:900
    }
    chai.request(server)
    .put('/recorde')
    .send(recordeAlterado)
    .end(function(err, res){
      res.should.have.status(200);
      res.body.should.have.property('recorde');

      res.body.recorde.should.have.property('_id');
      res.body.recorde.should.have.property('token');
      res.body.recorde.should.have.property('username');
      res.body.recorde.should.have.property('recorde');


      res.body.recorde.username.should.be.equal('Mateus');
      res.body.recode.should.be.equal(1000);

      done();
    })
  });

  it('Alterar Recorde - recorde maior ', function(done){
    var recordeAlterado = {
      token: token,
      recorde:1000
    }
    chai.request(server)
    .put('/recorde')
    .send(recordeAlterado)
    .end(function(err, res){
      res.should.have.status(200);
      res.body.should.have.property('recorde');

      res.body.recorde.should.have.property('_id');
      res.body.recorde.should.have.property('token');
      res.body.recorde.should.have.property('username');
      res.body.recorde.should.have.property('recorde');


      res.body.recorde.username.should.be.equal('Mateus');
      res.body.recode.should.be.equal(1000);

      done();
  });
});
