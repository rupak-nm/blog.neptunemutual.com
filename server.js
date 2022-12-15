const http = require('http')
const { handler } = require('./handler')

http.createServer(handler)
  .listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`Server running at http://127.0.0.1:${process.env.PORT}`)
  })
