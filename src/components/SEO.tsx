import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  const { language } = useLanguage();
  
  const siteTitle = 'Royal Event Group';
  const defaultDescription = language === 'ru' 
    ? 'Royal Event Group — Организация корпоративных мероприятий в Египте, ОАЭ и России. 20+ лет опыта.'
    : 'Royal Event Group — Corporate event organization in Egypt, UAE, and Russia. 20+ years of experience.';
  
  const defaultKeywords = language === 'ru'
    ? 'организация мероприятий, корпоративы, Египет, ОАЭ, Россия, Royal Event Group, тимбилдинг, конференции'
    : 'event organization, corporate events, Egypt, UAE, Russia, Royal Event Group, team building, conferences';

  const seoTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      
      <html lang={language} />
    </Helmet>
  );
};

export default SEO;
