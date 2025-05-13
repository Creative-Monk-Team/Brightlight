/** @type {import('next').NextConfig} */
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
        has: [
          {
            type: "host",
            value: "brightlightimmigration.ca",
          },
        ],
        destination: "https://www.brightlightimmigration.ca/:path*",
        permanent: true, // 301 redirect
      },
      {
        source: '/humanitarian-compassionate',
        destination: '/humanitarian-compassionate',
        permanent: true, // Good for SEO (301 Redirect)
      },
      {
        source: '/canadian-experience-class',
        destination: '/canadian-experience-class',
        permanent: true, // Good for SEO (301 Redirect)
      },
      {
        source: '/canadian-experience-class',
        destination: '/canadian-experience-class',
        permanent: true, // Good for SEO (301 Redirect)
      },
      {
        source: '/pr-renewal',
        destination: '/pr-renewal',
        permanent: true, // Good for SEO (301 Redirect)
      },
      {
        source: '/category-based',
        destination: '/category-based',
        permanent: true, // Good for SEO (301 Redirect)
      },
      {
        source: '/blogs/top-10-reasons-for-refusal-on-your-canada-visitor-visa-application-in-2024-comprehensive-guide',
        destination: '/blogs/top-10-reasons-for-refusal-on-your-canada-visitor-visa-application-in-2024-comprehensive-guide',
        permanent: true, // Good for SEO (301 Redirect)
      },
    ];
  },
};

export default nextConfig;
