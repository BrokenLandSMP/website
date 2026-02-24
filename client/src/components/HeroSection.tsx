export default function HeroSection() {
  // 使用用户上传的“酒馆镇”图片作为背景
  const heroImageUrl = '/hero-bg.png';

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${heroImageUrl}')`,
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark Overlay - 调暗背景以突出文字 */}
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-[#68447c]">
            BrokenLand
          </span>
          <br />
          <span className="text-slate-100">SMP</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
          一个破碎的世界，无尽的故事。在这片被魔法撕裂的大陆上，发现属于你的传奇。
        </p>

        {/* CTA Button */}
        <div className="flex justify-center animate-fade-in-delay-2">
          <a
            href="#lore"
            className="px-8 py-3 border-2 border-[#68447c] text-[#68447c] rounded-lg font-bold text-lg hover:bg-[#68447c]/10 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            探索故事
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#68447c] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#68447c] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
