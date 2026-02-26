export default function PerspectiveSection() {
  const creators = [
    {
      name: 'Fuvin',
      description: 'BrokenLand SMP 主催',
      avatar: '/avatars/fuvin.jpg',
      uid: '630817314',
    },
    {
      name: 'Naaatako',
      description: '船队首领，神秘 coder',
      avatar: '/avatars/naaatako.jpg',
      uid: '3546567984286087',
    },
    {
      name: '煅灼',
      description: 'aka. FlamesFlower',
      avatar: '/avatars/duanzhuo.jpg',
      uid: '451097080',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-[#68447c]">视角介绍</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            体验不同创作者眼中的 BrokenLand 世界
          </p>
        </div>

        {/* Creator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {creators.map((creator, index) => (
            <a
              key={creator.name}
              href={`https://space.bilibili.com/${creator.uid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 border border-slate-700/50 rounded-xl p-6 flex items-center gap-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#68447c]/20 group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Avatar */}
              <div className="w-28 h-28 flex-shrink-0 bg-slate-700 rounded-full overflow-hidden group-hover:ring-2 ring-[#68447c] transition-all">
                <img
                  src={creator.avatar}
                  alt={creator.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Creator Info and Button */}
              <div className="flex-1 flex flex-col justify-center gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#68447c] transition-colors">
                    {creator.name}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {creator.description}
                  </p>
                </div>

                {/* Bilibili Button */}
                <div className="flex items-center gap-2 bg-[#68447c] hover:bg-[#8b5cf6] px-6 py-2 rounded-lg transition-colors w-fit">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.32c.053-.071.107-.142.16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906L17.813 4.653zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773H5.333zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"/>
                  </svg>
                  <span className="text-white font-medium text-sm">查看主页</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}