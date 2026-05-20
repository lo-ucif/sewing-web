import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';
import { Scissors } from 'lucide-react';

type CategoryFilter = 'All' | 'Women' | 'Men' | 'Kids' | 'Traditional' | 'Custom';

export const Projects: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as CategoryFilter) || 'All';
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>(initialCategory);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  // Synchronize category state when searchParams change
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setActiveFilter(cat as CategoryFilter);
    } else {
      setActiveFilter('All');
    }
  }, [searchParams]);

  const handleFilterClick = (filter: CategoryFilter) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', filter);
    }
    setSearchParams(searchParams);
  };

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  const filterCategories: CategoryFilter[] = ['All', 'Women', 'Men', 'Kids', 'Traditional', 'Custom'];

  return (
    <div className="min-h-screen bg-beige pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-1.5 text-gold mb-3">
            <Scissors className="w-4 h-4 transform rotate-90" />
            <span className="text-xs font-sans tracking-[0.2em] uppercase font-semibold">Atelier Portfolio</span>
          </div>
          <h1 className="text-dark text-4xl md:text-5xl lg:text-6xl font-light mb-4 tracking-wide">
            Our Tailoring Gallery
          </h1>
          <p className="text-dark/65 font-sans font-light text-sm">
            Explore our collections, alterations, and custom commissions. Filter below to view specific categories of workmanship.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterClick(category)}
              className={`text-xs font-sans tracking-widest uppercase px-5 py-3 rounded-full border transition-all duration-300 cursor-pointer ${
                activeFilter === category
                  ? 'bg-dark text-white border-dark'
                  : 'bg-transparent text-dark/70 border-dark/10 hover:border-dark hover:text-dark'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry-style / Clean Responsive Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="transform transition-all duration-500 ease-out hover:-translate-y-1"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/50 border border-dark/5 rounded-md max-w-lg mx-auto">
            <p className="text-dark/50 font-sans font-light text-sm">
              No projects found in this category. Check back soon for new commissions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Projects;
