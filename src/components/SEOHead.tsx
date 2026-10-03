import { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  schemaType?: 'LocalBusiness' | 'FAQPage' | 'AboutPage' | 'ContactPage';
  faqData?: Array<{ question: string; answer: string }>;
}

export default function SEOHead({
  title,
  description,
  path,
  faqData,
}: SEOHeadProps) {
  useEffect(() => {
    // Update Document Title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', description);
      document.head.appendChild(metaDesc);
    }

    // Update OpenGraph Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    const currentUrl = typeof window !== 'undefined' ? `${window.location.origin}${path}` : `https://arclimatizacao.com.br${path}`;
    if (canonical) {
      canonical.setAttribute('href', currentUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', currentUrl);
      document.head.appendChild(canonical);
    }

    // Inject Schema.org LocalBusiness JSON-LD
    const existingScript = document.getElementById('jsonld-schema');
    if (existingScript) existingScript.remove();

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      image: 'https://arclimatizacao.com.br/logo.png',
      telephone: siteConfig.phoneE164,
      url: 'https://arclimatizacao.com.br',
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${siteConfig.street}, ${siteConfig.number}`,
        addressLocality: siteConfig.neighborhood,
        addressRegion: siteConfig.state,
        postalCode: siteConfig.postalCode,
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -22.8804,
        longitude: -43.3289,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '08:00',
          closes: '13:00',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: siteConfig.googleRating.toString(),
        reviewCount: siteConfig.googleReviewCount.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      hasMap: siteConfig.googleMapsUrl,
    };

    const schemas: object[] = [localBusinessSchema];

    // Optional FAQ schema if provided
    if (faqData && faqData.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      });
    }

    const script = document.createElement('script');
    script.id = 'jsonld-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('jsonld-schema');
      if (el) el.remove();
    };
  }, [title, description, path, faqData]);

  return null;
}
