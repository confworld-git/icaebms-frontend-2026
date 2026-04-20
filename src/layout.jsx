import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../src/assets/components/Header/Header";
import Navigation from "../src/assets/components/Navigation/Navigation";
import Footer from "./assets/components/common/footer/footer";

export default function Layout() {
  const location = useLocation();

  // 🔥 Handle anchor scroll (#top)
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        // Adjust for header height (important)
        const yOffset = -120; // tweak based on your header height
        const y =
          el.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "instant" }); // or "smooth"
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* 🔥 TOP ANCHOR */}
      <div id="top"></div>

      {/* Header */}
      <Header />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 pt-22 lg:pt-32">
        <Outlet />
      </main>

      {/* 🔥 Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        
        <a
          href="/abstract-full-paper-submission"
          className="bg-blue-600 hover:bg-blue-700 hover:text-orange-500 text-white px-4 py-3 rounded-lg shadow-lg text-sm font-semibold transition-all duration-300"
        >
          Submit Paper
        </a>

        <a
          href="/registration-fees"
          className="bg-blue-600 hover:bg-blue-700 hover:text-orange-500 text-white px-4 py-3 rounded-lg shadow-lg text-sm font-semibold transition-all duration-300"
        >
          Register Now
        </a>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}