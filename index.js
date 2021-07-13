const express = require('express');
const app = express();

const cors = require('cors')

const path = require('path');
const bodyParser = require("body-parser");


const firstPage = './test/first-page.json'

const changePage = require('./test/change')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(cors({origin:true,credentials: true}));
app.use('/', express.static('build'));



app.post("/api/page/:page", function(req, res) {
    if (req.body.add === undefined && req.body.delete === undefined && req.body.to === undefined ) {
        res.redirect('http://localhost:8000')
    } else {
    changePage(firstPage, req.body)
    res.redirect('http://localhost:8000')
    }
})
app.use('/api/page', express.static(path.join(__dirname, '../server/test')));






     



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