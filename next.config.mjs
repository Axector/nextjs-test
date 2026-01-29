/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/nextjs-test/' : '',
  basePath: isProd ? '/nextjs-test' : '',
  output: 'export',
  distDir: 'out',
  sassOptions: {
    implementation: 'sass',
  },
};

export default nextConfig;
