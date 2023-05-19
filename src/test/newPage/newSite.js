const fs = require('fs-extra');
const path = require('path');

const makeNewSite = (name) => {

    fs.readFile("./src/public/index.html", "utf8", function(err, data) {


    let myCallBack = function(data) {

        return data

     }
        fs.writeFile(`./src/public/${name}`, myCallBack(data), (err) => {
            if (err) throw err;
            });
})
}
module.exports = makeNewSite;