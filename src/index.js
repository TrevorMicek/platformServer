const express = require('express');
const app = express();
const env = require('dotenv').config()
const cors = require('cors')

const path = require('path');
const bodyParser = require("body-parser");

const newSite = require('./test/newPage/newSite')
const firstPage = 'test/API/first-page.json'
var cloudinary = require('cloudinary').v2;

const changePage = require('./test/change');

const { response } = require('express');

/*cron.schedule('14, *****', () => {
    console.log('wake up server!')
}) const cron = require('node-cron')*/
let findOrigin = () => {
    if (process.env.NODE_ENV === 'production') {
        return "https://eclipser.onrender.com/" || "http://localhost:3000"
    } else {
        return "http://localhost:3000"
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


app.post('/api/upload', (req, res) => {

  cloudinary.config({
    cloud_name: env.parsed.CLOUD_NAME,
    api_key: env.parsed.API_KEY,
    api_secret: env.parsed.API_SECRET,
    secure: true
  });
const uploadImage = async (imagePath) => {

    // Use the uploaded file's name as the asset's public ID and
    // allow overwriting the asset with new versions
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };

    try {
      // Upload the image
      const result = await cloudinary.uploader.upload(imagePath, options);
      console.log(result.public_id);
      return result.public_id;
    } catch (error) {
      console.error(error);
    }
};
const getAssetInfo = async (publicId) => {

    // Return colors in the response
    const options = {
      colors: true,
    };

    try {
        // Get details about the asset
        const result = await cloudinary.api.resource(publicId, options);
        console.log(result);
        return result.colors;
        } catch (error) {
        console.error(error);
    }
};
 // Set the image to upload
 const imagePath = 'https://cloudinary-devs.github.io/cld-docs-assets/assets/images/happy_people.jpg';

 // Upload the image
 const publicId =  uploadImage(imagePath);
  // Get the colors in the image
const colors =  getAssetInfo(publicId);


})
app.use('/api/page/', express.static(path.join(__dirname, './test/API/Pages')));

app.use('/',express.static(path.join(__dirname, './public')))

 app.post("/api/page/:page", function(req, res) {
            //req.params.page === 'newSite.js' ? newSite(req.body.name) :

            res.send(changePage(`test/API/Pages/${req.body.page}.json`, req.body))
    })

    app.post("/newPage/:page", function(req, res) {
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
