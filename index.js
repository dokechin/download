const express = require('express')
var path = require('path');
var fs = require('fs');

const app = express()
const port = 3000


app.get('/download24', function(req, res){

  var file = __dirname + '/upload-folder/１２３４５６７８９０１２３４５６７８９０１２３４.txt';

  var filename = path.basename(file);
  var newFileName = encodeURIComponent(filename);

  res.setHeader('Content-disposition', 'attachment; filename*=UTF-8\'\'' + newFileName);
  res.setHeader('Content-type', "application/octet-stream",);

  var filestream = fs.createReadStream(file);
  filestream.pipe(res);
});

app.get('/download25', function(req, res){

	var file = __dirname + '/upload-folder/１２３４５６７８９０１２３４５６７８９０１２３４５.txt';
  
	var filename = path.basename(file);
	var newFileName = encodeURIComponent(filename);
  
	res.setHeader('Content-disposition', 'attachment; filename*=UTF-8\'\'' + newFileName);
	res.setHeader('Content-type', "application/octet-stream",);
  
	var filestream = fs.createReadStream(file);
	filestream.pipe(res);
  });
  
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
