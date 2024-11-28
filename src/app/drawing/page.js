'use client';

import {
  Map,
  MarkerClusterer,
  useRoutoMapInit,
} from '@yoojin282/react-routo-map';
import { useRef, useState } from 'react';

const modes = [
  { code: 'marker', name: '마커' },
  { code: 'circle', name: '원' },
  { code: 'polygon', name: '폴리곤' },
  { code: 'polyline', name: '폴리라인' },
  { code: 'rectangle', name: '사각형' },
];

export default function MarkerClustererExample() {
  const { isLoaded } = useRoutoMapInit({
    appKey: process.env.NEXT_PUBLIC_ROUTO_API_KEY,
  });

  const drawingManager = useRef(null);
  const position = { lat: 37.3595704, lng: 127.105399 };

  const handleMapLoad = (map) => {
    const manager = new routo.maps.drawing.DrawingManager({
      map,
    });
    drawingManager.current = manager;
  };

  const changeDrawingMode = (mode) => {
    if (drawingManager.current) {
      drawingManager.current.setDrawingMode(mode);
    }
  };

  const handleClear = () => {
    if (drawingManager.current) {
      drawingManager.current.clear();
    }
  };

  return (
    isLoaded && (
      <div>
        <div>
          <Map
            style={{ width: '800px', height: '600px' }}
            center={position}
            zoom={10}
            onLoad={handleMapLoad}
          ></Map>
        </div>
        <div>
          {modes.map((mode) => (
            <button
              key={mode.code}
              type="button"
              className="p-4"
              onClick={() => changeDrawingMode(mode.code)}
            >
              {mode.name}
            </button>
          ))}
          <button type="button" onClick={handleClear} className="p-4">
            지우기
          </button>
        </div>
      </div>
    )
  );
}
