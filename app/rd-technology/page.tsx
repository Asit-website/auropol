import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function RDTechnologyPage() {
  return (
    <div className="rd-technology-page">
      <Header />

      {/* Hero Section with Breadcrumb */}
      <section className="rd-technology-hero">
        <div className="rd-technology-hero-overlay"></div>
        <div className="rd-technology-breadcrumb">
          <Link href="/">Home</Link>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>R & D and Technology</span>
        </div>
        <h1 className="rd-technology-hero-title">R & D and Technology</h1>
      </section>

      {/* Main Content */}
      <section className="rd-technology-content">
        <div className="rd-technology-container">
          <h1 className="rd-technology-title">
            <span className="title-teal">R & D AND</span>
            <br />
            <span className="title-black">INNOVATION</span>
          </h1>
          
          <p className="rd-technology-text">
            AUROPOL's R&D is not just an initiative, it is a norm. Year after year since its incorporation, the 
            company has emphasized on R&D for new product development & innovations for their valued 
            customers.The results are tremendous, AUROPOL's R&D team has many advancements and 
            innovations to its credit.
          </p>

          <div className="rd-technology-image-container">
            <img 
              src="https://res.cloudinary.com/dgif730br/image/upload/v1763191434/image_370_lyuvme.svg" 
              alt="Auropol Building" 
              className="rd-technology-image"
            />
          </div>

          <h2 className="rd-technology-section-title">
            <span className="title-teal">TECHNOLOGY</span>
            <br />
            <span className="title-black">LICENSING</span>
          </h2>
          
          <p className="rd-technology-section-text">
            We have many technologies that are available for licensing.
          </p>

          {/* Certifications */}
          <div className="rd-technology-certifications">
            <img src="https://res.cloudinary.com/dgif730br/image/upload/v1763189820/image_328_cmfdmq.png" alt="ISO Certification" />
            <img src="https://res.cloudinary.com/dgif730br/image/upload/v1763189820/image_329_cxr9t1.png" alt="Certification 2" />
            <img src="https://res.cloudinary.com/dgif730br/image/upload/v1763189820/image_329_cxr9t1.png" alt="Certification 3" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

