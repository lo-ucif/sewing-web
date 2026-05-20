import React from 'react';
import { projects } from '../data/projects';
import type { Project } from '../types/project';

interface SimpleGridGalleryProps {
  onProjectClick: (project: Project) => void;
}

export const SimpleGridGallery: React.FC<SimpleGridGalleryProps> = ({ onProjectClick }) => {
  return (
    <section id="gallery" className="py-20 bg-body-bg">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-rose-primary text-xs font-sans font-bold tracking-widest uppercase block mb-2">
            معرض الأعمال
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-4">
            أحدث تصاميمي اليدوية
          </h2>
          <div className="w-16 h-[2px] bg-divider mx-auto mb-4" />
          <p className="font-sans text-muted text-sm leading-relaxed">
            مجموعة مختارة من الفساتين والعباءات والتعديلات التي قمت بخياطتها يدوياً في مشغلي بحب ودقة متناهية.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectClick(project)}
              className="bg-card rounded-xl overflow-hidden border border-divider/20 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
            >
              {/* Image Frame */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-wine-dark relative">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Title & Info */}
              <div className="p-6 text-right">
                <span className="text-rose-primary font-sans text-xs font-semibold block mb-1">
                  {project.category === 'Women' && 'فساتين نسائية'}
                  {project.category === 'Traditional' && 'ملابس تراثية وعباءات'}
                  {project.category === 'Kids' && 'ملابس أطفال'}
                  {project.category === 'Custom' && 'تعديلات وتصميم خاص'}
                </span>
                
                <h3 className="font-serif text-dark text-lg font-bold group-hover:text-rose-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="font-sans text-muted text-xs line-clamp-2 mt-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default SimpleGridGallery;
