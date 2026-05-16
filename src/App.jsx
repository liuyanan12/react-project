import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Gallery from './pages/Gallery/Gallery';
import MapView from './pages/Map/MapView';
import About from './pages/about/About';

// --- 核心优化点 1：音频单例化，放在组件外部 ---
const audioContext = import.meta.glob('/public/audios/*.wav', { eager: true });
const SOUND_PATHS = Object.keys(audioContext).map(path => path.replace('/public', ''));
// 提前创建好 Audio 对象，点击时直接用，零延迟
const audioPool = SOUND_PATHS.map(path => new Audio(`${import.meta.env.BASE_URL}${path}`));

const myImages = [
  { id: 1, url: './images/640.png', title: '我的作品 1', lat: 34.8892, lng: 135.8077 },
  { id: 2, url: './images/kk.png', title: '我的作品 2', lat: 34.9000, lng: 135.8100 },
  { id: 3, url: './images/xz.jpg', title: '我的作品 3', lat: 34.8800, lng: 135.7900 },
  { id: 4, url: './images/yui.jpg', title: '我的作品 4', lat: 34.8950, lng: 135.8050 },
];

function App() {
  // --- 核心优化点 2：极其简单的点击逻辑 ---
  useEffect(() => {
    const handleGlobalClick = () => {
      if (audioPool.length === 0) return;
      const audio = audioPool[Math.floor(Math.random() * audioPool.length)];
      audio.currentTime = 0; // 强制回到开头，解决连点没声音的问题
      audio.volume = 0.3;
      audio.play().catch(() => {});
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <Router basename="/kitauji-archive">
      <Navbar />
      <main style={{ marginTop: 'clamp(65px, 9vh, 75px)' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/gallery" replace />} />
          {/* 回归简单路由，不再搞常驻渲染，性能最稳 */}
          <Route path="/gallery" element={<Gallery photos={myImages} />} />
          <Route path="/map" element={<MapView photos={myImages} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div style={{padding: '40px'}}>404 - 找不到学姐了</div>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;