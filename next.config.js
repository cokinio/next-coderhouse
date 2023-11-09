/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'd22fxaf9t8d39k.cloudfront.net',
            port: '',
            pathname: '/**',
          },
        ],
      }
}

module.exports = nextConfig
