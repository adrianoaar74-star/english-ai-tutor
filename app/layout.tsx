import './globals.css';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'English AI Tutor',
  description: 'Tutor de inglês por voz com IA local e prática diária.',
  manifest: '/manifest.webmanifest',
  appleWebApp: { capable: true, title: 'English AI Tutor', statusBarStyle: 'black-translucent' },
};

export const viewport: Viewport = {
  themeColor: '#0b1220',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}<script dangerouslySetInnerHTML={{__html:`if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{}));}`}} /></body>
    </html>
  );
}
