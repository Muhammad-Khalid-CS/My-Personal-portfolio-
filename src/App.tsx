import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { EducationTimeline } from './components/EducationTimeline';
import { ServicesSection } from './components/ServicesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-[var(--main-color)] selection:text-black font-sans relative overflow-x-hidden">
      {/* Top Fixed Header with Glowing Logo & Responsive Navigation */}
      <Navbar />

      {/* Main Content Sections matching Usman's site */}
      <main>
        {/* Home / Hero Section with animated typewriter & glowing avatar */}
        <HomeSection />

        {/* Education Timeline Section */}
        <EducationTimeline />

        {/* Services Section with glowing color-inverting cards */}
        <ServicesSection />

        {/* Reviews Section with reviewer cards & 5 golden stars */}
        <ReviewsSection />

        {/* Contact Section with inputs & icon-only contact reach */}
        <ContactSection />
      </main>

      {/* Footer with social icons & navigation */}
      <Footer />
    </div>
  );
}
