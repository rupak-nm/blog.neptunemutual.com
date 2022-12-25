
const rewrites = {
  'analysis-report': 'exploit-analysis',
  'solana-projects': 'solana'
}

const resolve = (url) => {
  if (!url) {
    return
  }

  if (!url.startsWith('tag')) {
    return
  }

  let tag = url.split('/').pop()

  const rewrite = rewrites[tag]

  if (rewrite) {
    tag = rewrite
  }

  const { REDIRECT_DOMAIN } = process.env
  return new URL(`blog/tag/${tag}#${tag}`, REDIRECT_DOMAIN).href
}

// process.env.REDIRECT_DOMAIN = 'https://neptunemutual.com'
// console.log(resolve('tag/solana-projects'))

module.exports = { resolve }
