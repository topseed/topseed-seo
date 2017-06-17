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
	console.log('ssr2')
	
	const requestedResource = ROOT + '/page/two/indexM.pug'
	const values2 = [
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
	var values = {'array': values2}

	// SSR, you get data first. SPA, you display view first, like a 'blank' component. Early binding, vs late binding

	const h = pug.renderFile(requestedResource, options)
	const $ = cheerio.load(h) // load in the HTML into cheerio
	
	const tpl1 = $('#Lst1Tpl').text()
	
	let v = dBind(tpl1, values)
	v = dBind(d, values)

	res.status(200).send(v).end()

})//get


function dBind (tpl, data) { // take tmpl and bind w/ data
	const tpl1Foo = doT.template(tpl)
	const v = tpl1Foo(data)
	console.log(v)
	return v
}


//###################### 
module.exports = router