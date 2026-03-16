import React, { useState } from 'react';
import { GraduationCap, Users, Lightbulb, Globe, TrendingUp, BookOpen, Building2, Brain, Leaf } from 'lucide-react';
import Hero from '../commonhero/common-hero';


export default function ICAEBMSConference() {
  const [activeSection, setActiveSection] = useState('about');

  const objectives = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Promote Interdisciplinary Research",
      description: "Encourage collaboration across applied sciences, engineering, education, business, management, social sciences and humanities."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Foster Innovation & Knowledge Sharing",
      description: "Provide a platform for scholars and professionals to present novel ideas, findings and practical solutions."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Address Global Challenges",
      description: "Inspire research and discussions that contribute to sustainable development and societal progress."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Strengthen Academic & Industry Linkages",
      description: "Bridge the gap between theory and practice through dialogue between academia, industry and policymakers."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Support Young Researchers",
      description: "Offer opportunities for students and emerging scholars to present their work and build their academic network."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Encourage International Collaboration",
      description: "Facilitate partnerships and joint initiatives across countries and disciplines."
    }
  ];

  const focusAreas = [
    {
      title: "Applied Science & Engineering",
      icon: <TrendingUp className="w-8 h-8" />,
      topics: [
        "Emerging technologies and innovations",
        "Artificial intelligence, data science and robotics",
        "Renewable energy and sustainable solutions"
      ]
    },
    {
      title: "Education & Pedagogical Innovations",
      icon: <BookOpen className="w-8 h-8" />,
      topics: [
        "Digital learning and e-education",
        "Curriculum development and teaching methodologies",
        "Inclusive and equitable education"
      ]
    },
    {
      title: "Business & Management",
      icon: <Building2 className="w-8 h-8" />,
      topics: [
        "Entrepreneurship and startup ecosystems",
        "Strategic management and leadership",
        "Sustainable business models and corporate social responsibility"
      ]
    },
    {
      title: "Social Sciences & Humanities",
      icon: <Users className="w-8 h-8" />,
      topics: [
        "Culture, society and human behavior",
        "Media, communication and digital society",
        "Governance, law and public policy"
      ]
    },
    {
      title: "Sustainability & Development",
      icon: <Leaf className="w-8 h-8" />,
      topics: [
        "Climate change mitigation and adaptation",
        "Smart cities and sustainable urban planning",
        "Policy frameworks for global and local sustainability"
      ]
    }
  ];

  return (
    <div className=" bg-white">
      {/* Hero Section */}
      <Hero 
        title="About ICAEBMS" 
        breadcrumbs={[{ label: 'Home', link: '#' }]}
        backgroundImage="/images/commonheroimages/commonhero.webp"
      />

      {/* About Section */}
      <div className="w-full ">
        <div className="   w-full px-4 py-8">
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="text-lg leading-relaxed">
              The <strong className="text-blue-600">International Conference on Applied Science, Engineering, Education, Business, Management and Social Science & Humanities (ICAEBMS-2026)</strong> is a premier international forum that brings together researchers, academicians, industry professionals and students from across disciplines to share knowledge, exchange ideas and present cutting-edge research.
            </p>
            <p className="text-lg leading-relaxed">
              ICAEBMS-2026 emphasizes collaboration across scientific, technological, educational, business, social and humanities domains to address global challenges and create sustainable solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Objectives Section */}
      
      <div className=" ">
        
        <div className="w-full px-6">
          <div className="mb-">
            
            
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              Our Objectives
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl font-medium">
              Driving excellence through collaboration, innovation and sustainable development
            </p>
          </div>
          
          
           <div className="bg-white ">
            <div className="space-y-6">
              {objectives.map((obj, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-blue-600 mb-2">{obj.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{obj.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Focus Areas Section */}
      <div className="w-full px-4 py-8">
        <div className="mb-8">
            
            
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              Key Focus Areas
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl font-medium">
              Fostering research and collaboration across multiple disciplines
            </p>
          </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {focusAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-xl">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-600">{area.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {area.topics.map((topic, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                    <span className="text-gray-700">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}