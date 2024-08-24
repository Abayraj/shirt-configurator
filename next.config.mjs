/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // No need to modify externals for 'canvas'
    return config;
  },
  experimental: {
    esmExternals: "loose",
  },
};

export default nextConfig;
