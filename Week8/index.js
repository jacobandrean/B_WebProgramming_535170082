// console.log('Hello world')
// const a = 3
// const b = 4
// console.log(a + b)

/////////////////////////////////////////////////////////////

// const fs = require('fs') // require is import so it will import fs

// fs.readFile('hello.txt', function(err, data) {
//     if (err) {
//         console.log(err.stack)
//     } else {
//         console.log(data.toString())
//     }
// })

// const callback = function(err, data) {
//     if (err) {
//         console.log(err.stack)
//     } else {
//         console.log(data.toString())
//     }
// }
// fs.readFile('hello.txt', callback) // asynchronous

// const data = fs.readFileSync('hello.txt') // synchronous
// console.log(data.toString())

/////////////////////////////////////////////////////////////

// const http = require('http')

// const port = 3000
// const app = http.createServer(function(request, response) {
//     response.writeHead(200, {'Content-Type': 'text/html'}) // 200 OK  404 Not Found

//     response.write('<h1>Hello, Jacob!</h1>')
//     response.write('<p>This is a node server :)</p>')

//     response.end('This is an HTTP example.')
// })
// app.listen(port)

// console.log(`The server has been started on port ${port}`)

/////////////////////////////////////////////////////////////

// const http = require('http')
// const httpStatus = require('http-status-codes')

// const port = 3000

// const routes = {
//     '/'     : '<h1>Hello, World!</h1>',
//     '/about': '<h1>Learn more about us!</h1><p>Visit the link here.</p>'
// }

// const app = http.createServer(function(request, response) {

//     const url = request.url
//     console.log(`Send request to ${url}`)

//     if(routes[url]) { // cek apakah url ada di dalam routes
//         response.writeHead(httpStatus.OK, {'Content-Type': 'text/html'})
//         response.end(routes[url])
//     } else {
//         response.writeHead(httpStatus.NOT_FOUND, {'Content-Type': 'text/plain'})
//         response.end('Page not found')
//     }

//     response.end()
// })
// app.listen(port)

// console.log(`The server has been started on port ${port}`)

/////////////////////////////////////////////////////////////

const http = require('http')
const httpStatus = require('http-status-codes')
const fs = require('fs')

const port = 3000

const routes = {
    '/'     : 'views/index.html',
    '/about': 'views/about.html'
}

const app = http.createServer(function(request, response) {

    const url = request.url
    console.log(`Send request to ${url}`)

    if(routes[url]) { // cek apakah url ada di dalam routes
        response.writeHead(httpStatus.OK, { 'Content-Type': 'text/html' })
        fs.readFile(routes[url], (err, data) => { // read isi html dari file
            if(err) {
                console.log(err)
            } else {
                response.end(data)
            }
        })
    } else {
        response.writeHead(httpStatus.NOT_FOUND, { 'Content-Type': 'text/plain' })
        response.end('Page not found')
    }
})
app.listen(port)

console.log(`The server has been started on port ${port}`)