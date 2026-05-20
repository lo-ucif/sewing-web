import React, { useEffect, useMemo } from "react";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { AppRoutes } from "./routes";
import { bgIcons } from "./assets/bg-icons";

type Page = "home" | "gallery" | "detail";

type IconPlacement = {
  svg: string;
  top: string;
  left: string;
  size: string;
  opacity: number;
  rotate: string;
};

const createSeededRandom = (seed: number) => {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
};

const generateBackgroundPlacements = (): IconPlacement[] => {
  const random = createSeededRandom(67423);
  return Array.from({ length: 16 }, (_, index) => ({
    svg: bgIcons[index % bgIcons.length],
    top: `${Math.floor(random() * 899) + 2}%`,
    left: `${Math.floor(random() * 86) + 5}%`,
    size: `${Math.floor(random() * 120) + 40}px`,
    opacity: Number((random() * 0.08 + 0.02).toFixed(3)),
    rotate: `${Math.floor(random() * 61) - 30}deg`,
  }));
};

const BackgroundIcons: React.FC = () => {
  const placements = useMemo<IconPlacement[]>(
    () => generateBackgroundPlacements(),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {placements.map((item, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            top: item.top,
            left: item.left,
            width: item.size,
            height: item.size,
            opacity: item.opacity,
            transform: `rotate(${item.rotate})`,
          }}
          dangerouslySetInnerHTML={{ __html: item.svg }}
        />
      ))}
    </div>
  );
};

const AppLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPage: Page =
    location.pathname === "/"
      ? "home"
      : location.pathname === "/projects"
        ? "gallery"
        : location.pathname.startsWith("/projects/")
          ? "detail"
          : "home";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  const goHome = () => navigate("/");
  const goGallery = () => navigate("/projects");

  return (
    <div className="relative flex min-h-screen flex-col bg-[radial-gradient(circle_at_top_left,rgba(249,220,231,0.24),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(229,206,255,0.24),transparent_30%),#fff7f8] text-foreground select-text">
      <BackgroundIcons />
      <Navbar
        currentPage={currentPage}
        onGoHome={goHome}
        onGoGallery={goGallery}
      />
      <main className="relative flex-1 overflow-hidden">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export const App: React.FC = () => (
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);

export default App;
