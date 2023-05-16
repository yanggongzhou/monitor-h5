/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/robot/send/:path*', destination: `https://oapi.dingtalk.com/robot/send:path*` },
    ]
  },
}

module.exports = nextConfig
