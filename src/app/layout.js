import Navigation from '@/components/navigation';
import './globals.css';
import localFont from 'next/font/local';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Routo Map API Example',
  description: 'Examples of Routo Map API (WebJS)',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="container flex">
          <div className="flex-none">
            <Navigation />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
