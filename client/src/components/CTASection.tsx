export default function CTASection() {
  return (
    <section id="join" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-[#68447c]">
            加入我们的冒险
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          BrokenLand 是一个充满故事与传奇的世界。与志同道合的创作者和冒险家一起，书写属于你的篇章。
        </p>

        {/* Call to Action */}
        <div className="flex justify-center gap-4">
          <a
            href="https://brokenland-smp.fandom.com/zh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#68447c] text-white rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#68447c]/50 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            查看 Wiki
          </a>
          <a
            href="https://qun.qq.com/universal-share/share?ac=1&authKey=4w%2BIgjNFtjb8XP%2F8opgwd4FeZHEz%2BD33KqgWctFknIJ9kmCB1Z4bGNtV4uSiff%2Fa&busi_data=eyJncm91cENvZGUiOiI2NjQxODQxODUiLCJ0b2tlbiI6IlV5ZXAxZGtRUTJXZklQeUJkRGNKTU8vUjR0Vi9sWmh2akN6RWU3OTZ3MGMrdDV3ZzdJZzkyNTF5NjYwT21zbnYiLCJ1aW4iOiIzNTU0OTczNzA3In0%3D&data=saydWxXr7HmUz5ZmLYGcYzz_ZCo1mTe4W7o8DNd2zf5lFakZ_7bxlWqdlUKInvHE9_MfbpYkQorf76Sz9u2sRg&svctype=4&tempid=h5_group_info"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#68447c] text-white rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#68447c]/50 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            加入 QQ 群
          </a>
        </div>
      </div>
    </section>
  );
}
