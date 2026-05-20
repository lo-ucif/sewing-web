import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<GalleryPage />} />
      <Route path="/projects/:id" element={<ProjectDetailPage />} />
      <Route path="/categories" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/contact" element={<Home />} />
      {/* Fallback to Home */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
export default AppRoutes;
