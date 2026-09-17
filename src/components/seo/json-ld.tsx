import React from 'react';
import { siteConfig } from '@/lib/cms/site-config';

interface OrganizationJsonLdProps {
  url?: string;
}

export function OrganizationJsonLd({ url = 'https://www.neurorecode.in' }: OrganizationJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.company.name,
    legalName: siteConfig.company.legalName,
    url: url,
    logo: `${url}/logo.svg`,
    email: siteConfig.company.supportEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '375/1, Main Road, Radhapuram, Tandarampattu, Chengam',
      addressLocality: 'Tiruvannamalai',
      addressRegion: 'Tamil Nadu',
      postalCode: '606707',
      addressCountry: 'IN',
    },
    sameAs: ['https://www.linkedin.com/company/neurorecode', 'https://learn.neurorecode.in'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebSiteJsonLdProps {
  url?: string;
}

export function WebSiteJsonLd({ url = 'https://www.neurorecode.in' }: WebSiteJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.company.name,
    url: url,
    description:
      'A science-based 3-step nervous system protocol built on neuroplasticity, NLP, and clinical hypnotherapy. Designed to resolve anxiety at the root.',
    inLanguage: ['en-IN', 'ta-IN'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface JobPostingJsonLdProps {
  title: string;
  description: string;
  datePosted: string;
  validThrough?: string;
  employmentType: string;
  hiringOrganization: string;
  jobLocation: string;
}

export function JobPostingJsonLd({
  title,
  description,
  datePosted,
  validThrough,
  employmentType,
  hiringOrganization,
  jobLocation,
}: JobPostingJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title,
    description,
    datePosted,
    validThrough,
    employmentType,
    hiringOrganization: {
      '@type': 'Organization',
      name: hiringOrganization,
      sameAs: 'https://www.neurorecode.in',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: jobLocation,
        addressCountry: 'IN',
      },
    },
    applicantLocationRequirements: {
      '@type': 'Country',
      name: 'India',
    },
    jobLocationType: 'TELECOMMUTE',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
