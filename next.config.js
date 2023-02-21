/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['source.unsplash.com', 'images.unsplah.com'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
