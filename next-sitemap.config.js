// module.exports = {
//     siteUrl: 'https://comeinmacbook.com/', 
//     generateRobotsTxt: true, 
//   };

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://comeinmacbook.com/',
  generateRobotsTxt: true,
}