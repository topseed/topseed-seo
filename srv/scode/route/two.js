const dot = require('jstransformer')(require('jstransformer-dot'))

const express = require('express')
const router = express.Router()
const Util = require('topseed-util')

const BLX = require('./BLX')

router.get('/', function (req, res) {	
	console.log('ssr')

	var d = dot.render('Hello, {{=it.name}}!', { name: 'World'}).body
	//=> 'Hello, World!'

	/*
	BL.renderPage(req) // comp
		.then(function (html) {
			res.status(200).send(html)
		})
	*/

	
	var html = 'yo'
	res.status(200).send(d)


})//get



//###################### 
module.exports = router