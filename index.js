const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

/*/
express()
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => res.render('pages/index'))
	.get('/cool', (req, res) => res.send(cool()))
	.listen(PORT, () => console.log(`Listening on ${ PORT }`))
//*/

var http = require('http')
var fs = require('fs')
var console = require('console')
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
const logger = new console.Console(output, errorOutput);

http.createServer(function(req, res) {
	logger.log("req: ", req.url);
	res.writeHead(200, { 'Content-Type': 'text/plain' })
	res.end('Hello world\n');
}).listen(PORT);
//*/