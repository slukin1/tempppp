/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: '/news',
      },
    ]
  },
}
