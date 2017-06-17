const express = require('express')
const router = express.Router()

const cheerio = require('cheerio')

const BLX = require('../../../node_modules/topseed-util/BLX')

const Util = require('topseed-util')
const U = new Util()
 
// route ###################### 

var MyBLX = BLX.extend({ 
	getData: function() {
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
		return values
	}
})//class
var blx = new MyBLX(MyBLX)

const ROOT = './' + ServerConfig.WEBROOT

router.get('/', function (req, res) {

	console.log('ssr2')

	const requestedResource = ROOT + '/page/two/indexM.pug'

	var values = blx.getData()

	// SSR, you get data first. SPA, you display view first, like a 'blank' component. Early binding, vs late binding

	const $ = U.getAsDoc(requestedResource)

	const tpl1 = $('#Lst1Tpl').text()
	
	const v = U.dBind(tpl1, values)
	$('#myList').html(v)

	res.status(200).send( $.html() ).end()

})//get


//###################### 
module.exports = router