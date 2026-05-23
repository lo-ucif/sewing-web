import React from "react";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";
import {
  slideUp,
  slideDown,
  slideLeft,
  slideRight,
  scaleIn,
  fadeIn,
  staggerContainer,
} from "../../utils/animations";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?:
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "scaleIn"
    | "fadeIn"
    | "stagger";
  threshold?: number;
  margin?: string;
  once?: boolean;
  delay?: number;
  id?: string;
  as?: "div" | "section" | "article" | "main";
}

/**
 * Wrapper component that adds scroll-triggered animations to any section.
 *
 * Usage:
 * <AnimatedSection animation="slideUp" as="section" id="about">
 *   <h2>Your Content Here</h2>
 * </AnimatedSection>
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  animation = "slideUp",
  threshold = 0.1,
  margin = "50px",
  once = true,
  delay = 0,
  id,
  as = "div",
}) => {
  const { ref, isInView } = useInView({ threshold, margin, once });

  const animationVariants: Record<string, Variants> = {
    slideUp: slideUp,
    slideDown: slideDown,
    slideLeft: slideLeft,
    slideRight: slideRight,
    scaleIn: scaleIn,
    fadeIn: fadeIn,
    stagger: staggerContainer,
  };

  const variant = animationVariants[animation];
  
  // Type-safe mapping for motion components
  const motionComponents = {
    div: motion.div,
    section: motion.section,
    article: motion.article,
    main: motion.main,
  };

  const MotionComponent = motionComponents[as];

  return (
    <MotionComponent
      ref={ref}
      id={id}
      variants={variant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={delay}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedSection;
