import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'GLOBAL EAGLE PLUS - 一站式无人机制造商',
    template: '%s | GLOBAL EAGLE PLUS',
  },
  description:
    '深圳市GLOBAL EAGLE PLUS技术有限公司专注于工业飞行器设计服务、复合材料飞行平台生产销售和服务，是国内规模领先、最具市场竞争力的工业无人机企业之一。',
  keywords: [
    'GLOBAL EAGLE PLUS',
    '无人机',
    '工业无人机',
    '复合材料',
    '飞行平台',
    '垂直起降',
  ],
  authors: [{ name: 'GLOBAL EAGLE PLUS' }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="zh-CN">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
