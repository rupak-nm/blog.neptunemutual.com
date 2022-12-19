
const response = require('./response')
const { validate } = require('./validation')
const resolvers = require('./resolvers')
const { getPathname } = require('./util')

const handler = async (req, res) => {
  try {
    const valid = validate(req)

    if (!valid) {
      return response.denied(res)
    }

    const path = getPathname(req)

    const resolved = resolvers.resolve(path)

    if (!resolved) {
      return response.notFound(res)
    }

    return response.redirect(res, resolved)
  } catch (error) {
    console.error(error)
  }

  return response.notFound(res)
}

module.exports = { handler }
