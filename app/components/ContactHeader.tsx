'use client'

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function ContactHeader() {
  const ref = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const chevron: string = 'transition ease transform duration-300';

  useEffect(() => {
    window.addEventListener('scroll', handleClose)
    return () => window.removeEventListener('scroll', handleClose);
  }, [])

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      e.preventDefault();
      if (isOpen && !ref.current?.contains(e.target) && e.target.alt !== 'carat') {

        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {document.removeEventListener('mousedown', checkIfClickedOutside)}
  }, [isOpen])

  const handleClose = () => setIsOpen(false);



  return (
    <header className="flex justify-end text-xs font-light tracking-wide p-4">
      <div className='flex mr-6 hover:underline'>
        <button className=''>Call U.S. 1-866-684-2308</button>
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
      {isOpen &&
        <div
        className="absolute py-7 pl-6 pr-11 tracking-widest bg-white top-11 rounded-lg z-[100] shadow-md"
        // onScroll={handleClose}
        >
          <button className="hover:underline">Call U.K. +44 (0)1789 404020</button>
        </div>
      }
    </header>
    )
}