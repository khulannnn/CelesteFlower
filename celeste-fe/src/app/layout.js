import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import profileImg from './profile.png'
import { Heart, Cake, Gift, Box, Star, ShoppingCart, User } from 'iconsax-react'
import Head from 'next/head'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Celeste',
  description: 'Flowers studio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='body-star'></div>
        <div className='h-17 bg-[#2C3333] flex justify-between items-center fixed w-screen'>
          <div className='p-2'>
            <Image src={profileImg} width={120} />
          </div>
          <div className='flex gap-2 text-[#F397AF] text-xs'>
            <div className='px-3 py-2 flex items-center gap-1'><Link href='/heart'><Heart size={16}/>Хайртай хүндээ</Link></div>
            <div className='px-3 py-2 flex items-center gap-1'><Cake size={16} />ТӨРСӨН ӨДӨР</div>
            <div className='px-3 py-2 flex items-center gap-1'><Gift size={16} />ТӨРСӨНТЭМДЭГЛЭЛТ ӨДӨР</div>
            <div className='px-3 py-2 flex items-center gap-1'><Box size={16} />БАГЦ</div>
          </div>
          <div className='flex gap-2 text-[#F397AF] text-xs px-4'>
            <div className='px-1 py-2 flex items-center gap-1'><Star variant='Bold' size={24} /></div>
            <div className='px-1 py-2 flex items-center gap-1'><ShoppingCart variant='Bold' size={24} /></div>
            <div className='px-1 py-2 flex items-center gap-1'><User variant='Bold' size={24} /></div>
          </div>
        </div>
        <div>{children}</div>
      </body>
    </html>
  )
}
