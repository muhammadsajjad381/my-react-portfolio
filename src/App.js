import React, { Suspense, lazy, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";

const Header = lazy(() => import("./components/Header"));
const Sidebar = lazy(() => import("./components/Sidebar"))
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Skills = lazy(() => import("./pages/Skills"));
const Contact = lazy(() => import("./pages/Contact"));
const Footer = lazy(() => import("./pages/Footer"));
const Projects = lazy(() => import("./pages/Projects"));

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider>
      <Suspense fallback={<div className="h-screen w-full bg-black flex items-center justify-center text-cyan-500 font-mono">Initializing System...</div>}>
        <Header toggleSidebar={toggleSidebar} />
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