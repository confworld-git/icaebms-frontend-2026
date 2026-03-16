import React from "react";
import {
  LuCalendarCheck,
  LuPencilRuler,
  LuFileText,
  LuBird,
} from "react-icons/lu";

const DeadLine = () => {
  const deadlines = [
    {
      name: "Early Bird Registration",
      day: "31",
      month: "Mar",
      year: "2026",
      icon: LuBird,
      color: "blue",
    },
    {
      name: "Abstract Submission",
      day: "15",
      month: "Jul",
      year: "2026",
      icon: LuPencilRuler,
      color: "blue",
    },
    {
      name: "Full Paper Submission",
      day: "25",
      month: "Jul",
      year: "2026",
      icon: LuFileText,
      color: "blue",
    },
    {
      name: "Final Registration",
      day: "20",
      month: "Jul",
      year: "2026",
      icon: LuCalendarCheck,
      color: "blue",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-8 px-6">
      {/* Hero Header */}
      <div className="w-full px-4 mb-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
            Submission Deadlines
          </h1>
          <p className="text-2xl text-gray-600 font-medium max-w-3xl mx-auto">
            Secure your spot – Mark your calendar!
          </p>
        </div>
      </div>

      {/* Deadlines Calendar Cards */}
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {deadlines.map((item, index) => {
            const IconComponent = item.icon;
            const ordinal =
              item.day.endsWith("1") && item.day !== "11"
                ? "st"
                : item.day.endsWith("2") && item.day !== "12"
                ? "nd"
                : item.day.endsWith("3") && item.day !== "13"
                ? "rd"
                : "th";

            return (
              <div key={index} className="relative group">
                {/* Calendar Binding Rings */}
                <div className="absolute -top-3 left-0 right-0 flex justify-around px-8 z-10">
                  <div className="w-4 h-6 bg-gray-800 rounded-full"></div>
                  <div className="w-4 h-6 bg-gray-800 rounded-full"></div>
                </div>

                {/* Calendar Card */}
                <div className="border-4 border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Header with Title */}
                  <div
                    className={`${
                      item.color === "blue" ? "bg-blue-600" : "bg-orange-500"
                    } text-white p-6 text-center space-y-4`}
                  >
                    <h3 className="text-lg font-black leading-tight">
                      {item.name}
                    </h3>
                    <div className="flex justify-center mb-2">
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Date Display */}
                  <div className="bg-white p-8 text-center">
                    <div className="text-6xl font-black text-orange-600 mb-2">
                      {item.day}
                      <sup className="text-2xl align-super">{ordinal}</sup>
                    </div>

                    <div className="text-xl font-bold text-gray-700">
                      {item.month} {item.year}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Guidelines Section */}
      <div className="container mx-auto max-w-6xl mt-12">
        <div className="relative p-8 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl border-2 border-gray-200 overflow-hidden">
          <div className="relative z-10">
            <p className="text-xl text-blue-800 leading-relaxed font-medium mb-6">
              For all detailed submission guidelines, paper formatting
              requirements, and additional information, please navigate to the
              Official Submission Page.
            </p>
            <a
              href="/abstract-full-paper-submission"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl group"
            >
              <span>View Submission Guidelines</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeadLine;
