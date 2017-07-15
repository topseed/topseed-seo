const express = require('express')
const router = express.Router()

const cheerio = require('cheerio')

PLX = require('../../../node_modules/topseed-util/PLX')
PDS = require('../../../root/_js/PDS')
const ListBusiness = require('../../../root/page/list/ListBusiness')
const doT = require('dot')

const Util = require('topseed-util')
const U = new Util()
 
// route ###################### 

const ROOT = './' + ServerConfig.WEBROOT

router.get('/', function (req, res) {

	console.log('ssr')

	const requestedResource = ROOT + '/page/list/indexS.pug'
	var $ = U.getAsDoc(requestedResource)

	var sb = ListBusiness()

	sb.ssrList('#myList', '#MyListTemplate', $, doT)
	.then(function(){
		res.status(200).send( $.html() ).end()
	})
})//get

//###################### 
module.exports = router