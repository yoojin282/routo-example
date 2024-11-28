'use client';

import { Map, Marker, useRoutoMapInit } from '@yoojin282/react-routo-map';

export default function MarkerExample() {
  const { isLoaded } = useRoutoMapInit({
    appKey: process.env.NEXT_PUBLIC_ROUTO_API_KEY,
  });

  const position = { lat: 37.3595704, lng: 127.105399 };
  const markers = [
    { lng: 127.04816255600583, lat: 37.51890637226832 },
    { lng: 127.07215223343503, lat: 37.51730654989123 },
    { lng: 127.07391176254882, lat: 37.50610683290664 },
  ];

  const handleMapLoad = (map) => {
    const bounds = new routo.maps.LatLngBounds();
    for (let i = 0; i < markers.length; i++) {
      bounds.extend({ lat: markers[i].lat, lng: markers[i].lng });
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
        {markers.map((marker) => (
          <Marker
            key={JSON.stringify(marker)}
            position={marker}
            onClick={() => console.log('=== click')}
          />
        ))}
      </Map>
    )
  );
}
