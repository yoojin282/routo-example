'use client';

import {
  Circle,
  Map,
  Marker,
  Rectangle,
  useRoutoMapInit,
} from '@yoojin282/react-routo-map';

export default function RectangleExample() {
  const { isLoaded } = useRoutoMapInit({
    appKey: process.env.NEXT_PUBLIC_ROUTO_API_KEY,
  });

  const position = { lat: 37.507009, lng: 127.0586339 };

  return (
    isLoaded && (
      <Map style={{ width: '800px', height: '600px' }} center={position}>
        <Rectangle
          bounds={{
            east: 127.06528577835692,
            north: 37.4976633822354,
            south: 37.4949735341217,
            west: 127.05743227036133,
          }}
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
