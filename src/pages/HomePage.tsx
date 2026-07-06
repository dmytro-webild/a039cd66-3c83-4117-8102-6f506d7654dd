// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in the sibling sections/ folder (one file per section).
// Edit those section files directly. Non-block content (wrappers,
// non-inlinable sections) is preserved inline; extracted section blocks
// become component refs.

import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import ServicesSection from './HomePage/sections/Services';
import AboutSection from './HomePage/sections/About';
import FeaturesSection from './HomePage/sections/Features';
import TestimonialsSection from './HomePage/sections/Testimonials';
import ContactSection from './HomePage/sections/Contact';

export default function HomePage(): React.JSX.Element {
  return (
<StyleProvider siteBackground="aurora" heroBackground="horizonGlow" buttonVariant="stagger">
        <SiteBackgroundSlot />

        

        <HeroSection />

        <ServicesSection />

        <AboutSection />

        <FeaturesSection />

        <TestimonialsSection />

        <ContactSection />

        
      </StyleProvider>
  );
}
