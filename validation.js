const validate = (req) => {
  try {
    const { method } = req

    if (method === 'GET') {
      return true
    }
  } catch (error) {
    console.error(error)
  }

  return false
}

module.exports = { validate }
