import React, { useState, useEffect } from 'react';
import { CreditCard, Download, FileText, Send, AlertCircle, CheckCircle, Clock, Users, FileEdit, Calendar } from 'lucide-react';
import Hero from '../commonhero/common-hero';
const RegistrationInstructions = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const instructions = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payment",
      description: "Complete your payment for the conference",
      color: "from-blue-600 to-blue-700",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Download Form",
      description: "After making your payment, download the Registration Form",
      color: "from-orange-500 to-orange-600",
      image: "/images/availablepayment/form.jpg"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Fill Out Form",
      description: "Complete all required fields in the Registration Form",
      color: "from-blue-600 to-blue-700",
      image: "/images/availablepayment/fill.jpg"
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: "Submit Registration",
      description: "Email the filled-out Registration Form along with your payment information to info@icaebms.com",
      color: "from-orange-500 to-orange-600",
      image: "/images/availablepayment/submit.jpg"
    }
  ];

  const guidelines = [
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Payment Notification",
      description: "Registered members must inform us about their payments immediately via E-mail."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Proof of Payment",
      description: "After completing registration, every participant is required to email a scanned copy of the registration fee receipt or transaction proof to us immediately."
    },
    {
      icon: <FileEdit className="w-6 h-6" />,
      title: "Paper Submission",
      description: "No modifications to the paper will be accepted after the final submission date."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Author Limit",
      description: "Only one author and one co-author are allowed per registration."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Late Registration",
      description: "If you need to register after the deadlines, please contact the coordinator as soon as possible."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Form Submission",
      description: "After making your payment, download the Registration Form, fill it out, and email it to us at info@icaebms.com along with your payment information."
    }
  ];

  return (
    <section>
      <Hero
              title="Registration Instructions"
              breadcrumbs={[{ label: "Home", link: "#" }]}
              backgroundImage="/images/commonheroimages/commonhero13.webp"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      {/* Header */}
      

      {/* Registration Instructions - Card Grid with Images */}
      <div className="w-full px-4 py-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructions.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Step Number Overlay */}
                

                {/* Icon Overlay */}
                <div className="absolute bottom-4 left-4">
                  <div className={`bg-white bg-opacity-90 text-blue-600 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-all duration-500`}>
                    {item.icon}
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-600 mb-3">{item.title}</h3>
                <p className="text-gray-900 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>

              {/* Bottom Accent */}
            </div>
          ))}
        </div>

        <div className={`mt-8 bg-gradient-to-r from-orange-100 to-blue-100 border-l-4 border-orange-500 p-6 rounded-lg transition-all duration-1000 delay-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <p className="text-gray-800 font-semibold flex items-center">
            <AlertCircle className="w-5 h-5 mr-3 text-orange-500" />
            <span className="text-lg">Important: Please note that the payee is responsible for all bank charges.</span>
          </p>
        </div>
      </div>

      {/* Registration Guidelines - Timeline */}
      <div className="bg-gradient-to-br from-blue-50 to-white pb-8 px-4">
        <div className="w-full">
          
          <h1 className="text-4xl pb-8 md:text-5xl font-bold text-blue-900 leading-tight text-center">
            Registration Guidelines
          </h1>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-orange-500 to-blue-600"></div>

            {guidelines.map((item, index) => (
              <div
                key={index}
                className={`relative mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="flex items-start">
                  {/* Timeline Node */}
                  <div className={`absolute left-8 w-1 h-1 -ml-0.5 rounded-full bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-600 to-blue-700' : 'from-orange-500 to-orange-600'} transform transition-transform duration-500`}>
                    <div className={`w-8 h-8 -mt-3.5 -ml-3.5 rounded-full bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-600 to-blue-700' : 'from-orange-500 to-orange-600'} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-20 flex-1 group">
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-blue-600 hover:border-orange-500">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                        <span className={`w-8 h-8 rounded-full bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-600 to-blue-700' : 'from-orange-500 to-orange-600'} text-white flex items-center justify-center text-sm font-bold mr-3`}>
                          {index + 1}
                        </span>
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed pl-11">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-8 bg-blue-200 text-blue-900 p-6 rounded-xl shadow-lg transition-all duration-1000 delay-1000 `}>
            <p className="text-lg font-semibold flex items-center justify-center">
              <AlertCircle className="w-6 h-6 mr-3" />
              Note: The payee is responsible for all bank charges.
            </p>
          </div>
        </div>
      </div>

      
    </div>

    </section>
    
  );
};

export default RegistrationInstructions;