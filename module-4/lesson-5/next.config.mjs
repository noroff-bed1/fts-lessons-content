/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "static.cloud.noroff.dev", pathname: "/api/old-games/**" }],
  },
};

export default nextConfig;
