export default function CTASection() {
  return (
    <section id="join" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-amber-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            加入我们的冒险
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          BrokenLand 是一个充满故事与传奇的世界。与志同道合的创作者和冒险家一起，书写属于你的篇章。
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://discord.gg/brokenland"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 hover:scale-110 active:scale-95 w-full sm:w-auto"
          >
            加入 Discord 社区
          </a>
          <a
            href="#lore"
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-bold text-lg hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto text-center"
          >
            了解更多故事
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-12 pt-12 border-t border-slate-700/50">
          <p className="text-slate-500 text-sm">
            想要了解 BrokenLand 的世界观？查看我们的{' '}
            <a href="#lore" className="text-amber-400 hover:text-amber-300 transition-colors">
              世界百科
            </a>
            {' '}或在 Discord 中与我们交流。
          </p>
        </div>
      </div>
    </section>
  );
}
