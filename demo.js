const path = require('path')
const fs = require('fs')
const http = require('http')

/*
HTTP STATTUS code

*200 - successful retrival
*201 - successful creatiion

* 300 - Redirect
* 300 - Redirect after creation

* 400 - Bad request
* 401 - Forbideen

* 500 - Server error


*/

const server = http.createServer((request, response) => {
    // if (request.url === '/') {
    //     let filePath = path.join(__dirname, 'public', 'index.html')
    //     fs.readFile(filePath, 'utf8', (err, data) => {
    //         response.writeHead(200, { 'Content-Type': 'text/html' })
    //         response.end(data)
    //     })
    // }
    let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url)
    let contentType = getContentType(filePath) || 'text/html'
    let emptyPagePath = path.join(__dirname, 'publc', '404.html')
    fs.readFile(filePath, 'utf8', (err, content) => {
        if (err) {
            if (err.code === 'ENDENT') {
                fs.readFile(emptyPagePath, 'utf8', (err, content) => {
                    response.writeHead(200, { 'Content-Type': contentType })
                    response.end(content)
                })
            } else {
                response.writeHead(500)
                response.end('A server error has occured')
            }
        }
        if (!err) {
            response.writeHead(200, { 'Content-Type': contentType })
            response.end(content)
        }
    })
})
const getContentType = (filePath) => {
    let extname = path.extname(filePath)
    if (extname === '.js') {
        return 'text/javascript'
    }
    if (extname === '.css') {
        return 'text/css'
    }
    if (extname === '.png') {
        return 'image/png'
    }
    if (extname === '.jpg') {
        return 'image/jpg'
    }
}
const port = 5000

server.listen(port, () => {
    console.log(`string text ${port} string text`)
})