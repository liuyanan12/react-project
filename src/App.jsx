import React from 'react'

// 假设你有三张图，名字分别是 1.jpg, 2.jpg, 3.jpg
// 你可以根据实际情况增减这个数组
const myImages = [
  { id: 1, url: './images/640.png', title: '我的作品 1' },
  { id: 2, url: './images/kk.png', title: '我的作品 2' },
  { id: 3, url: './images/xz.jpg', title: '我的作品 3' },
  { id: 4, url: './images/yui.jpg', title: '我的作品 4' },
];

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>我的图片门户网站</h1>
        <p>纯页面展示项目</p>
      </header>

      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        {myImages.map(img => (
          <div key={img.id} style={{
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            backgroundColor: '#fff'
          }}>
            <img 
              src={img.url} 
              alt={img.title} 
              style={{ width: '100%', display: 'block', height: '250px', objectFit: 'cover' }} 
            />
            <div style={{ padding: '15px', textAlign: 'center' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>{img.title}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

export default App