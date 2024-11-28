'use client';

import { Map, Polyline, useRoutoMapInit } from '@yoojin282/react-routo-map';

export default function PolylineExample() {
  const { isLoaded } = useRoutoMapInit({
    appKey: process.env.NEXT_PUBLIC_ROUTO_API_KEY,
  });

  const path = [
    { lng: 127.04816255600583, lat: 37.51890637226832 },
    { lng: 127.07215223343503, lat: 37.51730654989123 },
    { lng: 127.07391176254882, lat: 37.50610683290664 },
  ];

  return (
    isLoaded && (
      <Map style={{ width: '800px', height: '600px' }}>
        <Polyline
          path={path}
          fitBounds={true}
          fitBoundsPadding={{ top: 170, right: 50, bottom: 30, left: 150 }}
        />
      </Map>
    )
  );
}
