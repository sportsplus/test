var express = require('express');
var app = express();
var moment = require('moment-timezone')

app.engine('.html', require('ejs').__express);
app.set('port', 3000);
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/', function(request, response) {
  response.render('pages/index', {
    local_time: moment(),
    utc: moment().utc()
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
