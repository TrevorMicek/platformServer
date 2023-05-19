const express = require('express');
const app = express();

const cors = require('cors')

const path = require('path');
const bodyParser = require("body-parser");

const newSite = require('./test/API/newSite')
const firstPage = './test/API/first-page.json'

const changePage = require('./test/change');
const { response } = require('express');

let findOrigin = () => {
    if (process.env.NODE_ENV === 'production') {
        return "https://eclipsebuilder.vercel.app"
    } else {
        return "http://localhost:4000"
    }
}

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
let corsOptions = {
    origin: findOrigin(),
    credentials: true
}
app.use(cors(corsOptions))


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './public')))
    app.use('/api/page/', express.static(path.join(__dirname, './test/API')));

} else {
    app.use(express.static(path.join(__dirname, './public')))
}
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname))
})

app.use('/api/page/', express.static(path.join(__dirname, './test/API')));
app.use(express.static(path.join(__dirname, './public')))
 app.post("/api/page/:page", function(req, res) {
            //req.params.page === 'newSite.js' ? newSite(req.body.name) :

            res.send(changePage(firstPage, req.body))
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
