import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Box, ChevronDown } from 'lucide-react';

export default function BrokeLondon() {
  const heroImageUrl = '/brokelondon-hero-bg.png';

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${heroImageUrl}')`,
            backgroundAttachment: 'fixed',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-[#68447c]">
              BrokeLondon 破产伦敦
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
            BrokenLand SMP 官方生存服务器。在这里开始你的冒险，与朋友们一起建设、探索、战斗。
          </p>

          {/* CTA Button */}
          <div className="flex justify-center gap-4 animate-fade-in-delay-2">
            <a
              href="#info"
              className="px-8 py-3 border-2 border-[#68447c] text-[#68447c] rounded-lg font-bold text-lg hover:bg-[#68447c]/10 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              服务器信息
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="text-[#68447c] flex flex-col items-center gap-1">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">

          {/* Server Info Section */}
          <div id="info" className="bg-slate-800 border border-slate-700/50 rounded-xl p-12 max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-[#68447c]/20 flex items-center justify-center text-[#68447c] mx-auto mb-8">
              <Box size={40} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-8">服务器信息</h2>
            
            <div className="space-y-6 text-lg">
              <div className="flex flex-col items-center gap-2">
                <span className="text-slate-500 uppercase tracking-wider text-sm font-semibold">服务器群号</span>
                <span className="text-2xl text-slate-100 font-mono">711466365</span>
              </div>
              
              <div className="w-12 h-px bg-slate-700 mx-auto my-4"></div>
              
              <div className="flex flex-col items-center gap-2">
                <span className="text-slate-500 uppercase tracking-wider text-sm font-semibold">密码</span>
                <span className="text-2xl text-[#68447c] font-bold">破产伦敦</span>
              </div>
            </div>

            <div className="mt-12 inline-block px-6 py-2 bg-[#68447c]/10 border border-[#68447c]/30 rounded-full text-[#68447c] font-medium">
              正在建设中，敬请期待
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-16 text-center">
            <a
              href="/"
              className="inline-flex items-center text-slate-400 hover:text-[#68447c] transition-colors font-medium"
            >
              ← 返回主页
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
