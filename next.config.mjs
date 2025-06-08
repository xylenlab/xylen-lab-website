/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Fix for GitHub Pages path issues
  basePath: process.env.NODE_ENV === 'production' ? '/xylen-lab-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/xylen-lab-website/' : '',
}

export default nextConfig
