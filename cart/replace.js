const replace = require('replace-in-file');

const options = {
    files: '../jsonData/cart.json',
    from: /}{/g,
    to: ','
}

module.exports = options;