const mapping = require('./mappings.json')

const find = (url) => {
  try {
    let found = mapping.find(x => `/${x.f}` === url)

    if (found) {
      return found
    }

    found = mapping.find(x => `/${x.t}` === url)

    if (found) {
      return found
    }
  } catch (error) {
    console.error(error)
  }

  return null
}

module.exports = { find }
