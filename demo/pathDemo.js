const { dirname } = require('path')
const path = require('path')

let filePath = path.join(__dirname, 'pathDemo.js')
let fileExtention = path.extname(filePath)
console.log(fileExtention)

let basename = path.basename(filePath)

console.log(basename)
    //ECMASCRIPT