import React, { useRef, useState } from "react";
import axios from "axios";
import { toaster } from "evergreen-ui";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Contactform = () => {
  const ContactRef = useRef();
  const [MobileNumber, setMobileNumber] = useState(null);

  const validateForm = (data) => {
    for (const key in data) {
      if (!data[key] || String(data[key]).trim() === "") {
        toaster.warning(`Please fill out the ${key.replace(/_/g, " ")} field.`);
        return false;
      }
    }
    return true;
  };

  const HandleContactData = async (e) => {
    e.preventDefault();
    const formData = new FormData(ContactRef.current);
    const ContactData = Object.fromEntries(formData.entries());
    ContactData.Contact_Number = MobileNumber;

    const isValid = validateForm(ContactData);
    if (!isValid) {
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/contact`,
        ContactData
      );
      if (response) {
        ContactRef.current.reset();
        setMobileNumber("");
        toaster.success(response.data.message);
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      toaster.danger("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center py-8 px-8 sm:px-8  rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-orange-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-xl"></div>
      </div>

      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-3xl p-8 md:p-12 border-8 border-orange-300 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 text-gray-900">
          Have a Question? <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Contact Us!</span>
        </h2>
        <p className="text-center text-gray-600 mb-8">Fill out the form and we'll get back to you within 24 hours</p>
        
        <form
          ref={ContactRef}
          onSubmit={HandleContactData}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="First_Name"
              placeholder="First Name"
              required
              className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-lg transition-all duration-300 hover:border-blue-400"
            />
            <input
              type="text"
              name="Last_Name"
              placeholder="Last Name"
              required
              className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-lg transition-all duration-300 hover:border-blue-400"
            />
          </div>
          
          <input
            type="email"
            name="Email"
            placeholder="Your Email Address"
            required
            className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-lg transition-all duration-300 hover:border-blue-400"
          />
          
          <div className="phone-input-container">
            <PhoneInput
              onChange={setMobileNumber}
              value={MobileNumber}
              defaultCountry="IN"
              id="Mobile_Number"
              placeholder="WhatsApp / Viber Number (with country code)"
              className="w-full custom-phone-input"
            />
          </div>
          
          <textarea
            rows={5}
            name="Message"
            placeholder="How can we help you today?"
            required
            className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-lg resize-y transition-all duration-300 hover:border-blue-400"
          ></textarea>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-bold text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
          >
            Send Message →
          </button>
        </form>
      </div>

      <style jsx>{`
        .phone-input-container :global(.PhoneInput) {
          width: 100%;
        }

        .phone-input-container :global(.PhoneInputInput) {
          width: 100%;
          padding: 1rem;
          border: 2px solid #d1d5db;
          border-radius: 0.75rem;
          font-size: 1.125rem;
          transition: all 0.3s;
        }

        .phone-input-container :global(.PhoneInputInput:hover) {
          border-color: #60a5fa;
        }

        .phone-input-container :global(.PhoneInputInput:focus) {
          outline: none;
          border-color: #2563eb;
          ring: 2px;
          ring-color: #2563eb;
        }
      `}</style>
    </div>
  );
};

export default Contactform;