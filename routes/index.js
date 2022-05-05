const express = require('express');

const router = express.Router();
router.get('/api/health', (req, res) => 
  	res.json({ 'status': 'ok' }));

router.get('/api/mirror', function(req, res){
    res.json({ 'transformed': helper_function ( req.query.word ) });
});

function helper_function(string) {
	var newString = x = '';
	for (var i = 0; i < string.length; i++) {
		if( !isNaN( string[i] ) ){
			newString += 10 - string[i]*1 - 1;
		}else{
			newString += string[i] + x === string[i].toUpperCase() ? string[i].toLowerCase() : string[i].toUpperCase();
		}
	}
	return newString.split("").reverse().join("");
}

module.exports = router;