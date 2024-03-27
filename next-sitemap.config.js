/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://health-center-next.vercel.app',
  generateRobotsTxt: true, // (optional)
  // ...other options
};
