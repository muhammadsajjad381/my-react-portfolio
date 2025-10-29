import React, { Suspense, lazy } from "react";
import { ThemeProvider } from "./context/ThemeContext";

const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Home />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
