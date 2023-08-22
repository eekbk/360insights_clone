import './globals.css'
import type { Metadata } from 'next'
import { montserrat } from './fonts'
import ContactHeader from './_components/ContactHeader'
import Navbar from './_components/Navbar'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Eric\'s 360insights Clone',
  description: 'Frontend Showcase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header className='sticky -top-[48px] z-50 h-max'>
          <ContactHeader />
          <Navbar />
        </header>
        <main className=''>
          {children}
          <div className='absolute bg-cyan-360 p-3.5 rounded-full h-[60px] w-[60px] bottom-5 right-5 z-[99] shadow-lg'>
            <Image src='/chat.svg' width={150} height={150} alt='chat button'/>
          </div>
        </main>
      </body>
    </html>
  )
}
