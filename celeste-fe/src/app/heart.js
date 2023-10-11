'use client'
import Cover from './images/cover.jpg'
import Cover2 from './images/cover2.jpg'
import Image1 from './images/image1.jpg'
import Image2 from './images/image2.jpg'
import Image3 from './images/image3.jpg'
import Image from 'next/image'
import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-white'>
      <h1>Heart Page</h1>
      <Link href="/">
      <Image src={Image2} height={250} className='rounded-lg' />
        <p style={{textColor: "white"}}>Go back to the homepage</p>
      </Link>
    </div>
  );
};
