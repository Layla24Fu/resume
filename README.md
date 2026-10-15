# DevOps Demo：简历静态站点自动化交付项目
> 个人DevOps实战项目，演示完整CI/CD交付链路

## 项目介绍
前端：Vite + React + TypeScript，静态简历展示页面
DevOps：GitHub Actions 实现CI/CD，从代码提交到自动上线的完整自动化流程

## CI/CD流水线工作流
```mermaid
graph LR
A[Git提交代码] --> B[npm ci 安装锁定版本依赖]
B --> C[oxlint 代码规范检查]
C --> D[vitest 单元测试校验]
D --> E[vite build 打包静态页面]
E --> F[自动部署到 GitHub Pages]
C -->|Lint失败| G[流水线中断，不部署]
D -->|测试失败| G
F --> H[站点监控，异常邮件告警]


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
