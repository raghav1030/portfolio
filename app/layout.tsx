import './globals.css'
import favicon from './facivon.png'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CommandContextProvider } from './ContextApi/commandContext'
import { ApiDataProvider } from './ContextApi/apiDataContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Terminal Portfolio - Raghav Gandhi',
  description: 'An interactive terminal portfolio made by Raghav Gandhi',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme='myTheme' lang="en">
      <head>
        <link rel="shortcut icon" href='./favicon.png'  type="image/x-icon" />
      </head>
      <body  className={inter.className}>
      <CommandContextProvider>
        <ApiDataProvider>
        {children}
        </ApiDataProvider>
      </CommandContextProvider>
        </body>
    </html>
  )
}
