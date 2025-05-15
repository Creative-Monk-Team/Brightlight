const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "brightlightimmigration.ca" }],
        destination: "https://www.brightlightimmigration.ca/:path*",
        permanent: true,
      }
      // Remove all self-referencing redirects
    ];
  },
};

export default nextConfig;
