import React from "react";
import Home from "./components/pages/home/Home";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <div className="w-screen flex items-center flex-col bg-gray-50 min-h-screen">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
