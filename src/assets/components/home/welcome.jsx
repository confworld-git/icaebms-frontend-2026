"use client";

import { useState } from "react";
import {
  Users,
  Globe,
  Lightbulb,
  Target,
  BookOpen,
  Building,
  Heart,
  Sparkles,
  Zap,
  ArrowUpRight,
} from "lucide-react";

export default function Welcome() {
  const [activeIndex, setActiveIndex] = useState(0);

  const objectives = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Encourage interdisciplinary collaboration",
      description:
        "among researchers, academicians, industry experts and policymakers",
    },
    
    {
      icon: <Building className="w-12 h-12" />,
      title: "Bridge the gap between science, technology, business and society",
      description: "through knowledge-sharing and discourse",
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Empower future leaders and young scholars",
      description: "with insights and opportunities for global engagement",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Foster solutions that are practical, inclusive and impactful",
      description: "in addressing real-world challenges",
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Promote innovative research and practices",
      description: "that contribute to sustainable development",
    },
  ];

  return (
    <div className="bg-white">
      {/* Welcome - Magazine Style Layout */}
      <section className="w-full px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              Welcome to ICAEBMS-2026
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative ">
              <p className="text-lg md:text-xl text-gray-800 leading-snug mb-4">
                We warmly welcome you to the{" "}
                <strong className="font-extrabold text-blue-600">
                  International Conference on Applied Science, Engineering,
                  Education, Business, Management and Social Science &
                  Humanities (ICAEBMS-2026).
                </strong>{" "}
                
              </p>
            </div>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              ICAEBMS-2026 serves as a global platform where researchers,
              academicians, professionals and students from around the world
              come together to exchange ideas, present findings and build
              collaborations across disciplines.
              <br />
              This conference is not just an academic gathering, it is a space
              for innovation, interchange and the creation of solutions that
              address real-world challenges. By bringing together experts in
              science, engineering, education, business, management, social
              sciences and humanities, ICAEBMS-2026 fosters interdisciplinary
              connections that pave the way for impactful change.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-600 text-white p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-600 rounded-full -mr-12 -mt-12 opacity-15"></div>
              <Globe className="w-10 h-10 mb-3 relative z-10" />
              <h3 className="text-lg md:text-xl font-semibold mb-2 relative z-10">
                Global Platform
              </h3>
              <p className="text-blue-100 text-sm relative z-10">
                Connecting minds from every corner of the world
              </p>
            </div>

            <div className="bg-orange-600 text-white p-6">
              <Zap className="w-10 h-10 mb-3" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Innovation Hub
              </h3>
              <p className="text-orange-100 text-sm">
                Where breakthrough ideas take shape
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-t-4 border-blue-600 pt-2">
            <Heart className="w-6 h-6 text-orange-600 mb-3" />
            <p className="text-lg md:text-xl font-semibold text-gray-800 leading-relaxed">
              This conference is not just an academic gathering, it is a space
              for <span className="text-blue-600">innovation</span>, interchange
              and the creation of solutions that address{" "}
              <span className="text-orange-600">real-world challenges</span>.
            </p>
          </div>
          <div className="border-t-4 border-orange-600 pt-2">
            <Building className="w-6 h-6 text-blue-600 mb-3" />
            <p className="text-lg md:text-xl font-semibold text-gray-800 leading-relaxed">
              By bringing together experts in science, engineering, education,
              business, management, social sciences and humanities, ICAEBMS-2026
              fosters interdisciplinary connections.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}

      <section
        className="
relative
"
      >
        <div
          className="
absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-600 transform -skew-y-2
"
        ></div>

        <div
          className="
relative w-full px-4 py-16 text-center
"
        >
          <p
            className="
text-2xl md:text-4xl font-black text-white leading-relaxed
"
          >
            Join us in shaping the future through
            <br />
            knowledge, research and collaboration
          </p>
        </div>
      </section>

      {/* Theme Details - Newspaper Column Style */}
      <section className="w-full px-4 pt-10 pb-8">
        <div className="mb-">
          <div className="inline-flex items-center gap-3 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              Conference Theme
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 mb-4">
          <div className="space-y-4  w-full md:w-3/4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              "Interdisciplinary Innovations for a Sustainable Future"
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              The theme reflects the core vision of ICAEBMS-2026 bringing together
              diverse fields of knowledge to address global challenges.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              By uniting applied science, engineering, education, business,
              management, social sciences and humanities, the conference aims to
              foster creativity, collaboration and sustainable solutions that
              transcend traditional boundaries.
            </p>
          </div>
          <div>
            <div className="mb-8 w-full md:w-xs">
              <div className="flex-col space-y-4 gap-3 ">
                <div className="flex-1 bg-blue-600 p-4 text-white">
                  <p className="text-xs font-bold mb-1">CREATIVITY</p>
                  <div className="text-2xl font-extrabold">∞</div>
                </div>
                <div className="flex-1 bg-orange-600 p-4 text-white">
                  <p className="text-xs font-bold mb-1">COLLABORATION</p>
                  <div className="text-2xl font-extrabold">+</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Objectives - Masonry-like Layout */}
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Through this theme, ICAEBMS-2026 seeks:
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`
        group cursor-pointer transition-all duration-300 
        ${idx === 3 ? "lg:col-span-2" : ""}
      `}
            >
              <div
                className={`
          h-full p-4 border-4 
          ${
            activeIndex === idx
              ? "border-orange-600 bg-orange-50"
              : "border-gray-200 bg-white hover:border-blue-600"
          }
          transition-all duration-300
        `}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`
              flex-shrink-0 w-20 h-20 flex items-center justify-center 
              ${
                activeIndex === idx
                  ? "bg-orange-600"
                  : "bg-blue-600 group-hover:bg-orange-600"
              }
              transition-colors duration-300
            `}
                  >
                    <div className="text-white">{obj.icon}</div>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-lg font-black text-gray-700-500 mb-3 leading-tight">
                      {obj.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {obj.description}
                    </p>
                  </div>
                </div>

                
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Statement */}
    </div>
  );
}
