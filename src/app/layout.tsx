import type { Metadata } from "next";
import localFont from 'next/font/local';
// import "./globals.css";
import '@/styles/common.scss';

export const metadata: Metadata = {
  title: "프론트엔드 | 사지혜",
  description: "안녕하세요, 소통하는 프론트엔드 개발자 사지혜 포트폴리오 페이지 입니다.",
};

const neoDunggeunmoPro = localFont({
  src: [
    {
      path: '../../public/fonts/NeoDunggeunmoPro/NeoDunggeunmoPro-Regular.woff2',
      weight: '400',
    }
  ]
});

const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard/Pretendard-Bold.subset.woff2',
      weight: '700',
    },
    {
      path: '../../public/fonts/Pretendard/Pretendard-SemiBold.subset.woff2',
      weight: '600',
    },
    {
      path: '../../public/fonts/Pretendard/Pretendard-Medium.subset.woff2',
      weight: '500',
    },
    {
      path: '../../public/fonts/Pretendard/Pretendard-Regular.subset.woff2',
      weight: '400',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={neoDunggeunmoPro.className}>{children}</body>
    </html>
  );
}
