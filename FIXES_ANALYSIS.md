# BrokenLand Website 顶栏问题分析

## 发现的问题

### 1. 顶栏堆叠冲突
- **AnnouncementBanner**: `fixed top-0 left-0 right-0 z-40` - 高度约 56px (py-3)
- **Navbar**: `fixed top-0 left-0 right-0 z-50` - 高度 64px (h-16)
- **问题**: 两个元素都固定在顶部，导致 Navbar 覆盖 AnnouncementBanner

### 2. 首页内容顶部填充不足
- **HeroSection**: `pt-16` (64px) - 仅考虑 Navbar 高度
- **问题**: 当 AnnouncementBanner 显示时，HeroSection 内容与 Navbar 重叠，没有考虑 Banner 高度

### 3. 内页顶部填充过度
- **Characters/QQGroup/WikiMigrate**: `pt-32` (128px) - 过度补偿
- **问题**: 不必要的大量空白，且没有动态考虑 Banner 显示/隐藏

### 4. 导航链接使用原生 `<a>` 标签
- **问题**: 使用 `href="/"` 而不是 `wouter` 的 `useLocation` 导航
- **影响**: 页面刷新而不是 SPA 导航

## 修复方案

### 修复 1: 调整 AnnouncementBanner 堆叠顺序
- 将 AnnouncementBanner 的 z-index 从 40 改为 45
- 这样 Navbar (z-50) 仍在上方，但 Banner 不会被完全遮挡

### 修复 2: 创建动态顶部填充系统
- 在 Home.tsx 中，使用 Context 或状态管理 Banner 可见性
- 根据 Banner 状态动态调整 HeroSection 的 pt 值
- 或者使用 CSS 变量 `scroll-padding-top` 来统一管理

### 修复 3: 统一内页顶部填充
- 将内页的 `pt-32` 改为 `pt-20` 或 `pt-24`（更合理的值）
- 或创建一个可复用的布局组件来处理这个问题

### 修复 4: 改进导航链接
- 将内部链接改为使用 `wouter` 的 `useLocation` 或 `Link` 组件
- 保持 SPA 导航的性能优势

## 实施优先级
1. **高优先级**: 修复 AnnouncementBanner 和 Navbar 的堆叠冲突
2. **中优先级**: 调整 HeroSection 的顶部填充
3. **中优先级**: 统一内页顶部填充
4. **低优先级**: 改进导航链接（可选优化）
