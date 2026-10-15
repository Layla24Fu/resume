# Resume 简历/作品集站（DevOps 实操项目）

一个**零服务器成本**的简历/作品集静态站，用真实 CI/CD 流水线自动构建、测试、部署。

## 技术栈

- 前端：Vite + React + TypeScript
- 测试：Vitest
- CI/CD：GitHub Actions + GitHub Pages
- 监控：GitHub Actions 定时检查 + UptimeRobot（可选）

## 快速开始

```bash
npm install        # 安装依赖
npm run dev        # 本地开发预览（http://localhost:5173）
npm run test       # 跑测试（质量门之一）
npm run build      # 构建静态站点到 dist/
```

## 日常更新简历（核心流程）

只改 `src/data/resume.ts` → `git push` → 流水线自动构建测试并发布，无需手动部署。

## 目录结构

```
resume/
├─ .github/workflows/
│  ├─ deploy.yml      # CI/CD 流水线（build → test → deploy）
│  └─ uptime.yml      # 定时监控 + 告警
├─ src/
│  ├─ data/
│  │  ├─ resume.ts    # ★ 简历数据（日常只改这里）
│  │  └─ resume.test.ts  # 数据完整性冒烟测试
│  ├─ App.tsx         # 页面渲染（纯展示层）
│  └─ index.css
├─ vite.config.ts     # base:'./' 保证子路径部署资源正常
└─ 操作手册.md         # 详细学习手册（每个动作/代码都注释了目的）
```

详细教程见 **[操作手册.md](./操作手册.md)**。
