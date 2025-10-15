/** @type {import('next').NextConfig} */
const nextConfig = {
  // Assuming you want to remove 'output: export' as suggested:
  // output: 'export', 

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // This is the hostname from the error: "ecomm.braventra.in"
        hostname: 'ecomm.braventra.in',
        // The pathname is the path segment after the hostname.
        // The images are under /public/banners/, so we allow anything after public.
        pathname: '/public/**',
      },
    ],
    // Remove 'unoptimized: true' if it was present, as Next.js 
    // will now be able to optimize these images.
  },
  // ... any other configurations you might have
};

module.exports = nextConfig;