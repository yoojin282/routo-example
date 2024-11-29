'use client';

import { Map, useRoutoMapInit } from '@yoojin282/react-routo-map';
import { useEffect, useRef, useState } from 'react';

export default function CircleExample() {
  const { isLoaded } = useRoutoMapInit({
    appKey: process.env.NEXT_PUBLIC_ROUTO_API_KEY,
  });
  const [show, setShow] = useState(true);
  const trafficLayer = useRef(null);
  const position = { lat: 37.507009, lng: 127.0586339 };

  useEffect(() => {
    return () => {
      if (trafficLayer.current) {
        trafficLayer.current = null;
      }
    };
  }, []);

  const handleMapLoad = (map) => {
    trafficLayer.current = new routo.maps.TrafficLayer({ map });
  };

  const toggleTrafficLayer = (visible) => {
    if (trafficLayer.current) {
      trafficLayer.current.setVisible(visible);
      setShow(visible);
    }
  };

  return (
    isLoaded && (
      <div>
        <Map
          style={{ width: '800px', height: '600px' }}
          center={position}
          zoom={18}
          onLoad={handleMapLoad}
        ></Map>
        <div>
          <button type="button" onClick={() => toggleTrafficLayer(!show)}>
            {show ? 'Hide' : 'Show'} Traffic
          </button>
        </div>
      </div>
    )
  );
}
