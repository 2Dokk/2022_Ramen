/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const path = require("path");

module.exports = {
  nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async rewrites() {
    console.log("Rewrites called");
    return [
      {
        source: "/api/:slug*",
        destination: `https://maps.googleapis.com/maps/api/place/:slug*`,
        basePath: false,
      },
    ];
  },
};
