import { MetadataRoute } from 'next';

export const dynamic = 'force-dynamic';

function escapeXml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

export async function GET() {
    const domain = 'https://www.marvelcreatives.co';

    // Define your static pages here
    const staticPaths = [
        { loc: domain, priority: '1.0', changefreq: 'weekly' },
        { loc: `${domain}/services`, priority: '0.9', changefreq: 'weekly' },
        { loc: `${domain}/about`, priority: '0.8', changefreq: 'monthly' },
        { loc: `${domain}/contact`, priority: '0.8', changefreq: 'monthly' },
    ];

    // Define your service pages
    const services = [
        'branding', 'marketing', 'signage', 'printing', 'graphic-design', 'web-design'
    ];
    const serviceUrls = services.map(service => ({
        loc: `${domain}/services/${service}`,
        priority: '0.8',
        changefreq: 'weekly',
    }));

    const allUrls = [...staticPaths, ...serviceUrls];
    const currentDate = new Date().toISOString();

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}