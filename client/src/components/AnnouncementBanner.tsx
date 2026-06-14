import { useLocation } from 'wouter';

export default function AnnouncementBanner() {
  const [, navigate] = useLocation();

  return (
    <div className="fixed top-0 left-0 right-0 z-45 bg-[#68447c]/90 backdrop-blur-md border-b border-[#68447c]/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-3">
          <button
            onClick={() => navigate('/wikimigrate')}
            className="text-slate-100 font-medium hover:text-white transition-all text-sm sm:text-base truncate"
          >
            BrokenLand SMP Wiki 迁移公告 →
          </button>
        </div>
      </div>
    </div>
  );
}
