import React from 'react';
import { myImages } from '../../data/imageData';
import styles from './Gallery.module.css';

function Gallery() {
  return (
    <div className={styles.container}>
      {/* 注意：我已经把 inline style 转换为了 CSS 模块 */}
      <div className={styles.photoGrid}>
        {myImages.map(img => (
          <div key={img.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={img.url} alt={img.title} className={styles.photo} />
            </div>
            <div className={styles.info}>
              <p className={styles.title}>{img.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;