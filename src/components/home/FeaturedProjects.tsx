import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import Button from "../ui/Button";
import { useInView } from "../../hooks/useInView";
import { slideUp, staggerContainer, staggerItem } from "../../utils/animations";

export const FeaturedProjects: React.FC = () => {
  // Take the first 3 projects for the home page showcase
  const featured = projects.slice(0, 3);
  const { ref, isInView } = useInView({ threshold: 0.1, margin: "50px" });

  return (
    <section ref={ref} className="bg-beige py-24 border-b border-dark/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-xl">
            <span className="text-gold text-xs font-sans tracking-[0.2em] uppercase font-semibold block mb-3">
              Curated Masterpieces
            </span>
            <h2 className="text-dark text-4xl md:text-5xl font-medium tracking-wide">
              Showcasing Our Signature Craft
            </h2>
          </div>
          <p className="text-dark/65 font-sans font-light text-sm max-w-sm leading-relaxed">
            Each commission is a unique collaboration, crafted from the finest
            fabrics, and tailored to provide the ultimate fit. Explore our
            latest works.
          </p>
        </motion.div>

        {/* Asymmetric Luxury Grid Layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16"
        >
          {/* Main Large Item */}
          {featured[0] && (
            <motion.div variants={staggerItem} className="md:col-span-7 h-full">
              <ProjectCard project={featured[0]} />
            </motion.div>
          )}

          {/* Staggered Right Items */}
          <div className="md:col-span-5 flex flex-col gap-8 justify-between">
            {featured[1] && (
              <motion.div variants={staggerItem} className="flex-1">
                <ProjectCard project={featured[1]} />
              </motion.div>
            )}
            {featured[2] && (
              <motion.div variants={staggerItem} className="flex-1">
                <ProjectCard project={featured[2]} />
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center"
        >
          <Link to="/projects">
            <Button variant="outline" className="flex items-center gap-2">
              Browse Entire Portfolio <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
export default FeaturedProjects;
