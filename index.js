var express = require('express'), 
    pug = require('pug'),
    path = require('path'),
    config = require('./Menu');
	
var app = express();

app.set("view engine", "pug");
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public/')));

app.get('/', function(req, res)
       {
    res.render('index', {title: "Homepage",
                         config: config
                        });
});

app.get('/:page', function(req, res)
    {
    res.render(req.params.page, {title: req.params.page,
                         config: config});
});

app.listen(3000);


function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }