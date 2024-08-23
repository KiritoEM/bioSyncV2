/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  rules: {
    "react-hooks/rules-of-hooks": "off",
    "jsx-a11y/alt-text": "off",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
