import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Zap,
  BookOpen,
  Users,
  Award,
  ArrowRight,
  Layers,
  Network,
  Star,
  Menu,
  X,
} from "lucide-react";
import Hero from "../commonhero/common-hero";

export default function AboutOrganizer() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <Network className="w-10 h-10" />,
      title: "International Conferences",
      description:
        "Top-tier global platforms for researchers to present work, share ideas, and network across disciplines.",
      color: "blue",
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Publication Services",
      description:
        "Expert support for submitting research to reputable peer-reviewed journals with editing assistance.",
      color: "orange",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Educational Initiatives",
      description:
        "Comprehensive programs including workshops, webinars, training, and faculty development.",
      color: "blue",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Research Innovation",
      description:
        "Fostering curiosity and advancing knowledge in engineering, technology, and multidisciplinary fields.",
      color: "orange",
    },
  ];

  const commitments = [
    "CERADA organizes educational initiatives including conferences, workshops, webinars, seminars, and faculty development programs focused on Engineering, Science & Technology",
    "Devoted to advancing knowledge through curiosity, innovation and the latest trends in Engineering and Technology",
    "Providing easy access to academic resources and support for aspiring students and research scholars from urban and rural areas",
    "Fostering partnerships with universities, organizations, and associations to promote knowledge sharing and build a better future",
  ];
  

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <header className={`fixed w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-white shadow-md' : 'bg-blue-600'}`}>
        <nav className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`relative w-14 h-14 ${scrollY > 50 ? 'bg-orange-500' : 'bg-white'} transition-colors duration-500`}>
                <div className="absolute inset-2 bg-blue-600 clip-hexagon"></div>
                <Layers className={`absolute inset-0 m-auto w-7 h-7 ${scrollY > 50 ? 'text-white' : 'text-orange-500'} transition-colors duration-500`} />
              </div>
              <div>
                <h1 className={`text-2xl font-black tracking-tight ${scrollY > 50 ? 'text-blue-600' : 'text-white'} transition-colors duration-500`}>
                  CERADA
                </h1>
                <p className={`text-xs font-medium ${scrollY > 50 ? 'text-gray-600' : 'text-blue-100'} transition-colors duration-500`}>
                  Confworld Educational Research
                </p>
              </div>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded ${scrollY > 50 ? 'text-blue-600' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className={`font-semibold ${scrollY > 50 ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-100'} transition`}>
                About
              </a>
              <a href="#services" className={`font-semibold ${scrollY > 50 ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-100'} transition`}>
                Services
              </a>
              <a href="#membership" className={`font-semibold ${scrollY > 50 ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-100'} transition`}>
                Membership
              </a>
              <a href="https://confworld.org/" target="_blank" rel="noopener noreferrer" 
                className={`px-7 py-3 font-bold transition-all ${scrollY > 50 ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-white text-blue-600 hover:bg-blue-50'}`}>
                Visit Website
              </a>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-6 pb-4 space-y-4">
              <a href="#about" className={`block py-2 font-semibold ${scrollY > 50 ? 'text-gray-700' : 'text-white'}`}>About</a>
              <a href="#services" className={`block py-2 font-semibold ${scrollY > 50 ? 'text-gray-700' : 'text-white'}`}>Services</a>
              <a href="#membership" className={`block py-2 font-semibold ${scrollY > 50 ? 'text-gray-700' : 'text-white'}`}>Membership</a>
            </div>
          )}
        </nav>
      </header> */}
      <Hero
        title="About CERADA"
        breadcrumbs={[{ label: "Home", link: "#" }]}
        backgroundImage="/images/commonheroimages/commonhero2.webp"
      />
      {/* Hero Section */}

      <div className="w-full">
        <div className="  px-4 py-8 ">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="text-lg leading-relaxed">
              The{" "}
              <span className="font-bold text-blue-600">
                Confworld Educational Research And Development Association
                (CERADA)
              </span>{" "}
              is an internationally recognized, globally operating
              multidisciplinary professional research and development
              association. Confworld Educational Research and Development
              Association (CERADA) aims to integrate researchers and
              academicians working in the micro disciplines of science and
              technology, fostering collaboration and innovation across a broad
              spectrum of fields. We organize{" "}
              <span className="font-semibold text-orange-500">
                top-tier international conferences
              </span>
              , offering a platform for researchers and professionals to present
              their work, share ideas and network. Our{" "}
              <span className="font-semibold text-orange-500">
                publication services
              </span>{" "}
              support the submission of research papers to reputable, double
              blind peer-reviewed journals, ensuring successful publication
              through editing and peer-review assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision - Side by Side Split */}
      <section id="about" className="relative">
        <div className="grid md:grid-cols-2">
          <div className="relative p-4 md:p-20 bg-blue-600 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 opacity-10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-5xl font-black">Our Mission</h3>
              </div>
              <p className="text-xl leading-relaxed text-blue-50 font-medium">
                CERADA advances global education and research through
                international conferences, research assistance, and
                collaborative publications, fostering an inclusive environment
                for knowledge sharing and innovation.
              </p>
            </div>
          </div>
          <div className="relative p-4 md:p-20 bg-orange-500 text-white overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 opacity-10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-5xl font-black">Our Vision</h3>
              </div>
              <p className="text-xl leading-relaxed text-orange-50 font-medium">
                CERADA envisions a borderless educational research community
                committed to lifelong learning and excellence, aiming to be a
                catalyst for transformative advancements through cutting-edge
                research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-12 px-4 bg-gray-50">
        <div className="w-full">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              What We Do
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl font-medium">
              Building a dynamic community of professionals, educators,
              researchers and innovators across multiple disciplines
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`group relative px-6 py-4 bg-white border-l-8 hover:shadow-2xl transition-all duration-300 ${
                  service.color === "blue"
                    ? "border-blue-600 hover:border-orange-500"
                    : "border-orange-500 hover:border-blue-600"
                }`}
              >
                <div
                  className={`inline-flex p-4 mb-6 ${
                    service.color === "blue"
                      ? "bg-blue-600 text-white"
                      : "bg-orange-500 text-white"
                  }`}
                >
                  {service.icon}
                </div>
                <h4 className="text-3xl font-black mb-5 text-blue-900">
                  {service.title}
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments - Tabbed Interface */}
      <section className="py-6 px-4 bg-white">
  <div className="w-full">
    <div className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
        Our Commitments
      </h1>
    </div>
    <div className="space-y-6">
      {commitments.map((commitment, idx) => (
        <div
          key={idx}
          className={`md:px-4 `}
        >
<div className="flex items-start gap-4">
  <div
    className={`mt-[0.4rem] w-3 h-3 rounded-full flex-shrink-0 ${
      idx % 2 === 0 ? "bg-blue-600" : "bg-orange-500"
    }`}
  ></div>
  <p className="text-xl text-gray-800 leading-relaxed font-medium">
    {commitment}
  </p>
</div>

        </div>
      ))}
    </div>
  </div>
</section>

      {/* Membership Cards */}
      <section id="membership" className="py-8 px-4 bg-gray-50">
        <div className="w-full">
          <div className="mb-8">
            
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
        Join Our Community
      </h1>
            <p className="text-2xl text-gray-600 font-medium">
              Choose the membership that fits your profile
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-0">
            <a
              href="https://confworld.org/institutional"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-16 bg-blue-600 text-white hover:bg-blue-700 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500 opacity-20 transform rotate-45 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <Star className="w-16 h-16 mb-6 text-orange-400" />
                <h4 className="text-4xl font-black mb-4">Institutional</h4>
                <p className="text-xl mb-8 text-blue-100">
                  Membership for Organizations
                </p>
                <div className="inline-flex items-center space-x-2 font-bold text-lg">
                  <span>Learn More</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </a>
            <a
              href="https://confworld.org/professional"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-16 bg-orange-500 text-white hover:bg-orange-600 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600 opacity-20 transform rotate-45 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <Award className="w-16 h-16 mb-6 text-white" />
                <h4 className="text-4xl font-black mb-4">Professional</h4>
                <p className="text-xl mb-8 text-orange-100">
                  Membership for Professionals
                </p>
                <div className="inline-flex items-center space-x-2 font-bold text-lg">
                  <span>Learn More</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </a>
            <a
              href="https://confworld.org/student"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-16 bg-blue-600 text-white hover:bg-blue-700 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500 opacity-20 transform rotate-45 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <Sparkles className="w-16 h-16 mb-6 text-orange-400" />
                <h4 className="text-4xl font-black mb-4">Student</h4>
                <p className="text-xl mb-8 text-blue-100">
                  Membership for Students
                </p>
                <div className="inline-flex items-center space-x-2 font-bold text-lg">
                  <span>Learn More</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
