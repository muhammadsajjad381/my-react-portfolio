import React, { Suspense, lazy } from "react";
import { ThemeProvider } from "./context/ThemeContext";

const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"))
const Skills = lazy(() => import("./pages/Skills"))
const Contact = lazy(() => import("./pages/Contact"))
const Footer = lazy(() => import("./pages/Footer"))

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Home />
        <About />
        <Services />
        <Skills />
        <Contact />
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
