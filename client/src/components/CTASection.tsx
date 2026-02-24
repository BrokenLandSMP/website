export default function CTASection() {
  return (
    <section id="join" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-purple-500">
            加入我们的冒险
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          BrokenLand 是一个充满故事与传奇的世界。与志同道合的创作者和冒险家一起，书写属于你的篇章。
        </p>

        {/* Call to Action */}
        <div className="flex justify-center">
          <a
            href="https://brokenland-smp.fandom.com/zh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-purple-600 text-white rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-purple-600/50 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            查看 Wiki
          </a>
        </div>
      </div>
    </section>
  );
}
