'use client';

import { Map, useRoutoMapInit } from '@yoojin282/react-routo-map';
import { useEffect, useRef, useState } from 'react';

export default function MapTypeAndZoomExample() {
  const { isLoaded } = useRoutoMapInit({
    appKey: process.env.NEXT_PUBLIC_ROUTO_API_KEY,
  });
  const [level, setLevel] = useState(15);
  const mapRef = useRef(null);

  useEffect(() => {
    return () => {
      mapRef.current = null;
    };
  }, []);

  const position = { lat: 37.3595704, lng: 127.105399 };
  const mapTypes = [
    'Roadmap_Half_Basic',
    'Roadmap_Half_Black',
    'Roadmap_Image_Basic',
    'Satellite',
    'Hybrid',
    'Roadmap_Vector_Basic',
    'Roadmap_Vector_Black',
  ];
  const maxLevel = 18;
  const minLevel = 1;

  const handleMapLoad = (map) => {
    mapRef.current = map;
  };

  const increase = () => {
    if (level >= maxLevel) return;
    _changeLevel(level + 1);
  };
  const decrease = () => {
    if (level <= minLevel) return;
    _changeLevel(level - 1);
  };

  const _changeLevel = (value) => {
    setLevel(value);
    if (mapRef.current) {
      mapRef.current.setZoom(value);
    }
  };

  const changeType = (type) => {
    if (mapRef.current) {
      mapRef.current.setMapTypeId(type);
    }
  };

  return (
    isLoaded && (
      <div>
        <Map
          style={{ width: '800px', height: '600px' }}
          center={position}
          onLoad={handleMapLoad}
        ></Map>
        <div className="mt-4">
          <span className="mr-2">Map Type</span>
          <select onChange={(e) => changeType(e.target.value)}>
            {mapTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <span className="mr-2">Zoom</span>
          <button
            className="mr-1 p-3"
            onClick={level <= minLevel ? null : decrease}
          >
            -
          </button>
          {level}
          <button
            className="mr-1 p-3"
            onClick={level >= maxLevel ? null : increase}
          >
            +
          </button>
        </div>
      </div>
    )
  );
}
