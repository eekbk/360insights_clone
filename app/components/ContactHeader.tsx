'use client'

import { useState } from "react"
import Image from "next/image"

export default function ContactHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const chevron: string = 'transition ease transform duration-300';

  return (
    <header className="flex justify-end text-xs font-light tracking-wide p-4">
      <div className='flex mr-6 hover:underline'>
        <button className=''>Call U.S 1-866-684-2308</button>
        <button
          className={`${chevron} ${
            isOpen
            ? 'rotate-180'
            : ''
          }`}
          onClick={() => {setIsOpen(!isOpen)}}
        >
          <Image src="/chevronDown.svg" width={0} height={0} style={{ width: '15px', height: 'auto'}} alt="carat" />
        </button>
      </div>
      <button className="hover:underline">Support</button>
    </header>
    )
}