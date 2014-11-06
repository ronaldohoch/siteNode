var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  // res.send('Cadastro');
  res.render('signup', { title: 'Signup',msg:'Bem vindo.' });
});

/* GET users listing. */
router.post('/new', function(req, res) {
  var db = req.db;

  //Pega os valores por qualquer meio que vier, seja ele POST ou GET
  var userName = req.param('name'),
      password = req.param('password');
  //Seleciona a collection para inserir
  var collection = db.get('Users');
  //Envia para o banco de dados
  collection.insert({
  	"name":userName,
  	"senha":password
  },function(err,doc){
  	if(err){
  		//Se falhar, retorna o erro.
  		res.send("Deu erro.");
  	}else{
  		//Se funcionar, troca a página
  		res.location("userlist");
  		//mostra a página de userlist
  		res.redirect("userlist");
  	}
  })
});

router.get('/delete', function(req, res) {
  res.send("Deletado");
  // res.render('signup', { title: 'Signup',msg:'Bem vindo.' });
});

//Pega a lista de usuários
router.get('/userlist',function(req,res){
	var db = req.db;
	var collection = db.get('Users');
	collection.find({},{},function(e,docs){
		console.log("e,docs:",e,docs);
		res.render('userlist',{
			"userlist":docs
		});
	});
})

module.exports = router;