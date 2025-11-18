/** @type {import('next').NextConfig} */
const nextConfig = {
  // NÃO usar basePath nem assetPrefix para domínio próprio
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;