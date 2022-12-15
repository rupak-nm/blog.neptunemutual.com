const json = (res, status, message) => {
  res.writeHead(status, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ message }))
}

const redirect = (res, location) => {
  res.writeHead(301, { Location: location })
  res.end()
}

const denied = (res) => json(res, 403, 'Access is denied')
const notFound = (res) => json(res, 404, 'Not found')

module.exports = { json, redirect, denied, notFound }
