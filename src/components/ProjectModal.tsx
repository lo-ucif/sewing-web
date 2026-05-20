import React from 'react';
import { X, Calendar, User, Clock, Scissors, MessageSquare } from 'lucide-react';
import type { Project } from '../types/project';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const whatsappNumber = '15550199821';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `مرحباً، أود استشارتكِ وتفصيل قطعة مشابهة لـ "${project.title}" (رقم القطعة: ${project.id}).`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-wine-dark/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content container */}
      <div className="relative bg-card rounded-2xl max-w-3xl w-full overflow-hidden shadow-xl border border-divider/20 z-10 transform transition-all duration-300 max-h-[90vh] flex flex-col text-right">
        
        {/* Close Button Header */}
        <div className="absolute top-4 left-4 z-20">
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs text-wine-dark hover:bg-rose-primary hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
            aria-label="إغلاق"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Visual Cover Image */}
            <div className="aspect-[4/5] bg-wine-dark w-full overflow-hidden relative">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description & Specifications details */}
            <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                {/* Category tag */}
                <span className="text-rose-primary font-sans text-xs font-bold tracking-wider uppercase block">
                  {project.category === 'Women' && 'فساتين نسائية'}
                  {project.category === 'Traditional' && 'ملابس تراثية وعباءات'}
                  {project.category === 'Kids' && 'ملابس أطفال'}
                  {project.category === 'Custom' && 'تعديلات وتصميم خاص'}
                </span>

                <h3 className="font-serif text-dark text-xl md:text-2xl font-bold leading-snug">
                  {project.title}
                </h3>

                <p className="font-sans text-muted text-xs leading-relaxed">
                  {project.longDescription || project.description}
                </p>

                {/* Technical Specifications */}
                <div className="border-t border-divider/20 pt-4 space-y-3 font-sans text-xs">
                  {project.clientName && (
                    <div className="flex items-center justify-between flex-row-reverse">
                      <span className="text-muted/65 flex items-center gap-1.5 flex-row-reverse">
                        <User className="w-3.5 h-3.5 text-rose-primary" /> صاحبة القطعة:
                      </span>
                      <span className="text-dark font-medium">{project.clientName}</span>
                    </div>
                  )}

                  {project.specs.fabric && (
                    <div className="flex items-center justify-between flex-row-reverse">
                      <span className="text-muted/65 flex items-center gap-1.5 flex-row-reverse">
                        <Scissors className="w-3.5 h-3.5 text-rose-primary" /> نوع القماش:
                      </span>
                      <span className="text-dark font-medium">{project.specs.fabric}</span>
                    </div>
                  )}

                  {project.specs.duration && (
                    <div className="flex items-center justify-between flex-row-reverse">
                      <span className="text-muted/65 flex items-center gap-1.5 flex-row-reverse">
                        <Clock className="w-3.5 h-3.5 text-rose-primary" /> مدة العمل:
                      </span>
                      <span className="text-dark font-medium">{project.specs.duration}</span>
                    </div>
                  )}

                  {project.date && (
                    <div className="flex items-center justify-between flex-row-reverse">
                      <span className="text-muted/65 flex items-center gap-1.5 flex-row-reverse">
                        <Calendar className="w-3.5 h-3.5 text-rose-primary" /> تاريخ الخياطة:
                      </span>
                      <span className="text-dark font-medium">{project.date}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Order/WhatsApp action button */}
              <div className="pt-4 border-t border-divider/10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba56] text-white text-xs py-3 rounded-[30px] font-sans font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4 fill-current" /> أود تفصيل قطعة مشابهة
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
export default ProjectModal;
