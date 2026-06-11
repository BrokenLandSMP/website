import { useLocation } from 'wouter';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function WikiMigrate() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            返回首页
          </button>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              BrokenLand SMP Wiki 迁移公告
            </h1>
            <p className="text-lg text-slate-400">
              重要信息 · 2024年
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Migration Completed Section */}
            <section className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">迁移已完成</h2>
                  <p className="text-slate-300">
                    我们的 Wiki 已成功从 Fandom 迁移至 Miraheze 平台
                  </p>
                </div>
              </div>
            </section>

            {/* Current Status */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">当前状态</h2>
              <div className="grid gap-4">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">✅ 已完成</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">•</span>
                      <span>原 Fandom Wiki 全部内容迁移至 Miraheze</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Wiki 基础架构部署完成</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">•</span>
                      <span>用户账户和权限配置完成</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">🚀 即将开始</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Wiki 全面重构，使其更加美观易用</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>改进页面设计和用户体验</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>优化内容组织和搜索功能</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Wiki Link */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">访问新 Wiki</h2>
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-8 text-center">
                <p className="text-slate-200 mb-4">
                  现在可以访问我们的新 Wiki 平台：
                </p>
                <a
                  href="https://wiki.brokenland.top"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors text-lg"
                >
                  wiki.brokenland.top
                  <ExternalLink size={20} />
                </a>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">常见问题</h2>
              <div className="space-y-4">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <h3 className="font-semibold text-white mb-2">Q: 旧的 Fandom Wiki 怎么办？</h3>
                  <p className="text-slate-300">
                    A: 旧 Wiki 仍可访问以查阅历史内容，但所有新更新都将在 Miraheze 进行。
                  </p>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <h3 className="font-semibold text-white mb-2">Q: 我可以参与 Wiki 编辑吗？</h3>
                  <p className="text-slate-300">
                    A: 可以！我们欢迎社区成员的贡献。访问新 Wiki 并创建账户来参与编辑。
                  </p>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <h3 className="font-semibold text-white mb-2">Q: 重构需要多长时间？</h3>
                  <p className="text-slate-300">
                    A: 重构是一个持续的过程，我们将逐步改进页面设计和用户体验。敬请期待！
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">有问题？</h2>
              <p className="text-slate-300 mb-6">
                如有任何关于 Wiki 迁移的问题，欢迎联系我们的团队。
              </p>
              <a
                href="/qqgroup"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 transition-colors text-white font-semibold py-2 px-6 rounded-lg"
              >
                加入 QQ 群
              </a>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
