/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {appDir: true},
  images: {
    domains: ['inside.eaglenationnil.com'],
  },
  compiler: {
    styledComponents: true
  },
  async redirects() {
    return [
      {
        source: '/support',
        destination: '/memberships',
        permanent: true,
      }
    ]
  },
}

module.exports = nextConfig
