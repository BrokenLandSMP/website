import { Book, Tv } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Book size={20} />, label: 'Wiki', href: 'https://brokenland-smp.fandom.com/zh' },
    { icon: <Tv size={20} />, label: 'Bilibili', href: 'https://space.bilibili.com/630817314' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#68447c] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BL</span>
              </div>
              <span className="text-lg font-bold text-[#68447c]">
                BrokenLand
              </span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              一个破碎的世界，无尽的故事。在 BrokenLand SMP 中发现属于你的传奇。
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-white font-semibold mb-4">关注我们</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-[#68447c]/20 text-slate-400 hover:text-[#68447c] transition-all duration-300 flex items-center justify-center"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/50 pt-8">
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm">
              © {currentYear} BrokenLand SMP. All rights reserved.
            </p>
            <p className="text-slate-600 text-sm">
              Made with{' '}
              <span className="text-[#68447c]">♥</span>
              {' '}by the BrokenLand Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
