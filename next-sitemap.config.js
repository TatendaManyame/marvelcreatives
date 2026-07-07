/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.marvelcreatives.co',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin', '/dashboard', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.marvelcreatives.co/sitemap.xml',
    ],
  },
  // Add dynamic routes here
  additionalPaths: async (config) => {
    const result = [];
    
    // Your service pages - add all your service slugs
    const services = [
      'branding',
      'marketing', 
      'signage',
      'printing',
      'graphic-design',
      'web-design'
    ];
    
    services.forEach(service => {
      result.push({
        loc: `/services/${service}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });
    
    // If you have portfolio items, add them here
    // const portfolioItems = ['project1', 'project2'];
    // portfolioItems.forEach(item => {
    //   result.push({
    //     loc: `/portfolio/${item}`,
    //     changefreq: 'monthly',
    //     priority: 0.6,
    //   });
    // });
    
    return result;
  }
};