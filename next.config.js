/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/auth",
        destination: "/auth/login",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
