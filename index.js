const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

//*/
express()
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => res.render('pages/index'))
	.get('/page', (req, res) => res.render('pages/page'))
	.get('/person/:id', (req, res) => {
		res.json({ id: req.params.id })
		//res.render('pages/page')
	})
	.get('/api', (req, res) => res.json({ test: 1234, data: "Here" }))
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