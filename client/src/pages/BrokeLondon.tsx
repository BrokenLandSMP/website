import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Box } from 'lucide-react';

export default function BrokeLondon() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-[#68447c]">网站 WIP</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              BrokenLand 官方生存服务器
            </p>
          </div>

          {/* WIP Content */}
          <div className="bg-slate-800 border border-slate-700/50 rounded-xl p-12 max-w-4xl mx-auto text-center">
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
