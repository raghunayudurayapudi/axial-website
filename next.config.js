module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    reactStrictMode: true,
    images: {
      domains: ["d19o6pfnvd4rhh.cloudfront.net"],
    },
    async rewrites() {
      return [
        {
          source: "/",
          destination: "/home",
        },
      ];
    },
    async redirects() {
      return [
        {
          source: "/careers",
          destination: "https://angel.co/company/wholemark-1/jobs",
          permanent: false,
        },
        {
          source: "/pricing",
          destination: "/home",
          permanent: false,
        },
        {
          source: "/news",
          destination: "/home",
          permanent: false,
        },
      ];
    },
    compiler: {
      // ssr and displayName are configured by default
      styledComponents: true,
    },
    experimental: {
      images: {
        allowFutureImage: true,
        unoptimized: true,
      },
    },
    swcMinify: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]s?$/,
        use: ["@svgr/webpack"],
      });

      return config;
    },
    // i18n: {
    //   // These are all the locales you want to support in
    //   // your application
    //   locales: ['en-US', 'en-IN'],
    //   // This is the default locale you want to be used when visiting
    //   // a non-locale prefixed path e.g. `/hello`
    //   defaultLocale: 'en-IN',
    //   // This is a list of locale domains and the default locale they
    //   // should handle (these are only required when setting up domain routing)
    //   // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    //   domains: [
    //     {
    //       domain: 'https://www.wholemark.in',
    //       defaultLocale: 'en-IN',
    //     },
    //     {
    //       domain: 'https://www.wholemark.com',
    //       defaultLocale: 'en-US',
    //     },
    //   ],
    // },
  };
  return nextConfig;
};
