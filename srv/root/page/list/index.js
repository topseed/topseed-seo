const express = require('express')
const router = express.Router()

const cheerio = require('cheerio')

const ListBusiness = require('../../../root/page/list/ListBusiness')

const Util = require('topseed-util')
const U = new Util()
 
// route ###################### 

const ROOT = './' + ServerConfig.WEBROOT

router.get('/', function (req, res) {

	console.log('ssr2')

	const requestedResource = ROOT + '/page/list/indexS.pug'
	const $ = U.getAsDoc(requestedResource)

	var sb = ListBusiness()

	sb.ssrList($, '#myList', '#MyListTemplate')

	res.status(200).send( $.html() ).end()

})//get


//###################### 
module.exports = router