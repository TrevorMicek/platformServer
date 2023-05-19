const fs = require('fs-extra');
const path = require('path');

const makeNewSite = (copy, to) => {
    console.log('copying')
    fs.readFile(`./src/test/newPage/${copy}.html`, "utf8", function(err, data) {


    let myCallBack = function(data) {

        return data

     }
        fs.writeFile(`./src/public/${to}.html`, myCallBack(data), (err) => {
            if (err) throw err;
            });
})
}
module.exports = makeNewSite;