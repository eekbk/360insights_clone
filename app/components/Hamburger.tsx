'use client'

import { useState } from "react";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerLine: string = 'h-0.5 w-5 my-0.5 bg-black transition ease transform duration-300'

  return (
    <button
      className="flex flex-col justify-center items-center group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${hamburgerLine} ${
          isOpen
          ? 'rotate-45 translate-y-1'
          : ''
        }`}
      />
      <div
        className={`${hamburgerLine} ${
          isOpen
          ? 'opacity-0'
          : ''
        }`}
      />
      <div
        className={`${hamburgerLine} ${
          isOpen
          ? '-rotate-45 -translate-y-2'
          : ''
        }`}
      />
    </button>
  )
}