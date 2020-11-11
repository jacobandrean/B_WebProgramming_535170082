// const { request, response } = require('express')
const express = require('express')
const bodyParser = require('body-parser')

// buat test
// express().listen('3000', () => {
//     console.log('Server run successfully at port 3000')
// })

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/testpug1', (request, response) => {
    response.render('index', { title: 'Hello World', message: 'Hello there!' })
})

app.get('/testpug2', (request, response) => {
    response.render('index', { title: 'Jacob', message: 'Jacob is here!' })
})

// GET http://localhost:3000
app.get('/', (request, response) => {
    response.send('Hello, World!')
})

// GET http://localhost:3000/about
app.get('/about', (request, response) => {
    response.send('About Us')
})

// GET http://localhost:3000/news/500 => 500 adalah id_news
app.get('/news/:id', (request, response) => {
    const id_news = request.params.id
    response.send(`Request data = ${id_news}`)
})

// GET http://localhost:3000/login => menampilkan form login
app.get('/login', (request, response) => {
    response.send('Ketikkan username dan password')
})

// POST http://localhost:3000/login => melakukan login, cek username dan password yg diketik
app.post('/login', (request, response) => {
    const username = request.body.username
    const password = request.body.password
    response.send(`Request POST login: ${username} dan ${password}`)
})

app.listen(3000)
console.log('Server runs at port 3000')