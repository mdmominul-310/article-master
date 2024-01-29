import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ConditionLayout } from '@/components/condition-layout'


const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Article Master',
  description: 'Article master is a blog website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConditionLayout>
            {children}
          </ConditionLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
