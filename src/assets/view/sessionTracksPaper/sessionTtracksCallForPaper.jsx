import { useEffect, useState } from "react";
import conferenceSessions from "./sessionTracksPaperJons";
import Hero from '../commonhero/common-hero'
import DeadLine from '../../components/common/deadLine';

export default function SessionTracks() {
  const [activeId, setActiveId] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Scroll to section if hash in URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          if (id === conferenceSessions[0].id) {
            const headerOffset = 150;
            const elementPosition = el.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          } else {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    }
  }, []);

  // Track which session section is active on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      conferenceSessions.forEach((session) => {
        const el = document.getElementById(session.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const offset = 200;
          if (rect.top <= offset && rect.bottom > offset) {
            current = session.id;
          }
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      <Hero 
              title="Session Tracks / Call for Papers" 
              breadcrumbs={[{ label: 'Home', link: '#' }]}
              backgroundImage="/images/commonheroimages/commonhero6.webp"
            />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex flex-col">
      {/* Top Header */}
      <header className="px- md:px-12 py-8 md:text-center w-full">
        
        <div className="backdrop-blur-sm  p-6 ">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
            Call for Submissions: Topics of interest include, but are not limited to:
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            We invite researchers, scholars and practitioners to contribute to the <span className="font-semibold text-blue-600">ICAEBMS-2026 conference</span> by submitting papers and session proposals. Share your groundbreaking research, ideas and perspectives across various fields to advance the conference's focus on <span className="font-semibold text-orange-500">Interdisciplinary Innovations for a Sustainable Future</span>.
          </p>
        </div>
      </header>

      <div className="flex flex-1  w-full relative px-4 md:px-0">
        {/* Sidebar for desktop */}
        <aside className="hidden md:flex flex-col sticky top-24 left-0 w-80 h-[calc(100vh-6rem)] bg-white/90 backdrop-blur-sm border-r border-blue-200 p-6 overflow-y-auto shadow-xl rounded-r-2xl z-30">
          <h2 className="text-2xl font-bold mb-6 text-blue-600 border-b-4 border-orange-500 pb-3">
            Session Navigation
          </h2>
          <nav className="flex flex-col space-y-2">
            {conferenceSessions.map((session) => (
              <a
                key={session.id}
                href={`#${session.id}`}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  activeId === session.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold shadow-lg transform scale-105"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-700 hover:translate-x-1"
                }`}
              >
                {session.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Mobile sidebar toggle button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden fixed top-28 left-4 z-40 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Open sidebar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Sidebar drawer for mobile */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setSidebarOpen(false)}
              aria-hidden="true"
            />
            <aside className="fixed top-0 left-0 bottom-0 w-80 bg-white shadow-2xl p-6 overflow-y-auto z-50">
              <div className="flex justify-between items-center mb-6 border-b-4 border-orange-500 pb-4">
                <h2 className="text-2xl font-bold text-blue-600">
                  Session Tracks
                </h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-orange-500 text-3xl font-bold hover:text-orange-600 focus:outline-none"
                  aria-label="Close sidebar"
                >
                  ×
                </button>
              </div>
              <nav className="flex flex-col space-y-2">
                {conferenceSessions.map((session) => (
                  <a
                    key={session.id}
                    href={`#${session.id}`}
                    onClick={() => setSidebarOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                      activeId === session.id
                        ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white font-bold"
                        : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                    }`}
                  >
                    {session.title}
                  </a>
                ))}
              </nav>
            </aside>
          </>
        )}

        {/* Main content */}
        <main className="flex-1 md:pl-8 md:pr-8 md:max-w-4xl py-8 pt-32 space-y-12 overflow-y-auto">
          {conferenceSessions.map((session, idx) => (
            <section
              key={session.id}
              id={session.id}
              className={`scroll-mt-40 bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl border-l-3 border-t-3 ${
                idx % 2 === 0 ? "border-blue-600" : "border-orange-500"
              }`}
            >
              <h2 className={`text-2xl md:text-4xl font-bold mb-6 pb-4 border-b-4 ${
                idx % 2 === 0 ? "text-blue-800 border-blue-200" : "text-orange-600 border-orange-200"
              }`}>
                {session.title}
              </h2>

              {/* Image */}
              <div className="w-full h-64 md:h-80 lg:h-96 flex items-center justify-center mb-8 rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={session.cover}
                  alt={session.title}
                  title={session.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Topics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {session.topics.map((topic, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-br from-gray-50 to-blue-50 hover:from-blue-100 hover:to-orange-100 transition-all duration-300 hover:shadow-md group"
                  >
                    <span className={`flex-shrink-0 w-2 h-2 mt-2 rounded-full ${
                      idx % 2 === 0 ? "bg-blue-600" : "bg-orange-500"
                    } group-hover:scale-150 transition-transform`}></span>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed group-hover:text-gray-900">
                      {topic}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
    <DeadLine />
    </section>
    
  );
}