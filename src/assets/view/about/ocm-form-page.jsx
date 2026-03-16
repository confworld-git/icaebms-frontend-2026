import React, { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaCog,
  FaUserTie,
  FaFlask,
  FaHandsHelping,
  FaArrowRight,
} from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import OCMform from "./OCMForm";
import AOS from "aos";
import Hero from "../commonhero/common-hero";
import "aos/dist/aos.css";

const OCMFormPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const target = document.getElementById("OCMform");
    if (target) {
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(!entry.isIntersecting),
        { threshold: 0.3 }
      );
      observer.observe(target);
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  const roles = [
    { name: "Strategic Guidance", desc: "Offering expert advice to guide CERADA's direction." },
    { name: "Conference Planning", desc: "Assisting in the development of conference themes and selection of speakers." },
    { name: "Review and Feedback", desc: "Reviewing research submissions and providing constructive feedback." },
    { name: "Abstract/Full Paper Review", desc: "Evaluating submissions and ensuring alignment with the conference theme." },
    { name: "Networking", desc: "Facilitating connections with other researchers and professionals." },
    { name: "Outreach", desc: "Promoting CERADA's initiatives and recruiting new members and participants." },
    { name: "Mentorship", desc: "Supporting young researchers and professionals in their academic growth." },
    { name: "Planning and Coordination", desc: "Assisting with the overall event organization, including venue logistics, agenda setting and speaker arrangements." },
    { name: "Promotion", desc: "Engaging in marketing and outreach to attract participants and speakers." },
    { name: "Onsite Management", desc: "Facilitating sessions, guiding attendees and managing any technical issues during the hybrid event." },
    { name: "Post-Conference Tasks", desc: "Ensuring the publication of proceedings and addressing feedback." },
  ];

  const qualifications = [
    {
      id: "organizing",
      title: "Organizing Committee",
      icon: <FaCog className="w-12 h-12" />,
      color: "blue",
      list: ["Doctorates with over 10 years of professional experience", "Keynote speakers in at least 5 international conferences", "CEOs/Managing Directors/Deans/Principals", "Research Experts"],
      description: "Their responsibilities include selecting the conference venue, deciding on institutional and media partners and identifying potential co-hosts. They also have the authority to choose keynote speakers, appoint program chairs and determine session topics.",
    },
    {
      id: "advisory",
      title: "Advisory Committee",
      icon: <FaUserTie className="w-12 h-12" />,
      color: "orange",
      list: ["Dean/Director/Principal with a doctorate", "Professors/HODs with 10+ years of experience", "Associate Professors/Assistant Professor/Senior Lecturers with 5+ years of experience", "Industrial Professionals with 8+ years of experience", "Professionals from the host country"],
      description: "The committee works closely with other teams to maintain the event schedule, assist with hospitality and registration and coordinate venue setup. They also ensure that the conference environment is well-prepared and runs smoothly.",
    },
    {
      id: "scientific",
      title: "Scientific Committee",
      icon: <FaFlask className="w-12 h-12" />,
      color: "blue",
      list: ["Dean/Director/Principal with a Doctorate", "Should be an Editorial Board Member of a Prestigious Journal", "Must be an experienced Reviewer", "Should have served on a review committee for 10+ international conferences"],
      description: "The Scientific Committee consists of three subcommittees: the Review Committee, Technical Committee and Editorial Committee. It plays a key role in setting important dates for the upcoming 2025 educational conference, managing paper submissions, developing the final program and evaluating abstracts for acceptance.",
    },
    {
      id: "hospitality",
      title: "Hospitality Committee",
      icon: <FaHandsHelping className="w-12 h-12" />,
      color: "orange",
      list: ["Dean/Director/Principal with a Doctorate", "Professor/HODs with 10+ years of Experience", "Associate Professor/Assistant Professor/Senior Lecturer with 5+ years of Experience", "Industrial Professionals with 8+ years of Experience", "Professionals from the host country"],
      description: "They provide conference venue details, share the organization's background and address specific participant inquiries. Volunteers are allocated with assisting in hospitality, registration, venue setup and conference activities on a rotating schedule.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      
      
<Hero 
        title="Organizing Committee Form" 
        breadcrumbs={[{ label: 'Home', link: '#' }]}
        backgroundImage="/images/commonheroimages/commonhero5.webp"
      />
     
      <section className="py-8 px-4 bg-gray-50">
        <div className="w-full">
          <div className="mb-12">
           
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
        Key Responsibilities
      </h1>
            <p className="text-xl text-gray-600 max-w-3xl">Essential duties of our organizing committee members</p>
          </div>
          
          <div className="">
            <ul className="space-y-4">
              {roles.map((role, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center mt-0.5">
                    <BsCheckCircleFill className="text-white w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900 mb-1">{role.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{role.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

     
      <section className="py-8 px-4">
        <div className="w-full">
          <div className="mb-2">
            
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
        Who We're Looking For
      </h1>
          </div>

          <div className="space-y-6">
            {qualifications.map((qual) => (
              <div
                key={qual.id}
                className={`relative bg-white shadow-lg overflow-hidden ${
                  activeAccordion === qual.id ? 'ring-4' : ''
                } ${qual.color === 'blue' ? 'ring-blue-600' : 'ring-orange-500'}`}
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === qual.id ? null : qual.id)}
                  className={`w-full p-6 flex items-center justify-between text-left transition-colors ${
                    activeAccordion === qual.id
                      ? qual.color === 'blue' ? 'bg-blue-600 text-white' : 'bg-orange-500 text-white'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <div className={`p-4 ${
                      activeAccordion === qual.id ? 'bg-white bg-opacity-20' : qual.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-500'
                    } transition-all`}>
                      {qual.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black">{qual.title}</h3>
                  </div>
                  <FaChevronDown
                    className={`text-3xl transition-transform duration-300 ${
                      activeAccordion === qual.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {activeAccordion === qual.id && (
                  <div className="p-6 bg-gray-50 border-t-4 border-current">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xl font-black text-gray-900 mb-4">Requirements</h4>
                        <ul className="space-y-3">
                          {qual.list.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className={`w-6 h-6 flex-shrink-0 rounded-full ${qual.color === 'blue' ? 'bg-blue-600' : 'bg-orange-500'} flex items-center justify-center text-white font-black text-sm`}>
                                {i + 1}
                              </div>
                              <span className="text-lg text-gray-700 pt-0.5">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={`p-6 ${qual.color === 'blue' ? 'bg-blue-50' : 'bg-orange-50'} rounded-lg`}>
                        <h4 className="text-xl font-black text-gray-900 mb-3">Responsibilities</h4>
                        <p className="text-base text-gray-700 leading-relaxed">{qual.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="OCMform" className="py-8 px-4 bg-gradient-to-br from-sky-200 to-blue-200 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-blue-800">Ready to Apply?</h2>
            <p className="text-xl text-gray-900">Complete the form below to join our distinguished committee</p>
          </div>

          <OCMform />
        </div>
      </section>

   
      {isVisible && (
        <a
          href="#OCMform"
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black px-8 py-4 shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110 flex items-center gap-3 group"
        >
          <span>APPLY NOW</span>
          <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
        </a>
      )}
    </div>
  );
};

export default OCMFormPage;