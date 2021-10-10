const fs = require('fs-extra');
const path = require('path');

const makeNewSite = (name) => {
    return fs.copy('./test/API', `./test/users/${name}`, function(err, data) {
        fs.mkdir(`./test/users/${name}`, function(err, newDir) {
            if (err) throw err;
            return newDir
        })
        return data
    })
}
module.exports = makeNewSite;