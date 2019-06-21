var path = require('path');
var express = require('express');

var app = express();

// expose root www at /files
var staticPath = path.join(__dirname, '../');
app.use('/files', express.static(staticPath));

// just this dir
app.use('/', express.static(__dirname));

// here, let's test changing the WiFi network name...
app.get('/test/:param', function (req, res) {
  res.send(req.params)
})

app.listen(3000, function() {
  console.log('listening');
});
