import React, { useMemo, useRef, useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../types/project';

type GalleryCategory =
  | 'الكل'
  | 'نساء'
  | 'بيبي'
  | 'فساتين أعراس'
  | 'ستايل منزلي'
  | 'ستايل قسنطيني'
  | 'ستايل قبائلي';

interface GalleryPageProps {
  onGoHome: () => void;
  onGoDetail: (id: number) => void;
}

const categories: GalleryCategory[] = [
  'الكل',
  'نساء',
  'بيبي',
  'فساتين أعراس',
  'ستايل منزلي',
  'ستايل قسنطيني',
  'ستايل قبائلي',
];

const matchesCategory = (project: Project, category: GalleryCategory): boolean => {
  if (category === 'الكل') return true;
  if (category === 'نساء') return project.category === 'Women';
  if (category === 'بيبي') return project.category === 'Kids';
  if (category === 'فساتين أعراس') return /زفاف|عرس/i.test(project.title + ' ' + project.description);
  if (category === 'ستايل منزلي') return /منزلي|البيت/i.test(project.description + ' ' + (project.longDescription ?? ''));
  if (category === 'ستايل قسنطيني') return project.category === 'Traditional';
  if (category === 'ستايل قبائلي') return project.category === 'Custom';
  return false;
};

const cardLabel = (project: Project): string => {
  if (project.category === 'Women') return 'نساء';
  if (project.category === 'Kids') return 'بيبي';
  if (project.category === 'Traditional') return 'تقليدي';
  if (project.category === 'Custom') return 'تفصيل خاص';
  return 'رجالي';
};

const GalleryPage: React.FC<GalleryPageProps> = ({ onGoHome, onGoDetail }) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('الكل');
  const gridRef = useRef<HTMLDivElement | null>(null);

  const categoryCounts = useMemo(() => {
    return categories.reduce<Record<GalleryCategory, number>>((acc, category) => {
      acc[category] = projects.filter((project) => matchesCategory(project, category)).length;
      return acc;
    }, {} as Record<GalleryCategory, number>);
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => matchesCategory(project, activeCategory));
  }, [activeCategory]);

  return (
    <div dir="rtl" className="px-4 pb-14 pt-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-right text-2xl font-semibold text-[#3d2734] md:text-3xl">معرض الأعمال</h1>
          <button
            type="button"
            onClick={onGoHome}
            className="rounded-full border border-[#c86c94] px-4 py-2 text-sm font-semibold text-[#c86c94] transition hover:bg-[#fff0f4]"
          >
            رجوع للرئيسية
          </button>
        </div>

        <div className="sticky top-20 z-30 mb-8 border-y border-[#f0d8e3] py-3 backdrop-blur-sm">
          <div className="overflow-x-auto">
            <div className="mx-auto flex min-w-max justify-center gap-2 whitespace-nowrap px-1">
              {categories.map((category) => {
                const isActive = category === activeCategory;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category);
                      gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      isActive
                        ? 'border-[#111111] bg-[#111111] text-white'
                        : 'border-[#d9b7c5] bg-transparent text-[#6b515f] hover:border-[#b76487]'
                    }`}
                  >
                    {category} ({categoryCounts[category]})
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div key={activeCategory} ref={gridRef} className="animate-[fadeIn_.3s_ease]" style={{ animationFillMode: 'both' }}>
          {filteredProjects.length === 0 ? (
            <p className="py-20 text-center text-lg text-[#7d5a70]">لا توجد أعمال في هذا التصنيف حالياً 🧵</p>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProjects.map((project) => {
                const numericId = projects.findIndex((item) => item.id === project.id) + 1;
                return (
                  <article
                    key={project.id}
                    onClick={() => onGoDetail(numericId)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-[#f0d8e3] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-2 p-4 text-right">
                      <span className="text-xs font-semibold text-[#b26488]">{cardLabel(project)}</span>
                      <h3 className="line-clamp-2 text-base font-semibold text-[#3d2734]">{project.title}</h3>
                      <p className="text-xs text-[#7d5a70]">{project.date}</p>
                      <p className="pt-1 text-sm font-semibold text-[#8e5a72] transition group-hover:text-[#b76487]">شوفي التفاصيل</p>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
    </div>
  );
};

export default GalleryPage;
