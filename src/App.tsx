import React from "react";
import logo from "./logo.svg";
import Home from "./components/pages/home/Home";
import NavBar from "./components/layouts/NavBar";

function App() {
  return (
    <div className="w-screen flex items-center flex-col bg-gray-50 min-h-screen">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
