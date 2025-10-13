/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove or comment out this line:
  // output: 'export', 

  images: {
    // Keep this if you want to use localhost during development
    remotePatterns: [ /* ... */ ], 
    // OR simply remove 'unoptimized: true' if you want image optimization
  },
  // ...
};
module.exports = nextConfig;