/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains : ["ssl.gstatic.com"],
  }
}

module.exports = nextConfig
