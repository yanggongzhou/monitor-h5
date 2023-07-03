/** @type {import('next').NextConfig} */
const nextConfig = {
  // /** 以下输出静态页面 */
  // // https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  // output: 'export', // Next.js will produce an out folder which contains the HTML/CSS/JS assets for your application.
  // // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://landpage.hw.dzods.cn' : undefined,
  // basePath: "/out",
  // productionBrowserSourceMaps: false,
  // /** 以上输出静态页面 */

  async rewrites() {
    return [
      // { source: '/robot/send/:path*', destination: `https://oapi.dingtalk.com/robot/send:path*` },
      { source: '/text-to-speech/:path*', destination: `https://api.elevenlabs.io/v1/text-to-speech:path*` },
    ]
  },
}

module.exports = nextConfig
