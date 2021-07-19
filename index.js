const express = require('express');
const app = express();

const cors = require('cors')

const path = require('path');
const bodyParser = require("body-parser");


const firstPage = './test/first-page.json'

const changePage = require('./test/change');
const { response } = require('express');

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(cors({origin:'https://platformservice.netlify.app/',credentials: true}));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('testPage'))
    app.use('/api/page/', express.static(path.join(__dirname, './test')));
   
}
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname))
})
app.use('/api/page/', express.static(path.join(__dirname, './test')));
   
 app.post("/api/page/:page", function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://platformservice.netlify.app/');
        if (req.body.add === undefined && req.body.delete === undefined && req.body.to === undefined ) {
            res.redirect('https://platformservice.netlify.app/')
        } else {
            changePage(firstPage, req.body)
            res.redirect('https://platformservice.netlify.app/')
            
        }
       
    })
app.use("/api/components", express.static(path.join(__dirname, './components')))








     



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
