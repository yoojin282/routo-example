import Navigation from '@/components/navigation';
import './globals.css';

export const metadata = {
  title: 'Routo Map API Example',
  description: 'Examples of Routo Map API (WebJS)',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div className="flex flex-row">
          <Navigation />
          <div className="flex-1 pt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
