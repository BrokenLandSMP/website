import { X, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'wouter';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [, navigate] = useLocation();

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-amber-600 to-orange-600 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <AlertCircle className="h-5 w-5 text-white flex-shrink-0" />
            <button
              onClick={() => navigate('/wikimigrate')}
              className="text-white font-medium hover:underline transition-all text-sm sm:text-base truncate"
            >
              BrokenLand SMP Wiki 迁移公告
            </button>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:bg-white/20 p-1 rounded transition-colors flex-shrink-0"
            aria-label="关闭通知"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}