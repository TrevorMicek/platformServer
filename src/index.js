const express = require('express');
const app = express();

const cors = require('cors')

const path = require('path');
const bodyParser = require("body-parser");

const newSite = require('./test/newPage/newSite')
const firstPage = 'test/API/first-page.json'

const changePage = require('./test/change');
const { response } = require('express');

/*cron.schedule('14, *****', () => {
    console.log('wake up server!')
}) const cron = require('node-cron')*/
let findOrigin = () => {
    if (process.env.NODE_ENV === 'production') {
        return "http://localhost:4000/"
    } else {
        return "http://localhost:3000"
    }
}

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
var whitelist = ['http://localhost:3000', 'https://eclipser.onrender.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './public')))
    app.use('/api/page/', express.static(path.join(__dirname, './test/API')));

} else {
    app.use(express.static(path.join(__dirname, './public')))
}
app.get('/', cors(corsOptions),(req, res) => {
    res.sendFile(path.join(__dirname))
})
app.use('/api/page/',cors(corsOptions), express.static(path.join(__dirname, './test/API/Pages')));

app.use('/',cors(corsOptions), express.static(path.join(__dirname, './public')))

 app.post("/api/page/:page", cors(corsOptions), function(req, res) {
            //req.params.page === 'newSite.js' ? newSite(req.body.name) :

            res.send(changePage(`test/API/Pages/${req.body.page}.json`, req.body))
    })

    app.post("/newPage/:page", cors(corsOptions), function(req, res) {
        //req.params.page === 'newSite.js' ? newSite(req.body.name) :

        res.send(newSite(req.body.copy, req.body.to))
})










/*
app.get("api/jsonData", function(req, res, next) {
    res.send(categories);
  });


const fs = require('fs');

router.get('/api/items', (req, res) => {

    fs.readFile('./data/db.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });

});
*/

var listener = app.listen(process.env.PORT || 4000, function() {
    console.log('Listening on port ' + listener.address().port);
});
