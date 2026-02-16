import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/oil",
  assetPrefix: "/oil/",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdnstatic.rg.ru',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kontakt.az',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.lmshop.az',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'motoroil.az',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'motorsoil.com.ua',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
