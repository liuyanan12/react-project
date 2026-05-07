import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// 导入组件
import Navbar from './components/Navbar/Navbar';
import Gallery from './pages/Gallery/Gallery';
import MapView from './pages/Map/MapView';
import About from './pages/about/About';
const myImages = [
  { id: 1, url: './images/640.png', title: '我的作品 1', lat: 34.8892, lng: 135.8077 }, // 增加了坐标示例
  { id: 2, url: './images/kk.png', title: '我的作品 2', lat: 34.9000, lng: 135.8100 },
  { id: 3, url: './images/xz.jpg', title: '我的作品 3', lat: 34.8800, lng: 135.7900 },
  { id: 4, url: './images/yui.jpg', title: '我的作品 4', lat: 34.8950, lng: 135.8050 },
];

function App() {
  return (
    <Router basename="/kitauji-archive">
      <div>
        <Navbar />

        <main style={{ marginTop: 'clamp(65px, 9vh, 75px)' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/gallery" replace />} />
            <Route path="/gallery" element={<Gallery photos={myImages}/>} />
            <Route path="/map" element={<MapView photos={myImages}/>} />
            <Route path="/about" element={<About />} />
            
            {/* 404 页面处理（可选） */}
            <Route path="*" element={<div style={{padding: '40px'}}>404 - 页面去北宇治找学姐了</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;