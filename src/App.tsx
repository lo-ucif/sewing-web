import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

export const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(249,220,231,0.24),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(229,206,255,0.24),_transparent_30%),#fff7f8] text-[#4b313d] select-text">
      <Navbar />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
};
export default App;
