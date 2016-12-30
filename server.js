var express = require('express')
var path = require('path')
var compression = require('compression')
var request = require('request')
var app = express()

app.use(compression())

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))

app.get('/yelp/token', function (req, res) {
    var id='YMRwFiiXGc0SzZ249SVYqg';
    var secret='YWra9IEwLV4reDy4r1R7cpGwINrmdgEm1F9xI5sxowQRCdUEjlgRVFwLevzwdA4J';
    var url='https://api.yelp.com/oauth2/token';
    var form = {
	grant_type:'client_credientals',
	client_id:id,
	client_secret:secret
    }
     
    var callback = function(err, httpResponse, body){
	res.send(body);
    };

    request.post({url:url, form:form}, callback);
})

app.get('/yelp/search/', function (req, res) {
    var baseUrl = 'https://api.yelp.com/v3/businesses/search';

    var options = {
      url: 'https://api.yelp.com/v3/businesses/search?term=food&latitude=37.786882&longitude=-122.399972',	
      headers: {
        'Authorization': 'Bearer qTUxsA2qrcRHmShGCMWtfjlfSbg_p-smWEWHyRAAZxJSgP2hMqw-h0jQvbpNU9nxPLP9JettTNEm_9313SucHlYB0yj1GvlM1lsU1O7adxzhwRuYJWDh7sP1px9mWHYx'
       }
    };
    
    var callback = function(err, httpResponse, body){
      res.send(body)
    };
    console.log('r');
    request(options, callback);
})

// send all requests to index.html so browserHistory works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
