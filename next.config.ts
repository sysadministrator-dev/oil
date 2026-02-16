import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
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
  experimental: {
    // allowedDevOrigins removed as it causes TS errors in Next.js 15 and is often handled by the environment
  } as any,
};

export default nextConfig;
