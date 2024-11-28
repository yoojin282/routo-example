'use client';

import { InfoWindow, Map, useRoutoMapInit } from '@yoojin282/react-routo-map';

export default function InfoWindowExample() {
  const { isLoaded } = useRoutoMapInit({
    appKey: process.env.NEXT_PUBLIC_ROUTO_API_KEY,
  });

  const position = { lat: 37.3595704, lng: 127.105399 };
  const infoWindows = [
    { lng: 127.04816255600583, lat: 37.51890637226832 },
    { lng: 127.07215223343503, lat: 37.51730654989123 },
    { lng: 127.07391176254882, lat: 37.50610683290664 },
  ];

  const handleMapLoad = (map) => {
    const bounds = new routo.maps.LatLngBounds();
    for (let i = 0; i < infoWindows.length; i++) {
      bounds.extend({ lat: infoWindows[i].lat, lng: infoWindows[i].lng });
    }
    map.fitBounds(bounds);
  };

  return (
    isLoaded && (
      <Map
        style={{ width: '800px', height: '600px' }}
        center={position}
        onLoad={handleMapLoad}
      >
        {infoWindows.map((info, index) => (
          <InfoWindow
            key={JSON.stringify(info)}
            content={`인포윈도우 ${index + 1}`}
            maxWidth={200}
            minWidth={50}
            pixelOffset={{ width: 50, height: 10 }}
            disableAutoPan={true}
            position={info}
          />
        ))}
      </Map>
    )
  );
}
