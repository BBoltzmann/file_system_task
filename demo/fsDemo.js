const fs = require('fs')
const path = require('path')

let filePath = path.join(__dirname, 'demo.txt')

fs.readFile(filePath, 'utf8', (err, data) => {
    console.log(err)
        //console.log(data)

})