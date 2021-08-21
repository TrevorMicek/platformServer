const fs = require('fs');
const path = require('path')

const createNewSite = () => {
fs.mkdir(path.join(__dirname, './users/newUser'), function(req,res) {
    try {
        fs.copyFile('./test/API/first-page.json', './test/users/newUser/first-page.json', function(req,res) {
            try {
                console.log('success!')
            } catch (error) {
                console.log('error!', error)
            }
        })
        fs.copyFile('./test/API/second-page.json', './test/users/newUser/second-page.json', function(req,res) {
            try {
                console.log('success!')
            } catch (error) {
                console.log('error!', error)
            }
        })
        fs.copyFile('./test/API/layout.json', './test/users/newUser/layout.json', function(req,res) {
            try {
                console.log('success!')
            } catch (error) {
                console.log('error!', error)
            }
        })
    } catch (error) {
        console.log(error)
    }
} )
}
module.exports = createNewSite