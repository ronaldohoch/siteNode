var express = require('express');
var router = express.Router();
var middlewere = function(req,res,next){
	console.log("Bombo");
	next();
}


/* GET users listing. */
router.get('/', function(req, res) {
  // res.send('Cadastro');
  res.render('signup', { title: 'Signup',msg:'Bem vindo.' });
});

/* GET users listing. */
router.post('/new', middlewere, function(req, res) {
  res.json({'Novo':"new"});
  // res.render('signup', { title: 'Signup',msg:'Bem vindo.' });
});

router.get('/delete', middlewere, function(req, res) {
  res.send("Deletado");
  // res.render('signup', { title: 'Signup',msg:'Bem vindo.' });
});

module.exports = router;