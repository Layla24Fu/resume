import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// 构建配置：本文件决定"源代码如何被打包成最终静态站点"
// 学习重点：base 配置是静态站部署到子路径时的经典必改项
export default defineConfig({
  plugins: [react()], // React 官方插件：处理 JSX 语法编译

  // base: 资源文件(js/css/图片)在 HTML 里引用的"根路径"
  // 部署到 GitHub Pages 后站点地址是 https://用户名.github.io/resume/
  // 即站点位于 /resume/ 这个"子路径"下
  // base: './' 让所有资源用相对路径引用，无论在哪个子路径都能正确加载
  // 如果忘了配，页面能打开但样式/脚本 404（经典坑）
  base: './',
})
