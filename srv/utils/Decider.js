const fs = require('fs')
const pug = require('pug')

const transformer = require('jstransformer')

const isj = require('is_js')

const Util = require('topseed-util')
const U = new Util() 

// ###################### middle filter
const ROOT = './' + ServerConfig.WEBROOT



var options = {}
options.pretty = true

function pugComp(req,res) {
	const pgPath = U.getPath(ROOT,req)
	const requestedResource = U.replace(pgPath, '.html', '.pug')
	console.log('requested:'+requestedResource )
	res.header('Content-Type', 'text/html')
	U.cacheQuick(res)
	const html = pug.renderFile(requestedResource, options)
	res.send(html)
}

//**************** */
exports.decide = function (req, res, next) {//decide based on port
	res.header('X-TimeSent', U.getDt() )
	U.cacheLong(res) // default is long, later we set to quick if needed	
	console.log('dec')

	if (req.path.indexOf('.') > 0 ) { // hasDot?
		if(req.path.indexOf('.html') > 0) {
			pugComp(req, res)
		} else
		next() // it is a static asset, ex: .jpg, .css
	} else { // no dot, it is a path:
		try {
			console.log(req.socket.localPort)

			const pgPath = U.getPath(ROOT,req)
			console.log('requested:'+pgPath )
			const requestedResource = pgPath + 'index.pug'

			res.header('Content-Type', 'text/html')
			U.cacheQuick(res)

			const html = pug.renderFile(requestedResource, options)
			res.send(html)

		} catch(err) {
			console.log('err', err)
		}
	}
}//()

