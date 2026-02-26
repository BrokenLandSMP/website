import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Character {
  name: string;
  description: string;
  image?: string;
}

export default function Characters() {
  const characters: Character[] = [
    {
      name: 'Fuvin',
      description: 'BrokenLand SMP 主催',
      image: '/char-fuvin.png',
    },
    {
      name: 'Naaatako',
      description: '船队首领，神秘 coder',
      image: '/char-naaatako.png',
    },
    {
      name: 'CHa2OnG',
      description: '打赢复活赛了',
      image: '/char-cha2ong.png',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-[#68447c]">角色介绍</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              探索 BrokenLand 中的传奇人物及其背后的故事
            </p>
          </div>

          {/* Characters Grid */}
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {characters.map((char, index) => (
              <div
                key={char.name}
                className="bg-slate-800 border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group flex flex-col md:flex-row"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Character Image Area */}
                <div className="md:w-1/3 h-80 md:h-auto bg-slate-950/50 flex items-center justify-center overflow-hidden relative">
                  {char.image ? (
                    <img 
                      src={char.image} 
                      alt={char.name}
                      className="h-full w-full object-contain p-6 md:p-8 transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="text-slate-700 font-bold text-xl">暂无图片</div>';
                      }}
                    />
                  ) : (
                    <div className="text-slate-700 font-bold text-xl">暂无图片</div>
                  )}
                </div>

                {/* Character Info */}
                <div className="md:w-2/3 p-8 flex items-start">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#68447c] transition-colors">
                      {char.name}
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      {char.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
