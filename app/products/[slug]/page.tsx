'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Sample product data - in a real app, this would come from a database or API
const productsData = {
  'single-component-bonding-agent': {
    title: 'Single Component Bonding Agent',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763191434/image_370_lyuvme.svg',
    description: 'Aurobond 825 provides excellent improvement of adhesion value between fabric and coated steel cord (brass coated) with rubber compound against unprotected thin component systems (Monofilament and Cordboad).',
    specification: 'Auroband-833 provides excellent improvement of adhesion value between fabric and rubber material with rubber compound against unprotected thin component systems (Monofilament and Cordboad).',
    advantages: [
      'Disperses easily in rubber compound',
      'Helps to effectively avoid dust during mixing',
      'Reduces dust hazards',
      'Improves green tack of the compound',
      'Better adhesion properties with rubber compound',
      'Better adhesion properties with compound'
    ]
  },
  'two-component-bonding-agent': {
    title: 'Two Component Bonding Agent',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763193971/unsplash_6q5QG8iIgRo_amumf4.svg',
    description: 'Advanced two-component bonding system for enhanced rubber-to-metal adhesion.',
    specification: 'Provides superior bonding performance in demanding applications.',
    advantages: [
      'Superior bonding strength',
      'Excellent heat resistance',
      'Long-lasting durability',
      'Easy application process'
    ]
  },
  'peroxide-co-agent': {
    title: 'Peroxide Co Agent',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763193938/image_312_esb4zb.svg',
    description: 'Specialized peroxide co-agent for improved crosslinking and mechanical properties.',
    specification: 'Enhances peroxide cure systems in rubber compounds.',
    advantages: [
      'Improved mechanical properties',
      'Enhanced crosslink density',
      'Better heat aging resistance',
      'Optimized processing characteristics'
    ]
  },
  'tackifying-agent': {
    title: 'Tackifying Agent',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763191434/image_370_lyuvme.svg',
    description: 'High-performance tackifying agent for improved green strength and tack.',
    specification: 'Provides excellent tack and green strength in uncured rubber compounds.',
    advantages: [
      'Excellent green strength',
      'Improved building tack',
      'Better shape retention',
      'Enhanced processability'
    ]
  },
  'physical-modifiers': {
    title: 'Physical Modifiers',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763193971/unsplash_6q5QG8iIgRo_amumf4.svg',
    description: 'Advanced modifiers for optimizing physical properties of rubber compounds.',
    specification: 'Tailors physical characteristics to meet specific application requirements.',
    advantages: [
      'Customizable properties',
      'Improved flexibility',
      'Enhanced durability',
      'Better performance characteristics'
    ]
  },
  'antisticking-agent': {
    title: 'Antisticking Agent',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763193938/image_312_esb4zb.svg',
    description: 'Effective anti-tack agent to prevent sticking during storage and processing.',
    specification: 'Prevents self-adhesion of uncured rubber surfaces.',
    advantages: [
      'Prevents surface tack',
      'Easy application',
      'No impact on curing',
      'Improved handling'
    ]
  },
  'homogenizing-agent': {
    title: 'Homogenizing Agent',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763191434/image_370_lyuvme.svg',
    description: 'Ensures uniform dispersion and mixing of rubber compound ingredients.',
    specification: 'Promotes homogeneous distribution of additives in rubber matrix.',
    advantages: [
      'Uniform dispersion',
      'Reduced mixing time',
      'Consistent quality',
      'Better compound homogeneity'
    ]
  },
  'anti-abrasion': {
    title: 'Anti-Abrasion',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763193971/unsplash_6q5QG8iIgRo_amumf4.svg',
    description: 'Specialty additive for enhanced abrasion resistance in rubber products.',
    specification: 'Significantly improves wear resistance and service life.',
    advantages: [
      'Superior abrasion resistance',
      'Extended product life',
      'Reduced wear',
      'Improved durability'
    ]
  },
  'flame': {
    title: 'Flame',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763193938/image_312_esb4zb.svg',
    description: 'Flame retardant additive for improved fire safety in rubber applications.',
    specification: 'Provides effective flame retardancy while maintaining rubber properties.',
    advantages: [
      'Excellent flame retardancy',
      'Maintains rubber properties',
      'Low smoke emission',
      'Meets safety standards'
    ]
  },
  'dispersing-processing-additives': {
    title: 'Dispersing & Processing Additives',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763191434/image_370_lyuvme.svg',
    description: 'Advanced additives for improved dispersion and processing efficiency.',
    specification: 'Enhances mixing and processing characteristics of rubber compounds.',
    advantages: [
      'Better dispersion quality',
      'Reduced processing time',
      'Improved mixing efficiency',
      'Enhanced compound quality'
    ]
  },
  'desiccant-agent-silica': {
    title: 'Desiccant Agent for Silica',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763193971/unsplash_6q5QG8iIgRo_amumf4.svg',
    description: 'Specialized desiccant agent for moisture control in silica-filled compounds.',
    specification: 'Controls moisture content in silica-based rubber formulations.',
    advantages: [
      'Effective moisture control',
      'Prevents premature vulcanization',
      'Improves storage stability',
      'Better processing characteristics'
    ]
  },
  'desiccant-rubber': {
    title: 'Desiccant for Rubber',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763193938/image_312_esb4zb.svg',
    description: 'General purpose desiccant for rubber compounds.',
    specification: 'Removes moisture from rubber compounds during processing.',
    advantages: [
      'Prevents moisture-related defects',
      'Improves compound stability',
      'Enhanced processing safety',
      'Better final product quality'
    ]
  },
  'antistatic-agent': {
    title: 'Antistatic Agent',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763191434/image_370_lyuvme.svg',
    description: 'Antistatic additive for reducing static charge buildup.',
    specification: 'Provides static dissipation in rubber products.',
    advantages: [
      'Reduces static buildup',
      'Improves safety',
      'Better handling properties',
      'Enhanced product performance'
    ]
  },
  'smoke-suppressant': {
    title: 'Smoke Suppressant',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763193971/unsplash_6q5QG8iIgRo_amumf4.svg',
    description: 'Smoke suppressant additive for reduced smoke emission.',
    specification: 'Minimizes smoke generation during combustion.',
    advantages: [
      'Low smoke emission',
      'Improved fire safety',
      'Meets regulatory standards',
      'Better environmental performance'
    ]
  }
};

const allProducts = [
  { slug: 'single-component-bonding-agent', name: 'Single Component Bonding Agent' },
  { slug: 'two-component-bonding-agent', name: 'Two Component Bonding Agent' },
  { slug: 'peroxide-co-agent', name: 'Peroxide Co Agent' },
  { slug: 'antisticking-agent', name: 'Antisticking Agent' },
  { slug: 'tackifying-agent', name: 'Tackifying Agent' },
  { slug: 'physical-modifiers', name: 'Physical Peptizer' },
  { slug: 'homogenizing-agent', name: 'Homogenizing Agent' },
  { slug: 'anti-abrasion', name: 'Anti-Abrasion Additive' },
  { slug: 'flame', name: 'Flame Retardants' },
  { slug: 'dispersing-processing-additives', name: 'Dispersing & Processing Additives' },
  { slug: 'desiccant-agent-silica', name: 'Desiccant Agent for Silica' },
  { slug: 'desiccant-rubber', name: 'Desiccant for Rubber' },
  { slug: 'antistatic-agent', name: 'Antistatic Agent' },
  { slug: 'smoke-suppressant', name: 'Smoke Suppressant' }
];

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = productsData[slug as keyof typeof productsData];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail-page">
      <Header />

      {/* Hero Section with Breadcrumb */}
      <section className="product-detail-hero">
        <div className="product-detail-hero-overlay"></div>
        <div className="product-detail-breadcrumb">
          <Link href="/">Home</Link>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <Link style={{color:"white"}} href="/products">Products</Link>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Specialty Rubber Chemicals</span>
        </div>
        <h1 className="product-detail-hero-title">{product.title}</h1>
      </section>

      {/* Main Content */}
      <section className="product-detail-content">
        <div className="product-detail-layout">
          {/* Left Side - Product Image and Details */}
          <div className="product-detail-left">
            <div className="product-detail-image-container">
              <img src={product.image} alt={product.title} />
            </div>

            <div className="product-detail-description">
              <p>{product.description}</p>
            </div>

            <div className="product-detail-section">
              <h2 className="product-section-heading">Specification</h2>
              <p className="product-section-content">{product.specification}</p>
            </div>

            <div className="product-detail-section">
              <h2 className="product-section-heading">Advantages</h2>
              <ul className="product-advantages">
                {product.advantages.map((advantage, index) => (
                  <li key={index}>{advantage}</li>
                ))}
              </ul>
            </div>

            <div className="product-two-column-section">
              <div className="product-detail-section product-brochure-download">
                <h2 className="product-section-heading">Brochure</h2>
                <div className="brochure-download-card">
                  <img src="https://res.cloudinary.com/dgif730br/image/upload/v1763212838/rubber-brochure_1_ouijmg.svg" alt="Brochure" />
                  <div className="brochure-download-content">
                    <h3>High Quality Solutions for Rubber Manufacturing</h3>
                    <button className="btn-download">
                      Download Brochure
                      <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.29425e-05 7.91412L11.5861 7.91412L7.08606 12.4141L8.50006 13.8281L15.4141 6.91412L8.50006 0.000125885L7.08606 1.41413L11.5861 5.91412L6.29425e-05 5.91412V7.91412Z" fill="#203C56"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="product-detail-section product-query-box">
                <h2 className="product-query-heading">Have a Query?</h2>
                <h3 className="product-query-text">Get the perfect formulation for your rubber application</h3>
                <button className="btn-query">
                  Enquire Now
                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.29425e-05 7.91412L11.5861 7.91412L7.08606 12.4141L8.50006 13.8281L15.4141 6.91412L8.50006 0.000125885L7.08606 1.41413L11.5861 5.91412L6.29425e-05 5.91412V7.91412Z" fill="#105B4E"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Product List */}
          <div className="product-detail-right">
            <div className="product-list-sidebar">
              <h2 className="product-list-title">Product List</h2>
              <ul className="product-list-items">
                {allProducts.map((item) => (
                  <li key={item.slug} className={slug === item.slug ? 'active' : ''}>
                    <Link href={`/products/${item.slug}`}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar Query Box */}
            <div className="sidebar-query-box">
              <h3 className="sidebar-query-heading">Have a Query?</h3>
              <p className="sidebar-query-text">We're here to help</p>
              <button className="btn-sidebar-query">
                Enquire Now
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.29425e-05 7.91412L11.5861 7.91412L7.08606 12.4141L8.50006 13.8281L15.4141 6.91412L8.50006 0.000125885L7.08606 1.41413L11.5861 5.91412L6.29425e-05 5.91412V7.91412Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

