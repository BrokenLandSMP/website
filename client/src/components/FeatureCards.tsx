import { BookOpen, Users, Box } from 'lucide-react';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  isExternal?: boolean;
}

export default function FeatureCards() {
  const features: Feature[] = [
    {
      id: 'wiki',
      icon: <BookOpen size={32} />,
      title: 'Wiki',
      description: '探索 BrokenLand SMP 的完整世界观、角色档案和剧情时间线。',
      link: 'https://brokenland-smp.fandom.com/zh',
      isExternal: true,
    },
    {
      id: 'characters',
      icon: <Users size={32} />,
      title: '角色介绍',
      description: '深入了解 BrokenLand SMP 中的传奇人物及其背后的故事。',
      link: '/characters',
      isExternal: false,
    },
    {
      id: 'brokelondon',
      icon: <Box size={32} />,
      title: '破产伦敦',
      description: 'BrokenLand SMP 官方生存服务器。',
      link: '/brokelondon',
      isExternal: false,
    },
  ];

  return (
    <section id="lore" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-[#68447c]">
              探索 BrokenLand SMP
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            深入了解这个破碎世界的故事与传奇
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <a
              key={feature.id}
              href={feature.link}
              target={feature.isExternal ? "_blank" : "_self"}
              rel={feature.isExternal ? "noopener noreferrer" : ""}
              className="group relative w-full h-80 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-slate-800 border border-slate-700/50"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-[#68447c] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {feature.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#68447c] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Arrow Indicator */}
                <div className="text-[#68447c] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  查看详情 →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
