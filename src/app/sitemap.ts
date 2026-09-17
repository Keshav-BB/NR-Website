import { MetadataRoute } from 'next';
import { resourcesData } from '@/content/resources-data';
import { careersData } from '@/content/careers-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.neurorecode.in';

  const staticRoutes = [
    '',
    '/method',
    '/who-we-serve',
    '/about',
    '/stories',
    '/science',
    '/resources',
    '/careers',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/refund-policy',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const resourceRoutes = resourcesData.map((article) => ({
    url: `${baseUrl}/resources/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const careerRoutes = careersData
    .filter((job) => job.status === 'open')
    .map((job) => ({
      url: `${baseUrl}/careers/${job.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

  return [...staticRoutes, ...resourceRoutes, ...careerRoutes];
}
