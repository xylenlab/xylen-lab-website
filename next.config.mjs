/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Fix for GitHub Pages - use environment variable to detect production
  basePath: process.env.GITHUB_ACTIONS ? '/xylen-lab-website' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/xylen-lab-website/' : '',
}

export default nextConfig
