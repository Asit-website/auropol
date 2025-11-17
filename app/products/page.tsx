import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const products = [
  { slug: 'single-component-bonding-agent', name: 'Single Component Bonding Agent', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763191434/image_370_lyuvme.svg' },
  { slug: 'two-component-bonding-agent', name: 'Two Component Bonding Agent', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763193971/unsplash_6q5QG8iIgRo_amumf4.svg' },
  { slug: 'peroxide-co-agent', name: 'Peroxide Co Agent', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763193938/image_312_esb4zb.svg' },
  { slug: 'antisticking-agent', name: 'Antisticking Agent', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763191434/image_370_lyuvme.svg' },
  { slug: 'tackifying-agent', name: 'Tackifying Agent', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763193971/unsplash_6q5QG8iIgRo_amumf4.svg' },
  { slug: 'physical-modifiers', name: 'Physical Peptizer', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763193938/image_312_esb4zb.svg' },
  { slug: 'homogenizing-agent', name: 'Homogenizing Agent', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763191434/image_370_lyuvme.svg' },
  { slug: 'anti-abrasion', name: 'Anti-Abrasion Additive', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763193971/unsplash_6q5QG8iIgRo_amumf4.svg' },
  { slug: 'flame', name: 'Flame Retardants', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763193938/image_312_esb4zb.svg' },
  { slug: 'dispersing-processing-additives', name: 'Dispersing & Processing Additives', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763191434/image_370_lyuvme.svg' },
  { slug: 'desiccant-agent-silica', name: 'Desiccant Agent for Silica', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763193971/unsplash_6q5QG8iIgRo_amumf4.svg' },
  { slug: 'desiccant-rubber', name: 'Desiccant for Rubber', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763193938/image_312_esb4zb.svg' },
  { slug: 'antistatic-agent', name: 'Antistatic Agent', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763191434/image_370_lyuvme.svg' },
  { slug: 'smoke-suppressant', name: 'Smoke Suppressant', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763193971/unsplash_6q5QG8iIgRo_amumf4.svg' }
];

export default function ProductsPage() {
  return (
    <div className="products-page">
      <Header />

      {/* Hero Banner Section */}
      <section className="product-hero">
        <div className="product-hero-overlay"></div>
      </section>

      {/* Main Content Section */}
      <section className="product-content-section">
        <div className="product-intro">
          <nav className="breadcrumb">
            <a href="/">Home</a>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Products</span>
          </nav>
          <h1 className="product-main-title">Specialty Rubber Chemicals</h1>
          <p className="product-intro-text">
            Auropol's specialty rubber chemicals enhance performance and processability in applications such as tires, belts, hoses, footwear, and industrial rubber products. Our portfolio includes bonding agents, peroxide co-agents, flame retardants, antitack agents, tackifiers, and processing aids designed to deliver durability, adhesion, and efficiency
          </p>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {products.map((product) => (
            <Link href={`/products/${product.slug}`} key={product.slug} className="product-card-item">
              <div className="product-card-image">
                <img src={product.image} alt={product.name} />
                <div className="product-card-overlay"></div>
              </div>
              <div className="product-card-text">
                <h3>{product.name}</h3>
                <button className="product-card-arrow">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

