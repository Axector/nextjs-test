/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: '/nextjs-test/',
  basePath: '/nextjs-test',
  output: 'export',
  distDir: 'out'
};

export default nextConfig;
