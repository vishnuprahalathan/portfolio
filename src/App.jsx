import React, { Suspense, useState, useEffect, lazy } from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero, LoadingScreen, CustomCursor, Footer } from "./components";

// Lazy load heavy components for faster initial render
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading && <LoadingScreen />}
      <CustomCursor />
      <div className="relative z-0 bg-primary">
        {/* Hero + Navbar share the bg-hero-pattern */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <Suspense
          fallback={
            <div className="flex items-center justify-center py-32">
              <div className="w-10 h-10 rounded-full border-4 border-[#B026FF] border-t-transparent animate-spin" />
            </div>
          }
        >
          <About />
          <Experience />
          <Skills />
          <Projects />
          <div className="relative z-0">
            <Contact />
          </div>
        </Suspense>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
