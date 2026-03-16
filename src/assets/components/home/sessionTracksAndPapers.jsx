import { useState } from "react";

export default function SessionAndPapers() {
  const conferenceSessions = [
    {
      id: "applied-science",
      title: "Session 1: Applied Science",
      cover: "/images/session/session 1/session 1 img.webp",
    },
    {
      id: "engineering",
      title: "Session 2: Engineering & Technological Advancements",
      cover: "/images/session/session 2/session 2 img.webp",
    },
    {
      id: "education",
      title: "Session 3: Education & Pedagogical Innovations",
      cover: "/images/session/session 3/session 3 img.webp",
    },
    {
      id: "business",
      title: "Session 4: Business & Management Studies",
      cover: "/images/session/session 4/session 4 img.webp",
    },
    {
      id: "social-science",
      title: "Session 5: Social Science and Humanities",
      cover: "/images/session/session 5/session 5 img.webp",
    },
    {
      id: "finance",
      title: "Session 6: Finance, Accountancy and Marketing",
      cover: "/images/session/session 6/session 6 img.webp",
    },
  ];

  return (
    <div className="flex justify-center  ">
      <div className="w-full px-4">
        
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight text-center">
              Session Tracks / Call for Papers
            </h1>
        
        <p className="text-center my-5 text-gray-700   text-lg">
          We invite researchers, scholars and practitioners to contribute to the ICAEBMS conference by submitting papers and session proposals. Share your groundbreaking research, ideas and perspectives across various fields to advance the conference's focus on <span className="font-semibold text-orange-500">Interdisciplinary Innovations for a Sustainable Future</span>.
        </p>

        <p className="text-center mb-8 text-gray-600">
          Topics of interest include, but are not limited to:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conferenceSessions.map(({ id, cover, title }, index) => (
            <a
              key={index}
              href={`/session-tracks-call-for-papers#${id}`}
              className="block group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  src={cover}
                  alt={title}
                  title={title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5">
                  
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}