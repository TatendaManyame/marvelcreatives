import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = 'https://www.marvelcreatives.co';
  const currentDate = new Date().toISOString().split('T')[0];

  // Define all your pages here
  const pages = [
    { path: '', priority: '1.0', changefreq: 'weekly' },
    { path: '/services', priority: '0.9', changefreq: 'weekly' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly' },
    { path: '/services/branding', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/marketing', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/signage', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/printing', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/graphic-design', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/web-design', priority: '0.8', changefreq: 'weekly' },
  ];

  // Build the XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}