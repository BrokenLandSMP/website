export default function CTASection() {
  return (
    <section id="join" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-amber-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            准备好了吗？
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          加入 BrokenLand SMP，成为这个破碎世界的一部分。与志同道合的玩家一起创造史诗般的故事。
        </p>

        {/* Server Info */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 mb-12 backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Server IP */}
            <div>
              <p className="text-slate-400 text-sm mb-2">服务器地址</p>
              <p className="text-xl font-mono font-bold text-amber-400 break-all">
                play.brokenland.com
              </p>
            </div>

            {/* Version */}
            <div>
              <p className="text-slate-400 text-sm mb-2">版本</p>
              <p className="text-xl font-bold text-cyan-400">
                1.20.1
              </p>
            </div>

            {/* Players */}
            <div>
              <p className="text-slate-400 text-sm mb-2">在线玩家</p>
              <p className="text-xl font-bold text-purple-400">
                12 / 50
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => {
              navigator.clipboard.writeText('play.brokenland.com');
              alert('服务器地址已复制到剪贴板！');
            }}
            className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 hover:scale-110 active:scale-95 w-full sm:w-auto"
          >
            复制服务器地址
          </button>
          <a
            href="https://discord.gg/brokenland"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-bold text-lg hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto text-center"
          >
            加入 Discord
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-12 pt-12 border-t border-slate-700/50">
          <p className="text-slate-500 text-sm">
            需要帮助？查看我们的{' '}
            <a href="#rules" className="text-amber-400 hover:text-amber-300 transition-colors">
              常见问题
            </a>
            {' '}或在 Discord 中联系管理员。
          </p>
        </div>
      </div>
    </section>
  );
}
