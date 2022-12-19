const resolve = (url) => {
  if (!url) {
    return
  }

  if (!url.startsWith('tag')) {
    return
  }

  const tag = url.split('/').pop()

  const { REDIRECT_DOMAIN } = process.env
  return new URL(`blog/tag/${tag}#${tag}`, REDIRECT_DOMAIN).href
}

module.exports = { resolve }
