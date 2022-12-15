const locate = (record) => {
  const { r, t } = record
  const { REDIRECT_DOMAIN } = process.env
  const type = r === 'b' ? 'blog' : 'pressroom'
  const url = [REDIRECT_DOMAIN || 'https://neptunemutual.com', type, t]

  return url.join('/')
}

module.exports = { locate }
