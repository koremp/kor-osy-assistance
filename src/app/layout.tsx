import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CssBaseline } from '@mui/material'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '한국 청소년 도우미',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CssBaseline />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
