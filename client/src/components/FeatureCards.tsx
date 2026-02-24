import { BookOpen } from 'lucide-react';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  image?: string;
}

export default function FeatureCards() {
  const features: Feature[] = [
    {
      id: 'wiki',
      icon: <BookOpen size={32} />,
      title: 'Wiki',
      description: '探索 BrokenLand 的完整世界观、角色档案和剧情时间线。',
      link: 'https://brokenland-smp.fandom.com/zh',
      image:
        'https://private-us-east-1.manuscdn.com/sessionFile/Vy9yNvzfuMwjCRx9UrxlpN/sandbox/kT9fWzmqNCtrk1YscpPuO4-img-2_1771895142000_na1fn_YnJva2VubGFuZC1jYXJkLTE.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVnk5eU52emZ1TXdqQ1J4OVVyeGxwTi9zYW5kYm94L2tUOWZXem1xTkN0cmsxWXNjcFB1TzQtaW1nLTJfMTc3MTg5NTE0MjAwMF9uYTFmbl9Zbkp2YTJWdWJHRnVaQzFqWVhKa0xURTA5cG5nL3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XF7vGTf5tnxrI-l3shpQ4V-pYVktgOpu7NUWN4vjpYI5ehMBlsE6sjNdd6RYUZR87zGawGuYKqvSrpM527vZARC1vTFqgdTrmd~uGpnEt766muMHhf5Dk4FV4wncRqM7~RHd90lXH6dcnXw1JNPGjZI-QOUTnz2g7kU86I0C-sagW9MIVsHFUZFU9RDl7lmf-fntN8OAr7XNnCMmYt~r3-Ox8uc4UML9ZjOgZCAEL5~0jqUp07ziHFp1N9uIQ2FvQ5Opr4t~WwBP8UbiUeote4uyysGII-cx1UJDPmK4H6DpLiSQj6gan8-lBRIjM35D79rLmonXg50k7m4Ancspvg__',
    },
  ];

  return (
    <section id="lore" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-purple-500">
              探索 BrokenLand
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            深入了解这个破碎世界的故事与传奇
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="flex justify-center">
          {features.map((feature, index) => (
            <a
              key={feature.id}
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full max-w-md h-80 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Background Image */}
              {feature.image && (
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url('${feature.image}')` }}
                />
              )}

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-slate-900/60" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Arrow Indicator */}
                <div className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
