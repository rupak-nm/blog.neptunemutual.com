const { locate } = require('./redirect')
const response = require('./response')
const mapping = require('./mapping')
const { validate } = require('./validation')

const handler = async (req, res) => {
  try {
    const valid = validate(req)

    if (!valid) {
      response.denied(res)
      return
    }

    const { url } = req

    const found = mapping.find(url)

    if (!found) {
      return response.notFound(res)
    }

    const location = locate(found)

    if (location) {
      response.redirect(res, location)
      console.log('%s --> %s', req.url, location)
      return
    }
  } catch (error) {
    console.error(error)
  }

  return response.notFound(res)
}

module.exports = { handler }
