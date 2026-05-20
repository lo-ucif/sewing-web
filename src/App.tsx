import React, { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

type Page = "home" | "gallery" | "detail";

export const App: React.FC = () => {
  const [page, setPage] = useState<Page>("home");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const goDetail = (id: number) => {
    setSelectedId(id);
    setPage("detail");
  };

  const goGallery = () => setPage("gallery");
  const goHome = () => setPage("home");
  const goBack = () => setPage("gallery");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, selectedId]);

  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top_left,_rgba(249,220,231,0.24),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(229,206,255,0.24),_transparent_30%),#fff7f8] text-[#4b313d] select-text">
      <Navbar currentPage={page} onGoHome={goHome} onGoGallery={goGallery} />
      <main className="flex-1">
        {page === "home" && <Home onGoGallery={goGallery} />}
        {page === "gallery" && <GalleryPage onGoDetail={goDetail} />}
        {page === "detail" && selectedId !== null && <ProjectDetailPage projectId={selectedId} onGoBack={goBack} />}
      </main>
      
      <Footer />
    </div>
  );
};
export default App;



