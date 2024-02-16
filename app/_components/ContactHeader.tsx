'use client'

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Chevron from "./chevron";

export default function ContactHeader() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const chevron: string = 'transition ease transform duration-300';

  useEffect(() => {
    window.addEventListener('scroll', handleClose)
    return () => window.removeEventListener('scroll', handleClose);
  }, [])

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      e.preventDefault();
      if (isOpen && !ref.current?.contains(e.target) && e.target.id !== 'small-carat') {

        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {document.removeEventListener('mousedown', checkIfClickedOutside)}
  }, [isOpen])

  const handleClose = () => setIsOpen(false);



  return (
    <div className="bg-white flex justify-center text-xs font-light tracking-wide leading-6 py-2 px-4"
      ref={ref}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="w-full flex justify-end max-w-[73rem] md:pr-3">

      <div className='flex mr-6 hover:underline'>
        <button className='mr-1.5'>Call U.S. 1-866-684-2308</button>
        <Chevron isOpen={isOpen} size="small"/>
      </div>
      <button className="hover:underline">Support</button>
      {isOpen &&
        <div
        className="absolute py-7 pl-6 pr-11 tracking-widest bg-white top-11 rounded-lg z-[103] shadow-md"
        // onScroll={handleClose}
        >
          <button className="hover:underline">Call U.K. +44 (0)1789 404020</button>
        </div>
      }
      </div>
    </div>
    )
}