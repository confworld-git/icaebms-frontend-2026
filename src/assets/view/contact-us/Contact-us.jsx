import React, { useState, useEffect } from "react";
import AOS from "aos";
import Hero from "../commonhero/common-hero";
import "aos/dist/aos.css";
import Contactform from "./Contactform";
import Enquiry from "./Enquiry";
// import { Helmet } from "react-helmet";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contactus = () => {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
    AOS.refresh();
  }, []);

  return (
    <section>
      <Hero
        title="Contact Us"
        breadcrumbs={[{ label: "Home", link: "#" }]}
        backgroundImage="/images/commonheroimages/commonhero18.webp"
      />
      
      {/* <Helmet>
        <title>
          Contact ICAEBMS 2026 – International Conference Contact
        </title>
        <meta
          name="description"
          content="Get in touch with CERADA, the international conference organizers of ICAEBMS 2026. Contact us for sponsorship, partnership, paper submissions, or queries."
        />
        <meta
          name="keywords"
          content="Contact ICAEBMS 2026, international conference organisers, conference 2026, research conference enquiries"
        />
        <link 
          rel="canonical" 
          href="https://icaebms.com/contact-us" 
        />
        <meta name="robots" content="index, follow" />
      </Helmet> */}

      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 px-4">
        
        {/* Hero Section */}
        <div className="w-full mb-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div data-aos="fade-right" className="space-y-6">
              <div className="inline-block">
                
              </div>
              
             
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
              Partner with CERADA Today
            </h1>
              
              <div className="space-y-4 text-gray-700 text-lg">
                <h2 className="text-2xl font-bold text-orange-500 mt-8">
                  Explore Opportunities
                </h2>
                <p className="leading-relaxed">
                  Discover how CERADA sponsorship can benefit your organization. We look forward to partnering with you and creating a memorable and impactful experience at the CERADA International Conference.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
                  <p className="font-semibold text-blue-900 mb-2">Contact Us:</p>
                  <p className="text-gray-700">
                    Reach out to our team to discuss customized sponsorship and exhibition packages at{" "}
                    <a
                      href="mailto:collaboration@confworld.org"
                      className="text-blue-600 font-semibold hover:text-blue-800 underline transition"
                    >
                      collaboration@confworld.org
                    </a>
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => setPopup(true)}
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                aria-label="Ask Enquiries"
              >
                <Mail className="w-5 h-5" />
                Ask Enquiries
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Right Image */}
            <div data-aos="fade-left" className="relative">
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/registration-instructions/contact.webp"
                  alt="Connect with our international conference team"
                  title="Contact our international conference organizers"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="w-full mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Academic Partnership Card */}
            <div data-aos="zoom-in" data-aos-delay="100" className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-600">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/registration-instructions/academic.webp"
                  alt="Academic partnership and sponsorship"
                  title="Reach out for partnership inquiries"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-2xl font-bold text-white">
                    Academic Partnership
                  </h3>
                  <p className="text-blue-100 text-sm">Sponsorship & Promotion</p>
                </div>
              </div>
              
              <div className="p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Contact Person</p>
                    <p className="text-lg font-bold text-gray-900">Ms. Suhana S</p>
                    <p className="text-gray-700 mt-1">+91 8610656424</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg mt-1">
                    <Mail className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email Address</p>
                    <a
                      href="mailto:collaboration@confworld.org"
                      className="text-blue-600 hover:text-blue-800 font-semibold underline transition"
                    >
                      collaboration@confworld.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ICAEBMS Queries Card */}
            <div data-aos="zoom-in" data-aos-delay="200" className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-500">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/registration-instructions/support.webp"
                  alt="Conference queries and information"
                  title="Find contact details for conference queries"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-2xl font-bold text-white">
                    ICAEBMS Queries
                  </h3>
                  <p className="text-orange-100 text-sm">General Information</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center md:justify-between">
                <div className="p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg mt-1">
                    <Phone className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Contact Person</p>
                    <p className="text-lg font-bold text-gray-900">Ms. Aishwarya S</p>
                    <p className="text-gray-700 mt-1">+91 8072381719</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email Address</p>
                    <a
                      href="mailto:info@icaebms.com"
                      className="text-orange-600 hover:text-orange-800 font-semibold underline transition"
                    >
                      info@icaebms.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg mt-1">
                    <Phone className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Contact Person</p>
                    <p className="text-lg font-bold text-gray-900">Ms. Malathy G</p>
                    <p className="text-gray-700 mt-1">+91 6383055014</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email Address</p>
                    <a
                      href="mailto:info@icaebms.com"
                      className="text-orange-600 hover:text-orange-800 font-semibold underline transition"
                    >
                      info@icaebms.com
                    </a>
                  </div>
                </div>
              </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-5xl mx-auto" data-aos="fade-up">
          <Contactform />
        </div>

        {/* Enquiry Popup */}
        {popup && <Enquiry setPopup={setPopup} />}
      </section>
    </section>
  );
};

export default Contactus;