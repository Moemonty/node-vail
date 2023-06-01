// SIMPLE SERVER HERE:

// const http = require('http')
// const port = process.env.PORT || 3000
//
//
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain'})
//     res.end('Hello World')
// })
//
// server.listen(port, () => console.log(`Server started on ${port}`))

const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5001

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
