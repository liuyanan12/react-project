import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { myImages } from '../../data/imageData'; // 引入我们统一的数据源
import 'leaflet/dist/leaflet.css';
import '../../utils/fixLeafletIcon'; 
import styles from './MapView.module.css'; // 建议样式也抽离

function MapView() {
  const defaultPosition = [34.8892, 135.8077]; // 宇治市大概坐标
  return (
    <div className={styles.mapWrapper}>
      <div className={styles.dev_banner}>
        🚧 <b>当前状态：</b> 诶？！地图好像还没有完善，再给我一点时间（吹号音）...
      </div>
      <MapContainer center={defaultPosition} zoom={14} className={styles.leafletContainer}>
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        
        {myImages.map(photo =>photo.showMarker&&(
          <Marker key={photo.id} position={[photo.position[0], photo.position[1]]}>
            <Popup>
              <div className={styles.popupContent}>
                <img src={photo.url} alt={photo.title} className={styles.popupImg} />
                <p className={styles.popupTitle}>{photo.title}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;