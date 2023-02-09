// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /* config options here */
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/pomofocusredir',
        destination: 'https://pomofocus.io/',
        permanent: true,
      },
    ]
  },
}