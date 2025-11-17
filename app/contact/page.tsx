import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <Header />

      {/* Hero Section with Breadcrumb */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-breadcrumb">
          <Link href="/">Home</Link>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Contact Us</span>
        </div>
        <h1 className="contact-hero-title">Contact Us</h1>
      </section>

      {/* Main Content */}
      <section className="contact-content">
        <div className="contact-container">
          <h2 className="contact-subtitle">CONTACT US</h2>
          <h1 className="contact-title">AUROPOL INDIA PVT. LTD.</h1>
          
          <div className="contact-info">
            <p className="contact-address">
              67, Humayun Kabir Sarani<br />
              Block-G, New Alipore<br />
              Kolkata - 700 053, India
            </p>
            
            <p className="contact-detail">
              <span className="contact-label">Phone:</span> +91 90077 43206 / +91 33 3550 3614
            </p>
            
            <p className="contact-detail">
              <span className="contact-label">Email:</span> <a href="mailto:marketing@auropolindia.com">marketing@auropolindia.com</a>
            </p>
          </div>

          <h2 className="contact-map-title">LOCATE US</h2>
          
          <div className="contact-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.0000000000005!2d88.32999999999999!3d22.51999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027139a8000001%3A0x1!2s67%2C%20Humayun%20Kabir%20Sarani%2C%20Block%20A%2C%20Uttar%20Raypur%2C%20New%20Alipore%2C%20Kolkata%2C%20West%20Bengal%20700053!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

