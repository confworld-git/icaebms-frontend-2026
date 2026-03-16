import React, { useState, useEffect } from 'react';
import { Mail, Phone, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import Hero from "../commonhero/common-hero";





const PaymentCard = ({ title, image, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="animate-float relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-4 hover:rotate-1">
        {/* Animated gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-rotate"></div>
        <div className="absolute inset-[3px] bg-white rounded-3xl z-10"></div>
        
        {/* Content */}
        <div className="relative z-20">
          {/* Image section with multiple overlays */}
          <div className="h-64 overflow-hidden relative">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transform transition-all duration-1000 group-hover:scale-125 group-hover:rotate-3"
            />
            
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-purple-600/40 to-orange-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>
            
            {/* Sparkle icon */}
            <div className="absolute top-4 right-4 transform transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
              <Sparkles className="w-8 h-8 text-white animate-pulse" />
            </div>
            
            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
          
          {/* Card content */}
          <div className="p-6 relative">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold bg-blue-600  bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                {title}
              </h3>
              {/* <div className="transform transition-all duration-500 translate-x-0 group-hover:translate-x-2">
                <ArrowRight className={`w-6 h-6 transition-all duration-500 ${isHovered ? 'text-orange-500 scale-125' : 'text-gray-400'}`} />
              </div> */}
            </div>
            
            {/* Animated checkmark */}
            <div className="mt-4 flex items-center gap-2 text-green-500 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
              <CheckCircle className="w-5 h-5 animate-bounce-in" />
              <span className="text-sm font-semibold">Secure & Fast</span>
            </div>
          </div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
        </div>
      </div>
    </div>
  );
};

const BankDetailsCard = ({ bankDetails, bankImage }) => {
  return (
    <div className="relative animate-scale-in">
      {/* Glowing effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-3xl blur-2xl opacity-30 animate-pulse-slow"></div>
      
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.02]">
        {/* Image with parallax effect */}
        <div className="h-80 overflow-hidden relative group">
          <img 
            src={bankImage}
            alt="Bank Building"
            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
          />
          
          {/* Multiple gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-purple-900/50 to-orange-900/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          {/* Animated shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            <div className="absolute inset-0 animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
          
          {/* Title with glow */}
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-4xl font-extrabold text-white drop-shadow-2xl animate-slide-in-left">
              Bank Transfer Details
            </h3>
            <div className="mt-3 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full animate-expand"></div>
          </div>
        </div>
        
        {/* Details section */}
        <div className="p-8 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="grid gap-5">
            {bankDetails.map((detail, idx) => (
              <div 
                key={idx} 
                className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-500 group animate-slide-in-bottom"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                {/* Moving gradient border */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-orange-500 animate-slide-right"></div>
                </div>
                
                <div className="relative z-10">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {detail.label}
                  </p>
                  <p className="text-blue-900 font-bold text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                    {detail.value}
                  </p>
                </div>
                
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-orange-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PaymentMethodsPage() {
  useEffect(() => {
    // Any initialization code if needed
  }, []);

  const paymentMethods = [
    {
      title: 'Debit/Credit Card',
      image: '/images/available_payments/debit.webp'
    },
    {
      title: 'Net Banking',
      image: '/images/available_payments/netbank.webp'
    },
    {
      title: 'PayPal',
      image: '/images/available_payments/paypal.webp'
    },
    {
      title: 'Bank Transfer (TT)',
      image: '/images/available_payments/bank.webp'
    }
  ];

  const bankDetails = [
    { label: 'Beneficiary Name', value: 'CONFWORLD EDUCATIONAL RESEARCH AND DEVELOPMENT ASSOCIATION' },
    { label: 'Bank Name', value: 'HDFC Bank' },
    { label: 'Account Number', value: '50200097123575' },
    { label: 'IFSC Code', value: 'HDFC0000124' },
    { label: 'Swift Code', value: 'HDFCINBBCHE' },
    { label: 'Branch', value: 'Kilpauk, Chennai, Tamil Nadu, India' }
  ];

  return (
    <div className=" relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      {/* Hero Section */}
      <Hero 
        title="Available Payment Methods" 
        breadcrumbs={[{ label: 'Home', link: '#' }]}
        backgroundImage="/images/commonheroimages/commonhero12.webp"
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="w-full relative z-10 py-20 px-4">
        

        {/* Payment Methods Grid */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paymentMethods.map((method, idx) => (
              <PaymentCard
                key={idx}
                title={method.title}
                image={method.image}
                index={idx}
              />
            ))}
          </div>
        </div>

        {/* Bank Details Section */}
        <div className="mb-8">
          <div className="w-full px-4">
            <BankDetailsCard 
              bankDetails={bankDetails}
              bankImage="https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&q=80"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl max-w-4xl mx-auto animate-scale-in">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 animate-gradient-shift"></div>
          
          {/* Floating elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-300 rounded-full blur-3xl animate-float-slow animation-delay-2000"></div>
          </div>
          
          <div className="relative z-10 p-10 md:p-14">
            <div className="flex items-center justify-center gap-3 mb-4 animate-bounce-in">
              <Mail className="w-7 h-7 text-white" />
              <h3 className="text-3xl font-extrabold text-white">Need Assistance?</h3>
            </div>
            <p className="mb-8 text-center text-blue-50 text-lg">
              Our dedicated team is ready to help you with any payment queries
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a 
                href="mailto:info@icaebms.com" 
                className="group relative overflow-hidden flex items-center justify-center gap-3 bg-white text-blue-600 hover:text-white rounded-2xl px-8 py-5 transition-all duration-500 hover:scale-110 shadow-2xl font-bold text-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <Mail className="w-6 h-6 relative z-10" />
                <span className="relative z-10">info@icaebms.com</span>
              </a>
              <a 
                href="tel:+918072381719" 
                className="group relative overflow-hidden flex items-center justify-center gap-3 bg-white text-orange-500 hover:text-white rounded-2xl px-8 py-5 transition-all duration-500 hover:scale-110 shadow-2xl font-bold text-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <Phone className="w-6 h-6 relative z-10" />
                <span className="relative z-10">+91 8072381719</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-in-bottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -30px);
          }
        }
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
        @keyframes gradient-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes slide-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        @keyframes underline {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
        @keyframes gradient-text {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        .animate-slide-in-bottom {
          animation: slide-in-bottom 0.6s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.8s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
        .animate-gradient-rotate {
          animation: gradient-rotate 3s linear infinite;
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 5s ease infinite;
        }
        .animate-slide-right {
          animation: slide-right 2s ease-in-out infinite;
        }
        .animate-expand {
          animation: expand 0.8s ease-out;
        }
        .animate-underline {
          animation: underline 0.8s ease-out 0.3s forwards;
          width: 0;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
          animation: float 3s ease-in-out infinite;
        }
        .particle-1 {
          top: 20%;
          left: 20%;
          animation-delay: 0s;
        }
        .particle-2 {
          top: 60%;
          right: 30%;
          animation-delay: 1s;
        }
        .particle-3 {
          bottom: 30%;
          left: 40%;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}