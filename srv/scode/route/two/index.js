const express = require('express')
const router = express.Router()
const pug = require('pug')
const doT = require('dot')

const cheerio = require('cheerio')

const BLX = require('./BLX')

const Util = require('topseed-util')
const U = new Util()
 
var options = {}
options.pretty = true

// route ###################### 
const ROOT = './' + ServerConfig.WEBROOT

router.get('/', function (req, res) {	
	console.log('ssr')

	const requestedResource = ROOT + '/page/two/indexM.pug'
	var values = [
			{
			url: 'http://www.yahoo.com',
			head_line: 'Yahoo'
			},
			{
			url: 'http://mail.google.com',
			head_line: 'Gmail'
			},
			{
			url: 'https://www.cnet.com/news/',
			head_line: 'News'
			}
		]

	// SSR, you get data first. SPA, you display view first, like a 'blank' component. Early binding, vs late binding

	const h = pug.renderFile(requestedResource, options)
	const $ = cheerio.load(h) // load in the HTML into cheerio
	
	const tpl1 = $('#Lst1Tpl').text()
	const html = dBind(tpl1, values)
	console.log(html)
	
	res.status(200).send(h)

})//get

function dBind (tpl, data) { // take tmpl and bind w/ data
	console.log(tpl, data)
	const tpl1Foo = doT.template(tpl)
	return tpl1Foo(data)
}

//###################### 
module.exports = router