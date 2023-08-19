'use client'

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Chevron from "./chevron";

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
      if (isOpen && !ref.current?.contains(e.target) && e.target.id !== 'small-carat') {

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
        <button className='mr-1.5'>Call U.S. 1-866-684-2308</button>
        <Chevron isOpen={isOpen} setIsOpen={setIsOpen} size="small"/>
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