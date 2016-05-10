
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var REPORTS_FILE = path.join(__dirname, 'report.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Cache-Control', 'no-cache');
   next();
});

app.post('/api/submitReport', function(req, res) {
   fs.readFile(REPORTS_FILE, function(err, data) {
      if (err) {
         console.error(err);
         process.exit(1);
      }

      var reports = JSON.parse(data);
      var newReport = {
         texts: req.body.report,
         star: false,
         time: Date.now(),
      };
      reports.push(newReport);
      fs.writeFile(REPORTS_FILE, JSON.stringify(reports, null, 4), function(err) {
         if (err) {
            console.error(err);
            process.exit(1);
         }
         res.json("success");
      });
   });
});

app.get("/api/fetchReports", function(req, res){
   fs.readFile(REPORTS_FILE, function(err, data) {
      if (err) {
         console.error(err);
         process.exit(1);
      }

      var reports = JSON.parse(data);
      res.json(reports);
   }); 
})

app.listen(app.get('port'), function() {
   console.log('Server started: http://localhost:' + app.get('port') + '/');
});