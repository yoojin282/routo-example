'use client';

import {
  Circle,
  Map,
  Marker,
  useRoutoMapInit,
} from '@yoojin282/react-routo-map';

export default function CircleExample() {
  const { isLoaded } = useRoutoMapInit({
    appKey: process.env.NEXT_PUBLIC_ROUTO_API_KEY,
  });

  const position = { lat: 37.507009, lng: 127.0586339 };

  return (
    isLoaded && (
      <Map style={{ width: '800px', height: '600px' }} center={position}>
        <Circle
          center={position}
          radius={200}
          fitBounds={true}
          fitBoundsPadding={{
            top: 50,
            right: 50,
            bottom: 30,
            left: 50,
          }}
        />
      </Map>
    )
  );
}
