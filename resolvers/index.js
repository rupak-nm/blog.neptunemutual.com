const blog = require('./blog')
const tag = require('./tag')
const resolvers = [blog, tag]
const { trim } = require('../util')

const resolve = (url) => {
  const trimmed = trim(url)

  for (const resolver of resolvers) {
    const resolved = resolver.resolve(trimmed)

    if (resolved) {
      return resolved
    }
  }
}

module.exports = { resolve }
