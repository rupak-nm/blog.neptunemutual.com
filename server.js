const http = require('http')
const { handler } = require('./handler')

const server = http.createServer(handler)

server.listen(process.env.PORT || 8888, () => {
  console.log('Boot successful')
})
