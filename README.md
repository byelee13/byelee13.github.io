# K Portfolio - Newsprint Design System

这是一个使用 React + Vite 构建的作品集网站项目，采用 **Newsprint 设计系统**风格 — 受报纸印刷启发的高对比度、零圆角、编辑风格的设计语言。

## 🎨 设计系统特点

### Newsprint 设计风格
- **零圆角（Sharp Corners）**：所有元素使用 0px 边框半径
- **高对比度**：黑色 #111111 与米白色 #F9F9F7
- **报纸风格排版**：使用 Playfair Display（标题）、Lora（正文）、JetBrains Mono（元数据）
- **网格系统**：严格的 12 列网格，显式的边框分隔
- **纹理层次**：点状网格背景，细线网格叠加
- **编辑威严感**：像是捧着一份早报 — 清晰、有序、信息丰富

### 颜色令牌
- `newsprint`: #F9F9F7（米白色背景）
- `ink`: #111111（墨黑色文字和边框）
- `divider`: #E5E5E0（分隔线灰色）
- `editorial-red`: #CC0000（强调红色，极少使用）
- `neutral-*`: 中性灰色系列

### 字体系统
- **标题/展示**：Playfair Display（高对比度衬线体）
- **正文**：Lora（易读性衬线体）
- **UI/标签**：Inter（现代无衬线体）
- **数据/元数据**：JetBrains Mono（等宽字体）

## 📁 项目结构

```
├── public/              # 静态资源目录
├── src/
│   ├── components/      # 可复用组件
│   │   ├── Header.jsx   # 页头导航（固定定位，毛玻璃效果）
│   │   └── Footer.jsx   # 页脚（网格布局，社交链接）
│   ├── pages/          # 页面组件
│   │   ├── Home.jsx     # 首页（Split Screen布局）
│   │   ├── About.jsx    # 关于页面（个人简介+经历时间线）
│   │   └── Work.jsx     # 作品页面（作品网格展示）
│   ├── styles/         # 全局样式
│   │   ├── index.css    # 基础样式导入
│   │   └── newsprint.css # Newsprint 设计系统样式
│   ├── App.jsx         # 根组件（路由配置）
│   └── main.jsx        # 应用入口
├── index.html          # HTML 模板
├── vite.config.js      # Vite 配置
├── tailwind.config.js  # Tailwind 配置（Newsprint 令牌）
└── package.json        # 项目配置
```

## 🚀 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器（默认端口 3000）
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview

# 代码检查
npm run lint
```

## 📄 页面说明

### 1. 首页（/）
- **Split Screen 布局**：左侧内容区，右侧视觉占位
- **Hero 标题**：超大号 Playfair Display 标题，紧凑行高
- **Drop Cap**：首字母下沉效果
- **CTA 按钮**：黑底白字 / 白底黑边，悬停反转

### 2. 关于页面（/about）
- **两栏网格**：左侧个人信息，右侧经历时间线
- **圆形头像占位**
- **经历卡片**：左侧黑色边框强调，项目列表使用红色方块
- **社交链接**：带边框的图标盒子

### 3. 作品页面（/work）
- **Hero 图片占位**：全宽横幅
- **作品网格**：交替全宽/半宽布局
- **半色调图案**：模拟报纸印刷的网点效果
- **详情展开**：全宽项目包含额外的细节网格
- **装饰分隔符**：衬线字体的星号分隔

## 🛠 技术栈

- **React 18** - UI 框架
- **Vite** - 快速构建工具
- **React Router 6** - 路由管理
- **Tailwind CSS** - 实用工具类样式
- **Google Fonts** - 网页字体

## 📐 设计原则遵循

### 1. 零圆角执行
所有元素使用 `sharp-corners` 类强制执行 `border-radius: 0px !important`

### 2. 高信息密度
- 紧凑的内边距（p-4 到 p-8）
- 严格的网格系统
- 显式的边框分隔线

### 3. 排版层次
- H1: 5xl → 9xl（移动端到桌面端）
- H2: 2xl → 3xl
- 正文: text-lg，leading-relaxed
- 元数据: text-xs，等宽字体，uppercase

### 4. 纹理与深度
- 点状网格背景（body）
- 细线网格叠加（.newsprint-texture）
- 半色调图案占位符（.halftone-pattern）
- 硬阴影悬停效果（.hard-shadow-hover）

### 5. 交互反馈
- 按钮颜色反转（黑 ↔ 白）
- 下划线浮现（红色，2px 粗细）
- 无浮动效果，使用硬阴影代替
- 快速过渡（200ms ease-out）

## 🎯 后续扩展建议

1. **粒子效果**：首页右侧占位区可添加 Canvas 粒子动画
2. **走马灯**：添加统计数据或标签滚动条
3. **手风琴 FAQ**：About 页面可添加 FAQ 手风琴组件
4. **图片真实替换**：将占位符替换为实际项目截图（应用灰度滤镜）
5. **响应式优化**：完善移动端汉堡菜单功能

## 📝 注意事项

- 字体通过 Google Fonts CDN 加载
- 所有边框使用 1px solid #111111
- 红色（#CC0000）仅用于强调，使用不超过 1%
- 图片应使用 `grayscale` 滤镜保持设计一致性
- 保持高对比度以符合 WCAG AAA 标准

## 📖 参考资源

- [Newsprint Design System Documentation](设计系统文档链接)
- [原型图目录](./stitch_webpage_builder原型图/)
- [Tailwind CSS 文档](https://tailwindcss.com)

---

**设计理念**："All the News That's Fit to Print." — 绝对的清晰度、层次和结构。
