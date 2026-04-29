import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      {/* 1. Logo 区域：点击回到首页 */}
      <NavLink to="/" className={styles.logoGroup} style={{ textDecoration: 'none' }}>
        <div className={styles.logoBox}>
          {/* 确保路径正确，public里的图片直接用 / 开始 */}
          <img 
            src="/element/eupho.webp" 
            alt="Logo" 
            className={styles.logoImage} 
            onError={(e) => { e.target.style.display = 'none'; }} // 如果图裂了就隐藏
        />
        </div>
        <div className={styles.brandName}>
          <span className={styles.brandName_hibiki}>響け！</span>
          <span className={styles.brandName_euphon}>ユーフォニアム</span>
        </div>
      </NavLink>

      {/* 2. 菜单区域：Mapbox 风格的水平导航 */}
      <ul className={styles.navLinks}>
        <li>
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => isActive ? styles.activeLink : styles.link}
          >
            画廊
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/map" 
            className={({ isActive }) => isActive ? styles.activeLink : styles.link}
          >
            地图
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? styles.activeLink : styles.link}
          >
            关于
          </NavLink>
        </li>
      </ul>

      {/* 3. 右侧区域 */}
      <div className={styles.navRight}>
        <a href="https://github.com/liuyanan12/react-project" target="_blank" rel="noreferrer" className={styles.githubLink}>
          GitHub
        </a>
      </div>
    </nav>
  );
}

export default Navbar;