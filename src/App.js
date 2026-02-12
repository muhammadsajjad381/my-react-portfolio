import React, { Suspense, lazy, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";

// Lazy loading components
const Header = lazy(() => import("./components/Header"));
const Sidebar = lazy(() => import("./components/Sidebar")); // Sidebar lazmi import karein
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Skills = lazy(() => import("./pages/Skills"));
const Contact = lazy(() => import("./pages/Contact"));
const Footer = lazy(() => import("./pages/Footer"));
const Projects = lazy(() => import("./pages/Projects"));

function App() {
  // 1. State define karein jo sidebar ko open/close karegi
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 2. Toggle function banayein
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider>
      <Suspense fallback={<div className="h-screen w-full bg-black flex items-center justify-center text-cyan-500 font-mono">Initializing System...</div>}>
        
        {/* 3. Header ko function pass karein */}
        <Header toggleSidebar={toggleSidebar} />
        
        {/* 4. Sidebar ko state aur function dono pass karein */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <main>
          <Home />
          <About />
          <Services />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
        
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
