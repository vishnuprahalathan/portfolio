import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Skills, Projects, LoadingScreen, CustomCursor } from "./components";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading && <LoadingScreen />}
      <CustomCursor />
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<div className="text-white text-center py-20">Loading...</div>}>
          <About />
          <Experience />
          <Skills />
          <Projects />
          <div className='relative z-0'>
            <Contact />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
