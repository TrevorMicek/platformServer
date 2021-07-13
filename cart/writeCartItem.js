const fs = require('fs');
const replace = require('replace-in-file');



const writeCart = (filePath, jsonFile) => {
   const optionOne = {
    files: './jsonData/userId123.json',
    from: /}{/g,
    to: ',',
}
const optionTwo = {
    files: './jsonData/userId123.json',
    from: /{}}/g,
    to: ''
}
    let json = JSON.stringify(jsonFile, null, 2)
fs.readFile(`${filePath}`, "utf8", function(err, data) {
    if (err) throw err;
    replace(optionOne, (error, results) => {
        if (error) {
            return console.error('Error occured:', error);

        }
        console.log('Replacement result:', results)
    })
    
  


        fs.writeFile(`${filePath}`, json, {flag: 'a'}, (err) => {
        if (err) throw err;
      
        });
       
   
});//read/write
}
module.exports = writeCart;