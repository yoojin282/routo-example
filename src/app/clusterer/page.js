'use client';

import {
  Map,
  MarkerClusterer,
  useRoutoMapInit,
} from '@yoojin282/react-routo-map';
import { useState } from 'react';

export default function MarkerClustererExample() {
  const { isLoaded } = useRoutoMapInit({
    appKey: process.env.NEXT_PUBLIC_ROUTO_API_KEY,
  });

  const [markers, setMarkers] = useState([]);
  const position = { lat: 37.3595704, lng: 127.105399 };

  const handleMapLoad = (_) => {
    setMarkers(getMarkers());
  };

  const getMarkers = () => {
    const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const labelsLen = labels.length;

    const randomRange = [126.7, 37.4, 127.4, 37.8];
    const markers = [];

    // ramdom한 위치 생성
    for (var idx = 0; idx < labelsLen; idx++) {
      var position = {
        lat: randomRange[1] + (randomRange[3] - randomRange[1]) * Math.random(),
        lng: randomRange[0] + (randomRange[2] - randomRange[0]) * Math.random(),
      };

      const marker = new routo.maps.Marker({
        position: position,
        label: { text: labels[idx] },
      });
      markers.push(marker);
    }

    return markers;
  };

  return (
    isLoaded && (
      <div>
        <Map
          style={{ width: '800px', height: '600px' }}
          center={position}
          zoom={10}
          onLoad={handleMapLoad}
        >
          <MarkerClusterer markers={markers} />
        </Map>
      </div>
    )
  );
}
