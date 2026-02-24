# BrokenLand SMP 官网

一个为 BrokenLand SMP 剧情项目设计的现代化单页官网。采用**暗黑奇幻风格**，融合 Minecraft 的块状美学与当代网页设计的优雅感。

![Website Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-7-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-cyan)

## 🎨 设计特点

### 视觉风格
- **配色方案**：深蓝色/深紫色背景 + 金色/青色点缀
- **排版**：Playfair Display（优雅衬线字体）+ Inter（现代无衬线字体）
- **动画**：流畅的淡入淡出、悬停效果和微妙的过渡

### 核心功能
1. **固定顶栏**：包含 Logo、导航菜单和 CTA 按钮
2. **沉浸式英雄区**：全屏背景图 + 醒目标题 + 行动按钮
3. **功能卡片**：4 个精美卡片展示不同功能
   - 世界百科（Wiki）
   - 加入社区（Discord）
   - 互动地图（Map）
   - 服务器规则（Rules）
4. **CTA 区域**：服务器信息 + 快速加入按钮
5. **响应式页脚**：品牌信息 + 快速链接 + 社交媒体

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 `http://localhost:3000` 查看页面。

### 构建生产版本

```bash
pnpm build
```

输出文件位于 `dist/public` 目录，可直接部署到 Vercel。

## 📁 项目结构

```
brokenland-smp-website/
├── client/
│   ├── public/              # 静态资源
│   ├── src/
│   │   ├── components/      # React 组件
│   │   │   ├── Navbar.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeatureCards.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/           # 页面组件
│   │   │   └── Home.tsx
│   │   ├── App.tsx          # 主应用组件
│   │   ├── main.tsx         # 入口文件
│   │   └── index.css        # 全局样式 + 自定义动画
│   └── index.html           # HTML 模板
├── server/                  # 服务器占位符（web-static 不使用）
├── vercel.json              # Vercel 部署配置
├── DEPLOYMENT.md            # 部署指南
└── README.md                # 本文件
```

## 🎯 自定义内容

### 修改服务器信息

编辑 `client/src/components/CTASection.tsx`：

```tsx
{/* Server IP */}
<p className="text-xl font-mono font-bold text-amber-400 break-all">
  play.brokenland.com  // 修改为你的服务器地址
</p>

{/* Version */}
<p className="text-xl font-bold text-cyan-400">
  1.20.1  // 修改为你的服务器版本
</p>

{/* Players */}
<p className="text-xl font-bold text-purple-400">
  12 / 50  // 修改为实时玩家数
</p>
```

### 修改导航链接

编辑 `client/src/components/Navbar.tsx`：

```tsx
const navLinks = [
  { label: '主页', href: '#home' },
  { label: '剧情', href: '#lore' },
  { label: '加入我们', href: '#join' },
  { label: '社区', href: '#community' },
];
```

### 修改功能卡片

编辑 `client/src/components/FeatureCards.tsx`，更新 `features` 数组中的内容。

### 修改颜色方案

编辑 `client/src/index.css` 中的 `:root` 和 `.dark` 部分：

```css
:root {
  --primary: #fbbf24;           /* 金色 */
  --accent: #06b6d4;            /* 青色 */
  --background: #0f172a;        /* 深蓝色 */
  --foreground: #f1f5f9;        /* 浅灰色 */
  /* ... 更多颜色 ... */
}
```

## 🌐 部署到 Vercel

### 快速部署（推荐）

```bash
npm install -g vercel
vercel
```

### GitHub 集成部署

1. 将项目推送到 GitHub
2. 在 Vercel 中导入 GitHub 仓库
3. 自动部署完成

详见 [DEPLOYMENT.md](./DEPLOYMENT.md)。

## 📊 性能指标

- **首屏加载时间**：< 2 秒（取决于网络）
- **LCP（最大内容绘制）**：< 2.5 秒
- **CLS（累积布局偏移）**：< 0.1
- **FID（首次输入延迟）**：< 100ms

## 🔧 技术栈

- **框架**：React 19
- **构建工具**：Vite 7
- **样式**：TailwindCSS 4 + 自定义 CSS
- **UI 组件**：shadcn/ui
- **图标**：lucide-react
- **动画**：CSS 3 + Framer Motion
- **字体**：Google Fonts

## 📱 浏览器支持

- Chrome/Edge 最新版本
- Firefox 最新版本
- Safari 最新版本
- 移动浏览器（iOS Safari、Chrome Mobile）

## ♿ 无障碍性

- 完整的键盘导航支持
- 语义化 HTML 标签
- 高对比度文本
- ARIA 标签和角色

## 📝 许可证

MIT License - 详见 LICENSE 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 支持

如有任何问题，请：
1. 查看 [DEPLOYMENT.md](./DEPLOYMENT.md)
2. 提交 GitHub Issue
3. 联系项目维护者

---

**创建日期**：2026 年 2 月 24 日  
**最后更新**：2026 年 2 月 24 日  
**维护者**：BrokenLand SMP 团队
