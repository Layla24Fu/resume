// ============================================================
// 简历数据文件 —— 整个项目日常"唯一需要改"的地方
// 设计意图（DevOps 思维）：
//   把"内容"和"代码"分离。改简历内容只动这个数据文件，
//   页面代码(App.tsx)完全不用碰，改完 push 就自动重新发布。
//
// 当前内容来源：《傅芸 - 运维工程师.pdf》（2026-10-15 转换）
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

// ② 简历真实内容（来自 PDF，请核对后自行调整）
export const resume: Resume = {
  name: '傅芸',
  title: '运维工程师',
  profile: {
    gender: '女',
    age: 33,
    workYears: '11年工作经验',
  },
  contact: {
    email: '1359394069@qq.com',
    phone: '15216655754',
  },
  strengths: [
    '熟练掌握 Linux 常见命令以及常用软件的配置和管理',
    '熟练掌握华为云虚拟化技术常用操作、FusionSphere 组件问题处理方法',
    '熟悉 K8s、docker 基本操作',
    '熟悉使用 CI/CD、ansible 工具',
    '工作中能使用英语交流，有较好的英语读写能力',
  ],
  skillGroups: [
    { category: '云平台交付', detail: '华为云（HCS）、OpenStack：ECS / EVS / VPC / IMS 等 IaaS 组件的新建、扩容与交付部署' },
    { category: '云原生', detail: 'Docker 容器化、Kubernetes 编排，容器管理与问题定位' },
    { category: '操作系统与运维', detail: 'Linux 系统管理与日常运维' },
    { category: '自动化', detail: 'Shell / Python 脚本处理批量运维与故障排查' },
    { category: '监控与保障', detail: 'HCS 云平台成百上千项指标监控告警体系、故障排查与根因分析、交付文档编写' },
    { category: '语言与资质', detail: '英语（CET-4，可作工作语言）、护士资格证、C1 驾驶证' },
  ],
  experience: [
    {
      company: '中软国际（西安）软件技术有限公司',
      role: '运维工程师',
      period: '2022.09 - 2026.07',
      points: [
        '负责东南亚、中东、非洲、拉美等海外区域 HCS 云平台的运维与技术支持，保障计算、存储、网络等核心组件的高可用性与稳定性',
        '协助当地团队完成多个节点的扩容与交付部署，主导关键技术难点攻关，确保项目按时高质量交付',
        '日常负责平台上千项监控指标的巡检与告警处置，按严重等级分级响应，提前识别并规避多起潜在故障',
        '搭建跨团队协作机制，对接海外客户与本地运维团队，推动问题处理流程标准化',
        '客户满意度达 100%，多次获客户书面感谢；团队 KPI 持续领先，多次获评优秀员工',
      ],
    },
    {
      company: '优艾贝（中国）集团有限公司',
      role: '护理主管',
      period: '2015.08 - 2022.01',
      points: [
        '负责护理工作的监督与改进、日常资料整理汇总及新员工入职培训',
        '负责产妇和新生儿的日常护理工作及早期智力开发',
        '参与课程开发、培训和相关活动开展',
        '解决客户投诉，提高服务质量与客户满意度',
      ],
    },
  ],
  projects: [
    {
      name: '华为云海外项目',
      role: '云计算运维工程师',
      period: '2022.09 - 2026.07',
      points: [
        '负责东南亚、中东、非洲、拉美等海外区域全部云平台运维与技术支持，保障计算、存储、网络等核心组件稳定运行',
        '协助当地工程师完成多次节点扩容与交付部署，解决交付过程技术难题，支撑海外业务持续上量',
        '处理多起生产环境故障，通过快速定位与应急响应将平均恢复时长控制在 30 分钟~1 小时，并沉淀故障复盘与预防预案',
        '建立并维护覆盖成百上千项指标的监控告警体系，提前发现并规避潜在隐患',
        '对接海外客户与本地工程师团队，编写交付/运维技术文档，推动问题处理流程标准化',
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
