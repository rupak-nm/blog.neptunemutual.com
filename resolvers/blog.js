const mapping = require('../mappings.json')
const { locate } = require('../redirect')

const find = (url) => {
  try {
    let found = mapping.find(x => `${x.f}` === url)

    if (found) {
      return found
    }

    found = mapping.find(x => `${x.t}` === url)

    if (found) {
      return found
    }
  } catch (error) {
    console.error(error)
  }

  return null
}

const resolve = (url) => {
  const resolved = find(url)

  if (resolved) {
    const location = locate(resolved)
    return location
  }
}

module.exports = { resolve }
