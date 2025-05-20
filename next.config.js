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
      // Existing redirect: non-www to www
      {
        source: "/:path*",
        has: [{ type: "host", value: "brightlightimmigration.ca" }],
        destination: "https://www.brightlightimmigration.ca/:path*",
        permanent: true,
      },
      // Redirect /ParentsGrandparents to /parents-grandparents
      {
        source: "/ParentsGrandparents",
        destination: "https://www.brightlightimmigration.ca/parents-grandparents",
        permanent: true,
      },
      // Redirect /home/ to homepage
      {
        source: "/home",
        destination: "https://www.brightlightimmigration.ca/",
        permanent: true,
      },
      // Redirect /dash/panel/overwrite to homepage
      {
        source: "/dash/panel/overwrite",
        destination: "https://www.brightlightimmigration.ca/",
        permanent: false, // Temporary redirect (302)
      },
      // Redirect /auth/panel/dash/bright to homepage
      {
        source: "/auth/panel/dash/bright",
        destination: "https://www.brightlightimmigration.ca/",
        permanent: false, // Temporary redirect (302)
      },
    ];
  },
};

export default nextConfig;