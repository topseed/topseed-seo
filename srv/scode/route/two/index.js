const express = require('express')
const router = express.Router()
const pug = require('pug')
const transformer = require('jstransformer')
const dot = transformer (require('jstransformer-dot'))

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
	const html = pug.renderFile(requestedResource, options)
	// SSR, you get data first. SPA, you display view first, like a 'blank' component. Early binding, vs late binding
	var d = dot.render('Hello, {{=it.name}}!', { name: 'World'}).body


	res.status(200).send(d)

})//get



//###################### 
module.exports = router