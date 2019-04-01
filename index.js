const cool = require('cool-ascii-faces')

const bodyParser = require('body-parser')


const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'us-cdbr-iron-east-03.cleardb.net',
	user     : '/bd5f7a78084af4',
	password : 'be0208f5',
	database : 'express2'
});

connection.connect();



//*/
express()
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => res.render('pages/index'))
	.get('/page', (req, res) => res.render('pages/page'))
	.get('/login_page', (req, res) => res.render('pages/login_page'))
	.post('/login', urlencodedParser, (req, res) => {
		if (!req.body) req.sendStatus(400)
		res.json({ id: req.body.username })
	})
	.post('/jsontest', jsonParser, (req, res) => {
		res.json({
			username: req.body.username
		})
	})
	.get('/person/:id', (req, res) => {
		//res.json({ id: req.params.id })
		res.render('pages/person', { fname: req.query.fname })
	})
	.get('/api', (req, res) => res.json({ test: 1234, data: "Here" }))
	.get('/books/check', (req, res) => {
		connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
			if (error) throw error;
			console.log('The solution is: ', results[0].solution);
			res.json({ status: results[0].solution})
		});

	})
	.get('/cool', (req, res) => res.send(cool()))
	.listen(PORT, () => console.log(`Listening on ${ PORT }`))
/*/

var http = require('http')
var fs = require('fs')
var console = require('console')
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
const logger = new console.Console(output, errorOutput);
http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	var obj = {
		firstname: 'Alex',
		lastname: 'Hawley'
	}
	res.end(JSON.stringify(obj));
}).listen(PORT);
//*/