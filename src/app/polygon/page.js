'use client';

import { Map, Polygon, useRoutoMapInit } from '@yoojin282/react-routo-map';
import { useRef } from 'react';

export default function PolygonExample() {
  const { isLoaded } = useRoutoMapInit({
    appKey: process.env.NEXT_PUBLIC_ROUTO_API_KEY,
  });

  const polygonRef = useRef(null);

  const paths = [
    [
      { lng: 127.04533014328611, lat: 37.513528109824406 },
      { lng: 127.04511556656493, lat: 37.50454078112031 },
      { lng: 127.05455694229734, lat: 37.50467696084063 },
      { lng: 127.05726060898436, lat: 37.51192817214614 },
      { lng: 127.04533014328611, lat: 37.513528109824406 },
    ],
  ];

  return (
    isLoaded && (
      <Map style={{ width: '800px', height: '600px' }}>
        <Polygon
          paths={paths}
          ref={polygonRef}
          fitBounds={true}
          fitBoundsPadding={{ top: 170, right: 50, bottom: 30, left: 150 }}
        />
      </Map>
    )
  );
}
