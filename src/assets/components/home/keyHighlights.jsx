"use client";

import { useState } from "react";
import {
  Users,
  Globe,
  BookOpen,
  Mic,
  Settings,
  Share2,
  Award,
  GraduationCap,
} from "lucide-react";

const KeyHighlights = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const highlights = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multidisciplinary Platform",
      description:
        "A unique forum uniting applied science, engineering, education, business, management, social sciences and humanities.",
      badge: "Diverse Fields",
      color: "blue",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Participation",
      description:
        "Engage with renowned scholars, industry leaders and professionals from across the world.",
      badge: "Worldwide",
      color: "orange",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Call for Papers & Publications",
      description:
        "Opportunities to publish in reputed scopus indexed journals. Selected papers from the conference will be considered for publication in high-impact journals.",
      badge: "Scopus Indexed",
      color: "blue",
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Expert Keynote Sessions",
      description:
        "Insights from distinguished speakers on cutting-edge research and global challenges.",
      badge: "Expert Speakers",
      color: "orange",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Interactive Workshops & Panel Discussions",
      description:
        "Hands-on learning and thought-provoking debates on contemporary issues.",
      badge: "Interactive",
      color: "blue",
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Networking Opportunities",
      description:
        "Build academic, industrial and international collaborations.",
      badge: "Connect",
      color: "orange",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Recognition & Awards",
      description:
        "Best paper and presentation awards to acknowledge outstanding contributions.",
      badge: "Excellence",
      color: "blue",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Student & Young Researcher Engagement",
      description:
        "Special sessions to inspire and guide the next generation of scholars.",
      badge: "Next Gen",
      color: "orange",
    },
  ];

  return (
    <div className="bg-white">
      <div className="w-full px-4 pb-8 pt-2">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            {/* keep simple header without extra ornaments */}
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              Key Highlights{" "}
            </h1>
          </div>
        </div>

        {/* Highlights Grid - Alternating Layout */}
        <div className="space-y-5">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }  transition-all duration-200`}
            >
              {/* Number Badge Side */}
              <div
                className={`w-16 flex items-center justify-center ${
                  highlight.color === "blue" ? "bg-blue-600" : "bg-orange-600"
                }`}
              >
                <div className="text-center">
                  <div className="text-xl font-extrabold text-white opacity-90 mb-1">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div
                className={`flex-1 border ${
                  hoveredIndex === index
                    ? highlight.color === "blue"
                      ? "border-blue-600 bg-blue-50"
                      : "border-orange-600 bg-orange-50"
                    : "border-gray-200 bg-white"
                } transition-all duration-200 p-6`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 ${
                          highlight.color === "blue"
                            ? "bg-blue-600"
                            : "bg-orange-600"
                        } flex items-center justify-center`}
                      >
                        <div className="text-white">{highlight.icon}</div>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-snug flex-1">
                        {highlight.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyHighlights;
