import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-beige text-dark select-text selection:bg-gold/30 selection:text-dark">
        {/* Sticky Luxury Navbar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <AppRoutes />
        </main>

        {/* Minimal Luxury Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;
