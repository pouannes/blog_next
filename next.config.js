// You can choose which headers to add to the list
// after learning more below.
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self' vitals.vercel-insights.com",
  },
];

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};
