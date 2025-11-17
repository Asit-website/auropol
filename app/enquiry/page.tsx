'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    title: 'Mr.',
    name: '',
    designation: '',
    companyName: '',
    address: '',
    email: '',
    phone: '',
    rubberChemicals: false,
    plasticAdditives: false,
    documentType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: target.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="enquiry-page">
      <Header />

      {/* Hero Section with Breadcrumb */}
      <section className="enquiry-hero">
        <div className="enquiry-hero-overlay"></div>
        <div className="enquiry-breadcrumb">
          <Link href="/">Home</Link>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Enquiry</span>
        </div>
        <h1 className="enquiry-hero-title">Enquiry</h1>
      </section>

      {/* Main Content */}
      <section className="enquiry-content">
        <div className="enquiry-container">
          <h2 className="enquiry-subtitle">ENQUIRY</h2>
          <h1 className="enquiry-title">AUROPOL INDIA PVT. LTD.</h1>
          
          <form className="enquiry-form" onSubmit={handleSubmit}>
            {/* Title Dropdown */}
            <div className="form-group">
              <select 
                name="title" 
                value={formData.title} 
                onChange={handleChange}
                className="form-input"
              >
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
              </select>
            </div>

            {/* Name */}
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            {/* Designation */}
            <div className="form-group">
              <input
                type="text"
                name="designation"
                placeholder="Designation"
                value={formData.designation}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            {/* Company Name */}
            <div className="form-group">
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            {/* Address */}
            <div className="form-group">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="E-mail Id"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            {/* Products */}
            <div className="form-group products-group">
              <label className="products-label">Products:</label>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="rubberChemicals"
                    checked={formData.rubberChemicals}
                    onChange={handleChange}
                  />
                  <span>Rubber Chemicals</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="plasticAdditives"
                    checked={formData.plasticAdditives}
                    onChange={handleChange}
                  />
                  <span>Plastic Additives</span>
                </label>
              </div>
            </div>

            {/* Company Name Section */}
            <div className="form-section-title">Company Name.</div>
            <div className="form-section-subtitle">Select the following choices:</div>

            {/* Document Type Radio Buttons */}
            <div className="form-group radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="documentType"
                  value="Technical Data Sheet"
                  checked={formData.documentType === 'Technical Data Sheet'}
                  onChange={handleChange}
                />
                <span>Technical Data Sheet</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="documentType"
                  value="MSDS"
                  checked={formData.documentType === 'MSDS'}
                  onChange={handleChange}
                />
                <span>MSDS</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="documentType"
                  value="Other"
                  checked={formData.documentType === 'Other'}
                  onChange={handleChange}
                />
                <span>Other</span>
              </label>
            </div>

            {/* Message */}
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows={6}
              />
            </div>

            {/* reCAPTCHA Placeholder */}
            <div className="form-group recaptcha-placeholder">
              <div className="recaptcha-box">
                <input type="checkbox" id="recaptcha" />
                <label htmlFor="recaptcha">I'm not a robot</label>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-submit-enquiry">
              SUBMIT
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

