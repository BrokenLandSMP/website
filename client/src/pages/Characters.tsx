import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { User } from 'lucide-react';

interface Character {
  name: string;
  description: string;
}

export default function Characters() {
  const characters: Character[] = [
    {
      name: 'Fuvin',
      description: 'BrokenLand SMP 主催',
    },
    {
      name: 'Naaatako',
      description: '船队首领，神秘 coder',
    },
    {
      name: 'katebulaie233',
      description: '死因：被 fuvin ban 后成为恶搞大师',
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {characters.map((char, index) => (
              <div
                key={char.name}
                className="bg-slate-800 border border-slate-700/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 rounded-full bg-[#68447c]/20 flex items-center justify-center text-[#68447c] mb-6 group-hover:bg-[#68447c] group-hover:text-white transition-colors duration-300">
                  <User size={40} />
                </div>

                {/* Character Info */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#68447c] transition-colors">
                  {char.name}
                </h3>
                <p className="text-slate-400 text-base leading-relaxed">
                  {char.description}
                </p>
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
