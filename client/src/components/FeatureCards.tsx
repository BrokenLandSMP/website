import { BookOpen, Users, MapPin, Zap } from 'lucide-react';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
  image?: string;
}

export default function FeatureCards() {
  const features: Feature[] = [
    {
      id: 'wiki',
      icon: <BookOpen size={32} />,
      title: '世界百科',
      description: '探索 BrokenLand 的完整世界观、角色档案和剧情时间线。',
      link: '#wiki',
      color: 'from-amber-500 to-amber-600',
      image:
        'https://private-us-east-1.manuscdn.com/sessionFile/Vy9yNvzfuMwjCRx9UrxlpN/sandbox/kT9fWzmqNCtrk1YscpPuO4-img-2_1771895142000_na1fn_YnJva2VubGFuZC1jYXJkLTE.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVnk5eU52emZ1TXdqQ1J4OVVyeGxwTi9zYW5kYm94L2tUOWZXem1xTkN0cmsxWXNjcFB1TzQtaW1nLTJfMTc3MTg5NTE0MjAwMF9uYTFmbl9Zbkp2YTJWdWJHRnVaQzFqWVhKa0xURS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XF7vGTf5tnxrI-l3shpQ4V-pYVktgOpu7NUWN4vjpYI5ehMBlsE6sjNdd6RYUZR87zGawGuYKqvSrpM527vZARC1vTFqgdTrmd~uGpnEt766muMHhf5Dk4FV4wncRqM7~RHd90lXH6dcnXw1JNPGjZI-QOUTnz2g7kU86I0C-sagW9MIVsHFUZFU9RDl7lmf-fntN8OAr7XNnCMmYt~r3-Ox8uc4UML9ZjOgZCAEL5~0jqUp07ziHFp1N9uIQ2FvQ5Opr4t~WwBP8UbiUeote4uyysGII-cx1UJDPmK4H6DpLiSQj6gan8-lBRIjM35D79rLmonXg50k7m4Ancspvg__',
    },
    {
      id: 'discord',
      icon: <Users size={32} />,
      title: '加入社区',
      description: '与其他玩家交流、分享创意、参与服务器活动。',
      link: 'https://discord.gg/brokenland',
      color: 'from-cyan-500 to-cyan-600',
      image:
        'https://private-us-east-1.manuscdn.com/sessionFile/Vy9yNvzfuMwjCRx9UrxlpN/sandbox/kT9fWzmqNCtrk1YscpPuO4-img-3_1771895142000_na1fn_YnJva2VubGFuZC1jYXJkLTI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVnk5eU52emZ1TXdqQ1J4OVVyeGxwTi9zYW5kYm94L2tUOWZXem1xTkN0cmsxWXNjcFB1TzQtaW1nLTNfMTc3MTg5NTE0MjAwMF9uYTFmbl9Zbkp2YTJWdWJHRnVaQzFqWVhKa0xUSS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=vAuruo9k7VTj-2zSqSl0B6r4rzVyMrrkmwqWsDVYheggDV4FPjnTPHv1TAW62Ai67UVYVoq9L8Za2DjWCo5-ABsalkKxB9P6CT6FNTIV2ovl2KjF2uOx9piWV91L7mwDwK126Lc5lVRTc2DUxiGfkNGjW1yKxqhF4YlogmJsbkkn2SYQK5eBm5-hOCd79ooWk2LzmaVSxB8AT2XsolPLY2BzCKDa4PfMLhraOLCRa3XlGXMdZ4Of7uMMM~W9xKDQex8VJuAnExlwY-~H0DmaEuEkD9DaT~HYu3VAXqfYhMt1Crm19YnIJokih~zmP9QiGJPLFLnu-zNQJ-O0ZCECw__',
    },
    {
      id: 'map',
      icon: <MapPin size={32} />,
      title: '互动地图',
      description: '浏览服务器地图，发现重要地标和玩家建筑。',
      link: '#map',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 'rules',
      icon: <Zap size={32} />,
      title: '服务器规则',
      description: '了解服务器规则、白名单申请和常见问题。',
      link: '#rules',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <section id="lore" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent">
              探索 BrokenLand
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            从世界百科到社区互动，找到你感兴趣的内容
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <a
              key={feature.id}
              href={feature.link}
              className="group relative h-80 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
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

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Arrow Indicator */}
                <div className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
