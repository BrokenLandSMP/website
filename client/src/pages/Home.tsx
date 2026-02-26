import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureCards from '@/components/FeatureCards';
import PerspectiveSection from '@/components/PerspectiveSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Feature Cards */}
      <FeatureCards />

      {/* Perspective Section */}
      <PerspectiveSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
