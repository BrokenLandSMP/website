import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureCards from '@/components/FeatureCards';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

/**
 * BrokenLand SMP 官网主页
 * 
 * 设计风格：暗黑奇幻
 * - 深蓝色/深紫色背景 (#0f172a, #1e293b)
 * - 金色/青色点缀 (#fbbf24, #06b6d4)
 * - Playfair Display + Inter 字体组合
 * - 流畅的悬停和过渡动画
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Feature Cards */}
      <FeatureCards />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
