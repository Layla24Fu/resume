// ============================================================
// 冒烟测试 —— CI 流水线里的"质量门"之一
// 作用：
//   1. 测试简历数据"结构完整、内容非空"，防止改数据时漏填字段
//   2. 教学上演示"自动化测试如何拦截坏变更"：
//      如果这里有一个用例变红，CI 会中止，部署不会发生
// ============================================================

// 从 vitest 导入测试 API（describe 分组 / it 单个用例 / expect 断言）
import { describe, expect, it } from 'vitest'
// 被测对象：简历数据
import { resume } from './resume'

describe('简历数据完整性（质量门：保证页面不会因为数据缺失而渲染失败）', () => {
  it('姓名和求职定位不能为空', () => {
    // toBeGreaterThan(0)：去掉首尾空格后长度必须大于 0
    expect(resume.name.trim().length).toBeGreaterThan(0)
    expect(resume.title.trim().length).toBeGreaterThan(0)
  })

  it('联系方式与基本信息齐全', () => {
    expect(resume.contact.email.length).toBeGreaterThan(0)
    expect(resume.contact.phone.length).toBeGreaterThan(0)
    expect(resume.profile.gender.length).toBeGreaterThan(0)
    expect(resume.profile.age).toBeGreaterThan(0)
    expect(resume.profile.workYears.length).toBeGreaterThan(0)
  })

  it('至少有一段经历、一条个人优势、一条技能', () => {
    expect(resume.experience.length).toBeGreaterThan(0)
    expect(resume.strengths.length).toBeGreaterThan(0)
    expect(resume.skillGroups.length).toBeGreaterThan(0)
  })

  it('每个技能分类都有分类名和内容', () => {
    // 对应 PDF"分类：内容"格式：分类名和描述都不能为空
    for (const group of resume.skillGroups) {
      expect(group.category.trim().length).toBeGreaterThan(0)
      expect(group.detail.trim().length).toBeGreaterThan(0)
    }
  })

  it('每段经历都写了要点', () => {
    // 遍历所有经历：每段的要点数组不能为空 —— 防止"只填了公司名没写干了啥"
    for (const exp of resume.experience) {
      expect(exp.points.length).toBeGreaterThan(0)
    }
  })

  it('至少有一个项目，且每个项目都有要点', () => {
    // 项目经历板块：非空 + 每条都有成果描述
    expect(resume.projects.length).toBeGreaterThan(0)
    for (const proj of resume.projects) {
      expect(proj.points.length).toBeGreaterThan(0)
    }
  })
})
