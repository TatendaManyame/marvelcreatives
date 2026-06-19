import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development
  reactStrictMode: true,
  
  // Configure image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // Add any other image hosts you're using
      // For example, if you use cloudinary:
      // {
      //   protocol: 'https',
      //   hostname: 'res.cloudinary.com',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
    // Optional: Set minimum cache time for images
    minimumCacheTTL: 60,
  },

  // If you have the chat route that requires OpenAI API key,
  // mark it as dynamic to avoid static generation during build
  // This will be handled by environment variables
  //serverExternalPackages: ['openai'], // If you're using the openai package

  // Optional: Configure ESLint to ignore during build (use only if you need to)
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
};

export default nextConfig;