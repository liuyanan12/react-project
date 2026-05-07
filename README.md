# 🎺 北宇治巡礼记 | Kitauji Journey

[![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Leaflet](https://img.shields.io/badge/Maps-Leaflet-199900?style=for-the-badge&logo=leaflet)](https://leafletjs.com/)
[![Status](https://img.shields.io/badge/Status-Developing-yellow?style=for-the-badge)](https://liuyanan12.github.io/kitauji-archive/)

> **“下一曲，即将在宇治川畔奏响。”**
> 
> 这是一个基于 React 构建的『響け！ユーフォニアム』（吹响吧！上低音号）主题圣地巡礼地图与个人作品集系统。

---

## 📸 项目概览 / Overview

这个项目是我在学习 React 过程中的一个实践作品，结合了我对京阿尼（Kyoto Animation）作品的热爱。

- **🖼️ 响应式画廊**：采用 CSS Grid 自动布局（minmax 算法），完美展示摄影作品。
- **🗺️ 巡礼地图**：基于 React-Leaflet 实装，标注宇治市真实取景地，带你重走久美子的上学路。
- **🎨 京吹视觉设计**：深度定制的“北宇治蓝”配色方案，配合毛玻璃效果的导航栏与金色交互反馈。
- **📱 全设备适配**：从桌面端到移动端，均能获得流畅的浏览体验。

## 🛠️ 技术栈 / Tech Stack

* **核心**: React 18 (Hooks)
* **构建**: Vite (极速 HMR)
* **路由**: React Router 6 (basename 适配 GitHub Pages)
* **地图**: Leaflet & OpenStreetMap
* **样式**: CSS Modules (隔离样式冲突)
* **部署**: GH-Pages

## 🚀 快速启动 / Getting Started

如果你想在本地运行这个项目：

```bash
# 克隆仓库
git clone [https://github.com/liuyanan12/kitauji-archive.git](https://github.com/liuyanan12/kitauji-archive.git)

# 进入目录
cd kitauji-archive

# 安装依赖
npm install

# 启动开发服务器
npm run dev
