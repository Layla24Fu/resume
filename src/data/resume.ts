// ============================================================
// 简历数据文件 —— 整个项目日常"唯一需要改"的地方
// 设计意图（DevOps 思维）：
//   把"内容"和"代码"分离。改简历内容只动这个数据文件，
//   页面代码(App.tsx)完全不用碰，改完 push 就自动重新发布。
//
// 当前版本：DevOps 方向（2026-10-15 调整）
//   本次四处关键修改：
//     1) 求职定位：运维工程师 → DevOps 工程师（与目标 JD 标题一致，
//        否则 HR 按岗位标题初筛时匹配不上）
//     2) 年限表述：改为"4 年云计算交付运维 ｜ 7 年医疗团队质量管理"，
//        不要写笼统的 11 年（会被按 11 年技术深度追问，一追就露差距）
//     3) 个人优势：删掉"熟练掌握/熟悉"类自评，改为"场景 + 证据 + 结果"
//     4) 项目经历：换成本人独立完成的 DevOps 实战项目
//        （原文项目经历与工作经历内容几乎重复，占版面却没提供新信息）
// ============================================================

// ① 先定义"简历长什么样"（TypeScript 接口）
//    作用：给数据结构定规矩，字段写错、写漏时，本地和 CI 会在
//    编译期直接报错，把问题拦在上线之前 —— 这就是"类型即文档、类型即测试"
export interface Experience {
  company: string   // 公司/项目名称
  role: string      // 职位/角色
  period: string    // 起止时间
  points: string[]  // 工作要点（每条一句话，招聘方最喜欢看的量化成果）
}

export interface Education {
  school: string
  degree: string
  period: string
}

// 项目经历：与工作经历分开展示
export interface Project {
  name: string        // 项目名称
  role: string        // 项目内角色
  period: string      // 起止时间
  points: string[]    // 项目要点/成果
}

// 专业技能：每个分类配一段内容（对应 PDF 的"分类：内容"格式）
export interface SkillGroup {
  category: string   // 分类名，如"云平台交付"
  detail: string     // 分类对应的能力描述
}

export interface Resume {
  name: string        // 姓名
  title: string       // 一句话定位（求职方向）
  profile: {
    gender: string    // 性别
    age: number       // 年龄
    workYears: string // 工作年限
  }
  contact: {
    email: string
    phone: string
  }
  strengths: string[]       // 个人优势
  skillGroups: SkillGroup[] // 专业技能（分类：内容）
  experience: Experience[]
  projects: Project[]       // 项目经历
  education: Education[]
}

// ② 简历真实内容
export const resume: Resume = {
  name: '傅芸',
  title: 'DevOps 工程师',
  profile: {
    gender: '女',
    age: 33,
    // 技术岗只强调 IT 年限；医疗经历单独标注，避免被按 11 年技术经验提问
    workYears: '4 年云计算交付运维 ｜ 7 年医疗团队质量管理',
  },
  contact: {
    email: '1359394069@qq.com',
    phone: '15216655754',
  },
  strengths: [
    '4 年海外私有云（华为云 HCS）交付与运维经验，覆盖东南亚、中东、非洲、拉美 4 个区域，英语可作工作语言',
    '处理多起生产环境故障，按「硬件 → 网络 → 系统 → 配置」分层排查定位根因，平均恢复时长控制在 30 分钟 ~ 1 小时',
    '维护覆盖成百上千项指标的监控告警体系，按严重等级分级响应（On-call），多次在客户感知前拦截潜在故障',
    '使用 Shell / Python 编写批量巡检与日志核对脚本，替代重复性手工操作',
    '具备 CI/CD 与容器化实践：GitHub Actions 流水线、Docker / Docker Compose 编排、Nginx 反向代理、Ansible',
  ],
  skillGroups: [
    { category: '云平台交付', detail: '华为云（HCS）、OpenStack：ECS / EVS / VPC / IMS 等 IaaS 组件的交付部署、扩容与问题定位' },
    { category: 'CI/CD 与自动化', detail: 'GitHub Actions 流水线（构建 / 代码检查 / 单元测试 / 自动部署）、质量门禁、GitHub Secrets 密钥管理；Shell / Python 自动化脚本' },
    { category: '容器与编排', detail: 'Docker 镜像构建、Docker Compose 多容器编排、Nginx 反向代理；Kubernetes 基础操作与容器问题定位' },
    { category: '监控与保障', detail: '上千项指标监控告警体系、按严重等级分级响应与值班（On-call）、故障根因分析（RCA）与复盘、可观测性实践' },
    { category: '数据与交付工程', detail: 'PostgreSQL、Alembic 数据库迁移、定时备份与恢复演练；交付 / 运维技术文档（SOP）编写' },
    { category: '语言与资质', detail: '英语（CET-4，可作工作语言，长期服务海外 4 区域客户）、护士资格证' },
  ],
  experience: [
    {
      company: '中软国际（西安）软件技术有限公司',
      role: '运维工程师（派驻华为云海外云平台项目）',
      period: '2022.09 - 2026.07',
      points: [
        '面向东南亚、中东、非洲、拉美 4 个区域提供华为云 HCS 平台技术支持，覆盖计算（ECS）、存储（EVS）、网络（VPC / IMS）核心组件，全英文沟通与文档输出',
        '处理多起生产环境故障，按硬件 → 网络 → 系统 → 配置逐层排查定位根因，平均恢复时长 30 分钟 ~ 1 小时，并输出故障复盘与预防预案',
        '维护覆盖成百上千项指标的监控告警体系，按严重等级分级响应与升级判定，多次在客户感知前识别并规避潜在故障',
        '参与多次节点扩容与交付部署，主导关键技术难点攻关，保障项目按期交付',
        '编写交付与运维 SOP、FAQ 及故障复盘文档，将高频问题沉淀为可复用排查路径并被团队复用',
      ],
    },
    {
      company: '优艾贝（中国）集团有限公司',
      role: '护理主管',
      period: '2015.08 - 2022.01',
      // 与计算机无关的日常护理工作已删除，只保留可迁移到技术岗的能力：
      // 质量管控、规范审核、带教、跨部门协作与投诉闭环
      points: [
        '负责服务质量管控：按规范逐项审核记录与操作流程，确保准确、无遗漏，形成可追溯的检查记录',
        '负责新员工入职培训与操作规范带教，并处理客户投诉、协调跨部门资源推进问题闭环',
      ],
    },
  ],
  projects: [
    {
      name: '简历站 CI/CD 与监控闭环',
      role: '独立完成',
      period: '2026.10',
      points: [
        '基于 GitHub Actions 搭建「构建 → 代码检查 → 单元测试 → 发布」流水线，用 needs 依赖实现质量门禁，测试失败即阻断发布，坏代码无法上线',
        '配置 GitHub Pages 自动部署，实现 push 到 main 即上线，单次发布约 1 分钟；通过权限最小化（permissions）与并发控制（concurrency）避免产物互相覆盖',
        '建立 cron 定时巡检工作流（curl 探活站点），异常时通过 Webhook 推送告警到飞书，形成"发现 → 通知"的监控闭环',
        '使用 GitHub Secrets 管理 Webhook 凭据，密钥不进代码、不进日志；仓库同时镜像到 Gitee 作为备份',
        '技术栈：GitHub Actions、Vite / React / TypeScript、Node.js、GitHub Pages、GitHub Secrets',
      ],
    },
    {
      name: '单词练习网站容器化交付',
      role: '独立完成',
      period: '2026.10',
      points: [
        '用 Docker Compose 编排 Nginx + FastAPI + PostgreSQL 三容器服务，一条命令拉起完整环境，数据库数据持久化到命名卷',
        'Nginx 反向代理实现前后端同源访问，避免跨域；配置 gzip 压缩、静态资源缓存策略与安全响应头',
        '使用 Alembic 管理数据库迁移，并在容器启动时自动执行，保证表结构与代码版本一致',
        '编写数据库备份脚本（定时 + 轮转 + 空文件校验）与恢复演练流程，避免"有备份但恢复不了"',
        '提供 /api/health 健康检查接口，供容器 HEALTHCHECK 与外部监控系统探活',
        '技术栈：Docker、Docker Compose、Nginx、FastAPI、PostgreSQL、Alembic、GitHub Actions',
      ],
    },
  ],
  education: [
    {
      school: '沈阳医学院',
      degree: '本科 · 涉外护理',
      period: '2011 - 2015',
    },
  ],
}
