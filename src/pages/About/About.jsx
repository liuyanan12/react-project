import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.splitLayout}>
        {/* 左侧：图片区域 */}
        {/* 注意：图片路径请确保在 public/images 文件夹下 */}
        <div 
          className={styles.imageSection} 
          style={{ backgroundImage: `url('./element/backimg.webp')` }} 
        />

        {/* 右侧：文字区域 */}
        <div className={styles.textSection}>
          <div className={styles.content}>
            <h1 className={styles.title}>响彻吧！</h1>
            <h2 className={styles.subtitle}>北宇治吹奏乐部巡礼记录</h2>
            
            <p className={styles.description}>
              这不仅是一个展示作品的画廊，更是我作为<strong>久美子</strong>的伙伴，
              记录下在宇治川畔、大吉山顶以及北宇治高中每一个闪光瞬间的笔记本。
            </p>

            <div className={styles.techInfo}>
              <h3>技术栈 / Stack</h3>
              <ul>
                <li>React 18 + Vite</li>
                <li>React Leaflet (地图交互)</li>
                <li>CSS Modules (模块化样式)</li>
              </ul>
            </div>

            <div className={styles.footer}>
              <p>“下一曲，即将在宇治川畔奏响。”</p>
              <p className={styles.devTag}>
                <span>●</span> 乐章尚未谱完，練習は続いています。(当前处在开发阶段)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;