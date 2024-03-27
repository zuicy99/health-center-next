import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import '@/styles/globals.css';
export const metadata: Metadata = {
  title: '전국 보건소 위치 안내',
  description: '전국 보건소 위치 안내 서비스 앱',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="4be8fffc77942832e15424037254a89ab94c613d"
        />
        <link
          rel="canonical"
          href="https://health-center-next.vercel.app"
        ></link>

        <meta
          name="google-site-verification"
          content="esPabcO4r8FwXJj1N9LPzC26xWfHaGzgyhVrWy2wG_8"
        />
        <GoogleTagManager gtmId="G-R6998NSTKW" />
      </head>
      <body>{children}</body>
    </html>
  );
}
