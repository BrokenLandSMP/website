import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function QQGroup() {
  const groupNumber = '664184185';

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-[#68447c]">加入 QQ 群</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              与志同道合的创作者和冒险家一起，探索 BrokenLand 的世界
            </p>
          </div>

          {/* Group Info Card */}
          <div className="bg-slate-800 border border-slate-700/50 rounded-xl p-8 sm:p-12 mb-12">
            <div className="text-center">
              <div className="mb-8">
                <p className="text-slate-400 text-lg mb-2">群号</p>
                <p className="text-5xl sm:text-6xl font-bold text-white mb-4">
                  {groupNumber}
                </p>
              </div>

              <a
                href={`https://qm.qq.com/cgi-bin/qm/qr?k=YOUR_KEY&jump_from=webapi`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-5 bg-[#68447c] text-white rounded-lg font-bold text-xl hover:shadow-2xl hover:shadow-[#68447c]/50 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                点击加入 QQ 群
              </a>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center">
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