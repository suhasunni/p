import type { ReactNode } from 'react'
import './globals.css'
import NavBar from './components/NavBar'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-stone-200 min-h-screen'>
        <NavBar />
        {children}
      </body>
    </html>
  )
}