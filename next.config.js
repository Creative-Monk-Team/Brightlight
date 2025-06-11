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
      {
        source: "/ways-to-prove-you-will-leave-canada-at-the-end-of-your-temporary-stay",
        destination: "https://www.brightlightimmigration.ca/blogs/8-ways-to-prove-you-will-leave-canada-at-the-end-of-your-temporary-stay-visitor-visa-study-permit-and-work-permit",
        permanent: true,
      },
      {
        source: "/about",
        destination: "https://www.brightlightimmigration.ca/about-us",
        permanent: true,
      },
      {
        source: "/6-options-after-your-pgwp-expires",
        destination: "https://www.brightlightimmigration.ca/blogs/6-options-after-your-pgwp-expires-staying-in-canada",
        permanent: true,
      },
      {
        source: "/outside-cananda",
        destination: "https://www.brightlightimmigration.ca/outside-canada",
        permanent: true,
      },
      {
        source: "/business-investor-immigration",
        destination: "https://www.brightlightimmigration.ca/business-visitor-visa",
        permanent: true,
      },
      {
        source: "/study-in-canada",
        destination: "https://www.brightlightimmigration.ca/inside-canada",
        permanent: true,
      },
      {
        source: "/ways-to-prove-you-will-leave-canada-at-the-end-of-your-temporary-stay",
        destination: "https://www.brightlightimmigration.ca/blogs/8-ways-to-prove-you-will-leave-canada-at-the-end-of-your-temporary-stay-visitor-visa-study-permit-and-work-permit",
        permanent: true,
      },
      {
        source: "/business-investor-immigration",
        destination: "https://www.brightlightimmigration.ca/business-visitor-visa",
        permanent: true,
      },
      {
        source: "/agricultureand-agri-food-occu",
        destination: "https://www.brightlightimmigration.ca/agriculture-agri-food-occupation",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "https://www.brightlightimmigration.ca/contact-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;