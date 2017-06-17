

var PgBLX = BLB.extend({ // 
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
		var values = {'array': values2} // often forgoten
		return values
		}
	})
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
	module.exports = PgBLX //node