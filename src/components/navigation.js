'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const defaultClassName = 'block pt-4 pb-4 pl-8 pr-8';

  const getClassName = (path) => {
    return `${defaultClassName} ${pathname === path ? 'font-bold' : ''}`;
  };
  return (
    <div>
      <h4 className="p-4">Routo</h4>
      <div className="mt-4">
        <div>
          <Link href="/controls" className={getClassName('/controls')}>
            Controls
          </Link>
        </div>
        <div>
          <Link href="/marker" className={getClassName('/marker')}>
            Marker
          </Link>
        </div>
        <div>
          <Link href="/info-window" className={getClassName('/info-window')}>
            InfoWindow
          </Link>
        </div>
        <div>
          <Link href="/type-zoom" className={getClassName('/type-zoom')}>
            MapType And Zoom
          </Link>
        </div>
        <div>
          <Link href="/circle" className={getClassName('/circle')}>
            Circle
          </Link>
        </div>
        <div>
          <Link href="/polyline" className={getClassName('/polyline')}>
            Polyline
          </Link>
        </div>
        <div>
          <Link href="/polygon" className={getClassName('/polygon')}>
            Polygon
          </Link>
        </div>
        <div>
          <Link href="/rectangle" className={getClassName('/rectangle')}>
            Rectangle
          </Link>
        </div>
        <div>
          <Link href="/clusterer" className={getClassName('/clusterer')}>
            Marker Clusterer
          </Link>
        </div>
        <div>
          <Link href="/drawing" className={getClassName('/drawing')}>
            Drawing
          </Link>
        </div>
        <div>
          <Link href="/traffic" className={getClassName('/traffic')}>
            Traffic
          </Link>
        </div>
      </div>
    </div>
  );
}
