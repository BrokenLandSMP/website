export default function HeroSection() {
  const heroImageUrl =
    'https://private-us-east-1.manuscdn.com/sessionFile/Vy9yNvzfuMwjCRx9UrxlpN/sandbox/kT9fWzmqNCtrk1YscpPuO4-img-1_1771895144000_na1fn_YnJva2VubGFuZC1oZXJvLWJn.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVnk5eU52emZ1TXdqQ1J4OVVyeGxwTi9zYW5kYm94L2tUOWZXem1xTkN0cmsxWXNjcFB1TzQtaW1nLTFfMTc3MTg5NTE0NDAwMF9uYTFmbl9Zbkp2YTJWdWJHRnVaQzFvWlhKdkxXSm4ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=a9KlnwVm0tDchAunf8Bv9cdB4HbYtA8E89NYRtStKHijvf37rPk34AFyEI2o4MU6B7~i7voDI85~NjdJFoCv1-6C8wxAgERXxummFPhWTCvVb0UuYWin1aypVusAe5u91mukv~UaXd60zwkVVa6rXro~KYFS3llUskBbyjGfh5cuPgMkKSw6t750KIvvfCJjN3GqvGWd3iTa8bCkZBzuYq0FwoVVna3RLLgg0oP4SGsP~C3nihHVVxMkWHdIcA9vNgKy2Poc5Bis64xXfrDldx3FRurJW0mGggZHsUgTLUb26lRMC6V7YwNtfXk7ZmqWZmmSq6o3ibzd0wwjLRwOJg__';

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
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
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
            className="px-8 py-3 border-2 border-amber-400 text-amber-400 rounded-lg font-bold text-lg hover:bg-amber-400/10 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            探索故事
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-amber-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
