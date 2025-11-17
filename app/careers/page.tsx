import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function CareersPage() {
  return (
    <div className="careers-page">
      <Header />

      {/* Hero Section with Breadcrumb */}
      <section className="careers-hero">
        <div className="careers-hero-overlay"></div>
        <div className="careers-breadcrumb">
          <Link href="/">Home</Link>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Career</span>
        </div>
        <h1 className="careers-hero-title">Career</h1>
      </section>

      {/* Main Content */}
      <section className="careers-content">
        <div className="careers-container">
          <h1 className="careers-title">CAREER</h1>
          
          <h2 className="careers-tagline">If you can discover your passion, we can match it with an opportunity.</h2>
          
          <p className="careers-text">
            At AUROPOL, we are committed to creating one of the world's most people-friendly working 
            organisations, where the best and the brightest work together to create a responsive, respectful 
            and delightful work environment.
          </p>
          
          <p className="careers-text">
            We recognise the value of each and every individual, because we strongly believe that only great 
            people make great organisations. Right from our mentoring to our networking programs, you 
            meet people who help you discover your way in AUROPOL and to find your designated place in 
            the Auropol Team.
          </p>

          <div className="careers-image-container">
            <img 
              src="https://res.cloudinary.com/dgif730br/image/upload/v1763191434/image_370_lyuvme.svg" 
              alt="Laboratory Equipment" 
              className="careers-image"
            />
          </div>

          <h2 className="careers-openings-title">Openings</h2>
          
          <p className="careers-openings-text">
            We are pleased that you have taken the first step in finding out about a career at AUROPOL. We 
            offer you the opportunity of an exciting career in our Company.
          </p>

          <ul className="careers-positions-list">
            <li>Business Development ( International & Domestic)</li>
            <li>R & D</li>
            <li>Project Engineer</li>
            <li>Finance</li>
            <li>Business Operations</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}

