import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FloatingBubble from "../components/FloatingBubble";
import { projects } from "../data/projects";
import type { Project } from "../types/project";

type GalleryCategory =
  | "الكل"
  | "دسيكـ"
  | "فساتين أعراس"
  | "ستايل منزلي"
  | "ستايل قسنطيني"
  | "ستايل قبائلي";

const categories: GalleryCategory[] = [
  "الكل",
  "دسيكـ",
  "فساتين أعراس",
  "ستايل منزلي",
  "ستايل قسنطيني",
  "ستايل قبائلي",
];

const matchesCategory = (
  project: Project,
  category: GalleryCategory,
): boolean => {
  if (category === "الكل") return true;
  return project.category === category;
};

const cardLabel = (project: Project): string => project.category;

const GalleryPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("الكل");
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category") as GalleryCategory | null;
    if (category && categories.includes(category)) {
      setActiveCategory(category);
    }
  }, [location.search]);

  const categoryCounts = useMemo(() => {
    return categories.reduce<Record<GalleryCategory, number>>(
      (acc, category) => {
        acc[category] = projects.filter((project) =>
          matchesCategory(project, category),
        ).length;
        return acc;
      },
      {} as Record<GalleryCategory, number>,
    );
  }, []);

  const bubbleItems = useMemo(() => {
    return categories.map((category) => ({
      key: category,
      label: `${category} (${categoryCounts[category]})`,
    }));
  }, [categoryCounts]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      matchesCategory(project, activeCategory),
    );
  }, [activeCategory]);

  return (
    <div dir="rtl" className="pb-12 pt-24">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-8 lg:px-10">
        <h1 className="mb-6 text-right text-2xl font-semibold text-[#3d2734]">
          معرض الأعمال
        </h1>{" "}
        <div
          key={activeCategory}
          ref={gridRef}
          className="animate-[fadeIn_.3s_ease]"
          style={{ animationFillMode: "both" }}
        >
          {filteredProjects.length === 0 ? (
            <p className="py-20 text-center text-lg text-muted">
              لا توجد أعمال في هذا التصنيف حالياً 🧵
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProjects.map((project) => {
                const numericId =
                  projects.findIndex((item) => item.id === project.id) + 1;
                return (
                  <article
                    key={project.id}
                    onClick={() => navigate(`/projects/${numericId}`)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="aspect-4/5 overflow-hidden">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-2 p-4 text-right">
                      <span className="text-xs font-semibold text-[#b26488]">
                        {cardLabel(project)}
                      </span>
                      <h3 className="line-clamp-2 text-base font-semibold text-[#3d2734]">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted">{project.date}</p>
                      <p className="pt-1 text-sm font-semibold text-[#8e5a72] transition group-hover:text-[#b76487]">
                        شوفي التفاصيل
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <FloatingBubble
        items={bubbleItems}
        onSelect={(key) => {
          setActiveCategory(key as GalleryCategory);
          gridRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
      />

      <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
    </div>
  );
};

export default GalleryPage;
