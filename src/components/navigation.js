import Link from 'next/link';

export default function Navigation({ pathname }) {
  return (
    <div>
      <h4 className="p-4">Routo</h4>
      <div className="mt-4">
        <div>
          <Link href="/marker" className="block pt-4 pb-4 pl-8 pr-8">
            Marker
          </Link>
        </div>
        <div>
          <Link href="/info-window" className="block pt-4 pb-4 pl-8 pr-8">
            InfoWindow
          </Link>
        </div>
        <div>
          <Link href="/type-zoom" className="block pt-4 pb-4 pl-8 pr-8">
            MapType And Zoom
          </Link>
        </div>
        <div>
          <Link href="/circle" className="block pt-4 pb-4 pl-8 pr-8">
            Circle
          </Link>
        </div>
        <div>
          <Link href="/polyline" className="block pt-4 pb-4 pl-8 pr-8">
            Polyline
          </Link>
        </div>
        <div>
          <Link href="/polygon" className="block pt-4 pb-4 pl-8 pr-8">
            Polygon
          </Link>
        </div>
        <div>
          <Link href="/rectangle" className="block pt-4 pb-4 pl-8 pr-8">
            Rectangle
          </Link>
        </div>
        <div>
          <Link href="/clusterer" className="block pt-4 pb-4 pl-8 pr-8">
            Marker Clusterer
          </Link>
        </div>
        <div>
          <Link href="/drawing" className="block pt-4 pb-4 pl-8 pr-8">
            Drawing
          </Link>
        </div>
        <div>
          <Link href="/traffic" className="block pt-4 pb-4 pl-8 pr-8">
            Traffic
          </Link>
        </div>
      </div>
    </div>
  );
}
