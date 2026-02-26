import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: '角色', href: '/characters', isExternal: false },
    { label: 'Wiki', href: 'https://brokenland-smp.fandom.com/zh', isExternal: true },
    { label: 'QQ群', href: 'https://qun.qq.com/universal-share/share?ac=1&authKey=4w%2BIgjNFtjb8XP%2F8opgwd4FeZHEz%2BD33KqgWctFknIJ9kmCB1Z4bGNtV4uSiff%2Fa&busi_data=eyJncm91cENvZGUiOiI2NjQxODQxODUiLCJ0b2tlbiI6IlV5ZXAxZGtRUTJXZklQeUJkRGNKTU8vUjR0Vi9sWmh2akN6RWU3OTZ3MGMrdDV3ZzdJZzkyNTF5NjYwT21zbnYiLCJ1aW4iOiIzNTU0OTczNzA3In0%3D&data=saydWxXr7HmUz5ZmLYGcYzz_ZCo1mTe4W7o8DNd2zf5lFakZ_7bxlWqdlUKInvHE9_MfbpYkQorf76Sz9u2sRg&svctype=4&tempid=h5_group_info', isExternal: true },
    { label: 'GitHub', href: 'https://github.com/BrokenLandSMP', isExternal: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 backdrop-blur-sm border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Image */}
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="BrokenLand Logo" 
                className="h-10 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.isExternal ? "_blank" : "_self"}
                rel={link.isExternal ? "noopener noreferrer" : ""}
                className="text-slate-300 hover:text-[#68447c] transition-colors duration-300 font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-[#68447c] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-700/50">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.isExternal ? "_blank" : "_self"}
                  rel={link.isExternal ? "noopener noreferrer" : ""}
                  className="text-slate-300 hover:text-[#68447c] transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
