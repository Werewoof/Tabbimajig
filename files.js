const fs = require('fs');

function writeToFile = function(fileName, array){
var file = fs.createWriteStream(fileName+'.txt');
		file.on('error', function(err) { /* error handling */ });

		for (var i = 0, len = array.length; i < len; i++) {

				file.write(array[i] + '\n');
		};

		file.end();
}
module.exports = fileSystem;
