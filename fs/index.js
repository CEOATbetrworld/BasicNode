const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, './data.txt'), { encoding: 'utf-8' }, function (error, data) {
    if (error) return console.error(error)
    console.log(data)
})

fs.writeFile('data.txt', 'and I am the data which is written', function (error) {
    if (error) return console.error(error)
    console.log('Writing is done.')
})