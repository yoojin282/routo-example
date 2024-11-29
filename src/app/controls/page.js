'use client';

import { Map, useRoutoMapInit } from '@yoojin282/react-routo-map';

export default function MarkerExample() {
  const { isLoaded } = useRoutoMapInit({
    appKey: process.env.NEXT_PUBLIC_ROUTO_API_KEY,
  });

  const position = { lat: 37.3595704, lng: 127.105399 };
  const handleMapLoad = (map) => {};

  return (
    isLoaded && (
      <Map
        style={{ width: '800px', height: '600px' }}
        center={position}
        zoomControl={true}
        zoomControlOptions={{
          position: routo.maps.ControlPosition.TOP_LEFT,
        }}
        scaleControl={true}
        scaleControlOptions={{
          position: routo.maps.ControlPosition.BOTTOM_LEFT,
        }}
        locationControl={true}
        fullscreenControl={true}
        onLoad={handleMapLoad}
      ></Map>
    )
  );
}
