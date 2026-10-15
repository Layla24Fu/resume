// ============================================================
// 简历页面 —— 纯展示层，只负责"把数据渲染成页面"
// 设计意图：
//   App.tsx 不包含任何简历内容（内容都在 src/data/resume.ts）
//   所以日常改简历 = 改数据文件，页面逻辑零改动、零风险
//   版式对齐《傅芸 - 运维工程师.pdf》：蓝色标题 + 一行三栏条目
// ============================================================

import { resume } from './data/resume'

function App() {
  // 从数据文件一次性取全部内容
  const { name, title, profile, contact, strengths, skillGroups, experience, projects, education } = resume

  return (
    <main className="resume">
      {/* 头部：姓名 + 定位 + 个人信息行（对齐 PDF：女·33岁 · 电话 · 邮箱 · 年限） */}
      <header className="resume-header">
        <h1>{name}</h1>
        <p className="resume-title">{title}</p>
        <p className="resume-meta">
          {profile.gender}·{profile.age}岁 · {contact.phone} · {contact.email} · {profile.workYears}
        </p>
      </header>

      {/* 个人优势 */}
      <section className="resume-section">
        <h2>个人优势</h2>
        <ul className="resume-list">
          {strengths.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* 专业技能：分类 + 内容 */}
      <section className="resume-section">
        <h2>专业技能</h2>
        <ul className="resume-list">
          {skillGroups.map((group, i) => (
            <li key={i}>
              <strong>{group.category}：</strong>
              {group.detail}
            </li>
          ))}
        </ul>
      </section>

      {/* 工作经历：公司 | 职位 | 时间 同一行 */}
      <section className="resume-section">
        <h2>工作经历</h2>
        {experience.map((exp) => (
          <article key={exp.company} className="resume-item">
            <div className="resume-item-head">
              <span className="resume-company">{exp.company}</span>
              <span className="resume-role">{exp.role}</span>
              <span className="resume-period">{exp.period}</span>
            </div>
            <ul className="resume-list">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* 项目经历：同样一行三栏 */}
      <section className="resume-section">
        <h2>项目经历</h2>
        {projects.map((proj) => (
          <article key={proj.name} className="resume-item">
            <div className="resume-item-head">
              <span className="resume-company">{proj.name}</span>
              <span className="resume-role">{proj.role}</span>
              <span className="resume-period">{proj.period}</span>
            </div>
            <ul className="resume-list">
              {proj.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* 教育 */}
      <section className="resume-section">
        <h2>教育</h2>
        {education.map((edu) => (
          <article key={edu.school} className="resume-item">
            <div className="resume-item-head">
              <span className="resume-company">{edu.school}</span>
              <span className="resume-role">{edu.degree}</span>
              <span className="resume-period">{edu.period}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
