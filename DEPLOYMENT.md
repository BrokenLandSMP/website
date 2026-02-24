# BrokenLand SMP 官网 - Vercel 部署指南

## 项目概述

这是一个为 BrokenLand SMP 剧情项目设计的单页官网，采用**暗黑奇幻风格**设计，包含以下核心功能：

- **固定顶栏**：包含 Logo、导航菜单和"加入服务器"按钮
- **沉浸式英雄区**：全屏背景配合醒目的标题和 CTA 按钮
- **功能卡片区**：4 个精美卡片展示世界百科、社区、地图和规则
- **CTA 区域**：服务器信息展示和加入按钮
- **页脚**：品牌信息、快速链接和社交媒体

## 技术栈

- **框架**：React 19 + Vite
- **样式**：TailwindCSS 4 + 自定义 CSS
- **字体**：Playfair Display（标题）+ Inter（正文）
- **部署**：Vercel（完全兼容）

## 本地开发

### 安装依赖

```bash
cd brokenland-smp-website
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

输出文件位于 `dist/public` 目录。

## Vercel 部署步骤

### 方法 1：使用 Vercel CLI（推荐）

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   cd brokenland-smp-website
   vercel
   ```

4. **按照提示完成部署**
   - 选择 "Create a new project"
   - 输入项目名称（如 `brokenland-smp-website`）
   - 选择框架：Vite
   - 构建命令会自动识别为 `pnpm build`
   - 输出目录会自动识别为 `dist/public`

### 方法 2：使用 GitHub 集成（推荐用于持续部署）

1. **将项目推送到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: BrokenLand SMP website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/brokenland-smp-website.git
   git push -u origin main
   ```

2. **在 Vercel 中导入项目**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "New Project"
   - 选择 GitHub 仓库
   - 点击 "Import"

3. **配置部署设置**
   - **Framework Preset**：Vite
   - **Build Command**：`pnpm build`
   - **Output Directory**：`dist/public`
   - **Environment Variables**：保持默认（不需要额外配置）

4. **完成部署**
   - 点击 "Deploy"
   - 等待构建完成
   - 获得自动生成的 Vercel URL

### 方法 3：使用 Vercel 仪表板拖拽部署

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "New Project" → "Deploy"
3. 将 `dist/public` 文件夹拖拽到上传区域
4. 等待部署完成

## 部署配置文件

项目已包含 `vercel.json` 配置文件，以支持客户端路由：

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist/public",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 自定义域名

### 在 Vercel 中添加自定义域名

1. 在 Vercel 项目设置中，进入 "Domains"
2. 点击 "Add Domain"
3. 输入你的域名（如 `brokenland.com`）
4. 按照指示更新 DNS 记录
5. 等待 DNS 生效（通常 24-48 小时）

### DNS 配置示例

如果使用 Vercel 的 DNS：
- 将 NS 记录指向 Vercel 的名称服务器

如果使用自己的 DNS 提供商：
- 添加 CNAME 记录：`brokenland.com CNAME cname.vercel-dns.com`

## 环境变量

项目不需要任何环境变量配置。所有配置都在代码中硬编码或通过 `vercel.json` 指定。

## 构建优化

项目构建后的文件大小：
- HTML：~368 kB（gzip: ~106 kB）
- CSS：~125 kB（gzip: ~19 kB）
- JavaScript：~561 kB（gzip: ~166 kB）

Vercel 会自动进行以下优化：
- 图片优化和格式转换
- 代码分割和 Tree-shaking
- 自动 GZIP 压缩
- CDN 缓存

## 故障排除

### 部署失败

**问题**：构建命令失败
- **解决**：确保 `pnpm` 已安装，运行 `pnpm install` 重新安装依赖

**问题**：404 错误（路由无法工作）
- **解决**：检查 `vercel.json` 中的 `rewrites` 配置是否正确

### 页面加载缓慢

**解决**：
- 检查图片 URL 是否可访问
- 确保 CDN 图片链接有效
- 使用 Vercel Analytics 监控性能

## 后续维护

### 更新内容

1. 修改源代码
2. 提交到 GitHub（如果使用 GitHub 集成）
3. Vercel 会自动触发重新部署

### 监控部署

- 访问 Vercel 仪表板查看部署历史
- 使用 Vercel Analytics 监控网站性能
- 设置部署通知（邮件或 Slack）

## 常用命令

```bash
# 本地开发
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview

# 代码检查
pnpm check

# 代码格式化
pnpm format
```

## 支持

如有任何问题，请参考：
- [Vercel 官方文档](https://vercel.com/docs)
- [Vite 官方文档](https://vitejs.dev)
- [React 官方文档](https://react.dev)

---

**部署日期**：2026 年 2 月 24 日
**最后更新**：2026 年 2 月 24 日
