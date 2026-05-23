# Scroll Animation Guide

This guide explains how to add scroll-triggered animations throughout the Maison de Couture website using the custom animation system.

## System Overview

The animation system consists of three main parts:

### 1. **useInView Hook** (`src/hooks/useInView.ts`)

A custom React hook using Intersection Observer API to detect when elements come into view.

```tsx
import { useInView } from "../../hooks/useInView";

const { ref, isInView } = useInView({
  threshold: 0.1, // Element must be 10% visible to trigger
  margin: "50px", // Trigger 50px before element enters viewport
  once: true, // Animation triggers only once (default)
});

return <motion.div ref={ref}> ... </motion.div>;
```

### 2. **Animation Variants** (`src/utils/animations.ts`)

Predefined Framer Motion animation patterns ready to use.

Available animations:

- `fadeIn` - Simple fade in
- `slideUp` - Fade in + slide up
- `slideDown` - Fade in + slide down
- `slideLeft` - Fade in + slide from left
- `slideRight` - Fade in + slide from right
- `scaleIn` - Scale up + fade in
- `staggerContainer` - Container for staggering children
- `staggerItem` - Child animation for staggered effects

### 3. **Framer Motion** (`motion` components)

Your project already has Framer Motion installed. Use `motion.*` components for animations.

---

## Implementation Examples

### Pattern 1: Simple Scroll-Triggered Section

For basic sections that animate in when scrolled to:

```tsx
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";
import { slideUp } from "../../utils/animations";

export const MySection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24">
      <motion.h2
        variants={slideUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-4xl font-medium"
      >
        Section Title
      </motion.h2>

      <motion.p
        variants={slideUp}
        custom={1} // Adds 0.1s delay per index for sequential animation
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-lg mt-4"
      >
        Some description text
      </motion.p>
    </section>
  );
};
```

### Pattern 2: Staggered Grid Animation

For grids of cards that animate in sequence:

```tsx
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";
import { staggerContainer, staggerItem } from "../../utils/animations";

export const ProjectGrid: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {items.map((item) => (
          <motion.div key={item.id} variants={staggerItem}>
            <ProjectCard project={item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
```

### Pattern 3: Different Animations for Different Elements

Mix and match animations for variety:

```tsx
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";
import { slideUp, slideLeft, scaleIn } from "../../utils/animations";

export const ComplexSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="flex gap-12">
      {/* Left side: slides in from left */}
      <motion.div
        variants={slideLeft}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex-1"
      >
        <img src="..." alt="..." />
      </motion.div>

      {/* Right side: scales and fades in */}
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex-1"
      >
        <h2>Title</h2>
        <p>Description</p>
      </motion.div>
    </section>
  );
};
```

---

## Components Already Updated with Animations

✅ **FeaturedProjects** - Cards animate in with stagger
✅ **Categories** - Category cards animate with stagger
✅ **Hero** - Title, subtitle, and CTAs animate in sequence

---

## Where to Add More Animations

### High-Priority Sections:

1. **AboutSection.tsx** - Timeline items, founder portrait
2. **Testimonials.tsx** - Testimonial cards
3. **ContactSection.tsx** - Form, contact info blocks
4. **Projects.tsx** - Project grid, filters
5. **ProjectDetailPage.tsx** - Gallery, specifications, before/after slider

### Lower-Priority (But Nice):

- Logo animations on navbar
- Icon animations in skill sections
- Text reveal animations on secondary headings
- Button hover animations (already exist with Tailwind)

---

## Tips & Best Practices

1. **useInView Parameters:**
   - `threshold: 0.1` for "appears when 10% visible" (most common)
   - `threshold: 0.5` for "appears when 50% visible" (for impact)
   - `margin: '50px'` to trigger 50px before element enters (creates anticipation)

2. **Custom Delays:**
   Use the `custom` prop to vary animation timing:

   ```tsx
   <motion.div
     custom={0}  // No delay
     animate={isInView ? 'visible' : 'hidden'}
   />
   <motion.div
     custom={1}  // 0.1s delay
     animate={isInView ? 'visible' : 'hidden'}
   />
   ```

3. **Performance:**
   - `useInView` uses Intersection Observer (very efficient)
   - Only animate when `isInView === true`
   - Use `once: true` to prevent unnecessary re-renders

4. **RTL Compatibility:**
   - `slideLeft` on RTL becomes slide from right (correct behavior)
   - Test animations in RTL layout to ensure they feel natural

5. **Mobile Considerations:**
   - Animations run on mobile but may be less noticeable
   - Consider reducing `duration` on mobile if animations feel slow
   - Use `md:` and `lg:` responsive classes for conditional animations

---

## Creating Custom Animations

If you need a custom animation not in the library:

```tsx
const customAnimation: Variants = {
  hidden: {
    opacity: 0,
    rotate: -10,
    y: 20,
  },
  visible: (custom = 0) => ({
    opacity: 1,
    rotate: 0,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

// Use like any other variant:
<motion.div
  variants={customAnimation}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
/>;
```

Add custom variants to `src/utils/animations.ts` for reusability.

---

## Debugging Animations

If animations aren't working:

1. Check that the component has `ref={ref}` on the section wrapper
2. Confirm `animate={isInView ? 'visible' : 'hidden'}` is set
3. Verify Framer Motion is imported: `import { motion } from 'framer-motion'`
4. Check browser DevTools > Performance to see if animations are smooth
5. Try lowering the `threshold` value (e.g., 0.01) to see if the element is in the viewport

---

## Next Steps

1. Review the updated components: FeaturedProjects, Categories, Hero
2. Pick 2-3 sections to add animations to
3. Test on mobile and desktop
4. Adjust `threshold` and `margin` values to your preference
5. Add more custom variants as needed

Happy animating! 🎬✨
