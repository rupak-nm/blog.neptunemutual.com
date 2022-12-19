const trim = x => x.split('/').filter(x => x !== '').join('/')

const getPathname = (req) => {
  const url = new URL(`https://blog.neptunemutual.com${req.url}`)
  return url.pathname
}

module.exports = { trim, getPathname }
