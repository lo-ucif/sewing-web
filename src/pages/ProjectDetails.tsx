import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Calendar, User, Compass, Layers, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';
import ProjectCard from '../components/ui/ProjectCard';
import Button from '../components/ui/Button';

export const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState<string>('');
  
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    // Reset view position and initial gallery active image
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    if (project) {
      setActiveImage(project.coverImage);
    }
  }, [id, project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-beige">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-dark mb-4">Project Not Found</h2>
          <Link to="/projects">
            <Button variant="primary">Return to Portfolio</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get other projects in same category or just list other works
  const relatedProjects = projects
    .filter((p) => p.id !== project.id && (p.category === project.category || p.category !== 'Kids'))
    .slice(0, 3);

  const whatsappNumber = '15550199821';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Maison%20de%20Couture,%20I%20am%20interested%20in%20a%20project%20similar%20to%20"${encodeURIComponent(project.title)}"%20(Ref:%20${project.id}).`;

  return (
    <div className="min-h-screen bg-beige pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back Link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-dark/70 hover:text-dark text-xs font-sans tracking-widest uppercase mb-12 group focus:outline-none"
        >
          <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" /> Back to Gallery
        </Link>

        {/* Title Block */}
        <div className="mb-12">
          <span className="text-gold text-xs font-sans tracking-[0.2em] uppercase font-semibold block mb-2">
            Category: {project.category}
          </span>
          <h1 className="text-dark text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
            {project.title}
          </h1>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Visual Assets */}
          <div className="lg:col-span-7 space-y-12">
            {/* Main Showcase Image */}
            <div className="overflow-hidden rounded-md shadow-md aspect-[4/3] bg-dark relative group">
              <img
                src={activeImage}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              />
            </div>

            {/* Thumbnail Gallery (if multiple images) */}
            {project.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {project.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-24 aspect-[4/3] rounded-sm overflow-hidden shrink-0 border-2 cursor-pointer transition-all duration-300 ${
                      activeImage === img ? 'border-gold scale-95 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Before / After Comparison Feature (Highly requested feature) */}
            {project.beforeImage && project.afterImage && (
              <div className="space-y-4 pt-6 border-t border-dark/10">
                <h3 className="text-dark text-2xl font-medium tracking-wide">
                  Stitch Story & Alteration Detail
                </h3>
                <p className="text-dark/65 font-sans font-light text-xs md:text-sm">
                  Drag the slider handle to inspect the progress from draft/fitting phase to final garment.
                </p>
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  className="shadow-md rounded-md"
                />
              </div>
            )}
          </div>

          {/* Right Column: Descriptions & Details Card */}
          <div className="lg:col-span-5 space-y-10">
            {/* Project Overview Card */}
            <div className="bg-white border border-dark/5 p-8 md:p-10 rounded-md shadow-sm space-y-6">
              <h3 className="font-serif text-gold text-sm font-semibold tracking-wider uppercase border-b border-dark/10 pb-4">
                Garment Specifications
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="w-4.5 h-4.5 text-gold" />
                  <div className="text-xs font-sans">
                    <span className="text-dark/40 block">Client</span>
                    <span className="text-dark font-medium">{project.clientName}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-4.5 h-4.5 text-gold" />
                  <div className="text-xs font-sans">
                    <span className="text-dark/40 block">Completed On</span>
                    <span className="text-dark font-medium">{project.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Layers className="w-4.5 h-4.5 text-gold" />
                  <div className="text-xs font-sans">
                    <span className="text-dark/40 block">Premium Fabric</span>
                    <span className="text-dark font-medium">{project.specs.fabric || 'Selected Mills'}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Compass className="w-4.5 h-4.5 text-gold" />
                  <div className="text-xs font-sans">
                    <span className="text-dark/40 block">Craft Time</span>
                    <span className="text-dark font-medium">{project.specs.duration || 'Bespoke'}</span>
                  </div>
                </div>
              </div>

              {/* Booking CTA Link */}
              <div className="pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="gold" fullWidth className="flex items-center justify-center gap-2">
                    <MessageSquare className="w-4 h-4 fill-current" /> Commission Similar Work
                  </Button>
                </a>
              </div>
            </div>

            {/* Description Text blocks */}
            <div className="space-y-6">
              <h3 className="font-serif text-dark text-xl font-medium tracking-wide">
                Project Narrative
              </h3>
              <p className="text-dark/85 font-sans font-light text-sm leading-relaxed">
                {project.description}
              </p>
              {project.longDescription && (
                <p className="text-dark/75 font-sans font-light text-xs md:text-sm leading-relaxed border-l-2 border-gold/40 pl-4 py-1 italic">
                  {project.longDescription}
                </p>
              )}
            </div>

            {/* Features Checklist */}
            <div className="space-y-3 pt-6 border-t border-dark/10">
              <h4 className="font-sans text-dark text-xs tracking-widest uppercase font-semibold">
                Design Highlights
              </h4>
              <ul className="space-y-2 text-xs text-dark/75 font-sans">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Individual pattern drafted per client fit
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Premium interior stitching & structural linings
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Ethically sourced fabrics from premier Italian & French mills
                </li>
              </ul>
            </div>

          </div>
          
        </div>

        {/* Related Projects Showcase */}
        {relatedProjects.length > 0 && (
          <div className="mt-32 pt-16 border-t border-dark/10">
            <h2 className="font-serif text-dark text-3xl md:text-4xl font-light mb-10 tracking-wide text-center">
              Other Atelier Masterpieces
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((p) => (
                <div key={p.id}>
                  <ProjectCard project={p} />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
export default ProjectDetails;
