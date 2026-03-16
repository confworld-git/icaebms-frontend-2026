import { useState, useEffect } from "react";
import Sdg from "./sgd";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-07-27T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      <section className="relative bg-gradient-to-br from-blue-50 to-orange-50 py-6 md:pt-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-400 to-orange-500 opacity-15"
            style={{
              clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 20% 100%)",
            }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-tl from-blue-500 to-blue-600 opacity-10"
            style={{
              clipPath: "polygon(70% 0%, 100% 0%, 100% 100%, 30% 100%)",
            }}
          ></div>
        </div>

        <div className=" z-10 w-full px-4">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 py-4 lg:py-8">
              {/* Main Title */}
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-blue-600 ">
                International Conference on Applied Science, Engineering,
                Education, Business, Management and Social Science & Humanities
                <span className=" text-lg sm:text-xl lg:text-3xl text-orange-600 mt-2">
                  {" "}
                  (ICAEBMS-2026)
                </span>
              </h1>

              {/* Theme */}
              <div className="flex flex-col ">
                <p className="text-base sm:text-lg">
                  <span className="font-bold">Theme: </span>
                  <span className="font-semibold">
                    "Interdisciplinary Innovations for a Sustainable Future"
                  </span>
                </p>
                <p className="text-base sm:text-lg font-semibold text-orange-600">
                  Hybrid Conference: In Person + Online
                </p>
                <p className="text-base sm:text-lg">
                  <span className="font-bold">Organized by: </span>
                  <span className="font-semibold">
                    Confworld Educational Research and Development Association
                  </span>
                </p>
                <p className="text-base sm:text-lg font-bold text-gray-900">
                  <span className="font-bold">ISBN: </span>
                  <span className="font-semibold">978-95-813001-3-6</span>
                </p>
              </div>

              {/* Conference Details */}
              <div className="flex flex-wrap items-center justify-start gap-2 md:gap-4">
                {/* Date */}
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg shadow border border-gray-200">
                  <svg
                    className="w-4 h-4 text-orange-600 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm font-semibold text-gray-600">
                    Date:
                  </span>
                  <p className="text-sm sm:text-base font-bold text-blue-600">
                    27–28 Jul, 2026
                  </p>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg shadow border border-gray-200">
                  <svg
                    className="w-4 h-4 text-blue-600 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm font-semibold text-gray-600">
                    Location:
                  </span>
                  <p className="text-sm sm:text-base font-bold text-blue-600">
                    Singapore
                  </p>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="flex justify-center md:justify-start">
                <div className="px-2 rounded-lg w-full sm:w-auto">
                  <div className="flex justify-center md:justify-start gap-2 sm:gap-3">
                    {[
                      {
                        label: "Days",
                        value: timeLeft.days,
                        bg: "bg-blue-600",
                      },
                      {
                        label: "Hours",
                        value: timeLeft.hours,
                        bg: "bg-orange-500",
                      },
                      {
                        label: "Minutes",
                        value: timeLeft.minutes,
                        bg: "bg-blue-500",
                      },
                      {
                        label: "Seconds",
                        value: timeLeft.seconds,
                        bg: "bg-orange-400",
                      },
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 ${item.bg} rounded-lg flex items-center justify-center mb-1`}
                        >
                          <span className="text-base sm:text-lg font-bold text-white">
                            {item.value}
                          </span>
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-600 font-medium">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Video */}
            <div className="flex justify-center lg:justify-end py-6 lg:py-0">
              <div className="relative w-full max-w-lg lg:max-w-none">
                {/* Mobile Video */}
                <div className="lg:hidden w-full aspect-video rounded-2xl overflow-hidden border-2 border-blue-800 shadow-lg">
                  <video
                    src="/videos/icaebms-hero-video.webm"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                  />
                </div>

                {/* Desktop Video - Larger rectangular shape */}

                <div className="hidden py-12 lg:block w-full h-[500px] mx-auto">
                  
                  <div className="w-full mx-auto  h-auto bg-gradient-to-br from-blue-700 to-blue-600 rounded-2xl shadow-2xl p-1">
                    <div className="w-full h-auto bg-blue-800 rounded-xl overflow-hidden">
                      <video
                        src="/videos/icaebms-hero-video.webm"
                        className="w-full h-auto object-fit"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Sdg />
        </div>
      </section>
    </section>
  );
}
