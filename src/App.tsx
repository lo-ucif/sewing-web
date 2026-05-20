import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

type Page = "home" | "gallery" | "detail";

export const App: React.FC = () => {
  const [page, setPage] = useState<Page>("home");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const isPoppingRef = useRef(false);

  const goDetail = (id: number) => {
    setSelectedId(id);
    setPage("detail");
  };

  const goGallery = () => setPage("gallery");
  const goHome = () => setPage("home");
  const goBack = () => setPage("gallery");

  useEffect(() => {
    window.history.replaceState({ page: "home", selectedId: null }, "");

    const onPopState = (event: PopStateEvent) => {
      const state = event.state as { page?: Page; selectedId?: number | null } | null;
      isPoppingRef.current = true;

      if (state?.page === "detail" && typeof state.selectedId === "number") {
        setSelectedId(state.selectedId);
        setPage("detail");
        return;
      }

      if (state?.page === "gallery") {
        setPage("gallery");
        return;
      }

      setSelectedId(null);
      setPage("home");
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (isPoppingRef.current) {
      isPoppingRef.current = false;
      return;
    }

    window.history.pushState({ page, selectedId }, "");
  }, [page, selectedId]);

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
