/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pub-76e8deeb467440aabe17d7f02fa15f99.r2.dev",
        pathname: "/**",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
