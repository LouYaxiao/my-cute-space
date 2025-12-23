/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 自定义字体：引用我们将在 HTML 里导入的 Quicksand
      fontFamily: {
        'cute': ['"Quicksand"', 'sans-serif'],
      },
      // 自定义马卡龙色系
      colors: {
        'milk': '#fdfbf7',       // 牛奶白背景
        'sakura': '#ffc6c6',     // 樱花粉
        'matcha': '#c5e1a5',     // 抹茶绿
        'lavender': '#e1bee7',   // 薰衣草紫
        'sky': '#b3e5fc',        // 天空蓝
        'cocoa': '#5d4037',      // 可可色字体
      },
      // 自定义软绵绵的阴影
      boxShadow: {
        'soft': '8px 8px 0px 0px rgba(93, 64, 55, 0.1)', // 不模糊的贴纸感阴影
      }
    },
  },
  plugins: [],
}