'use client'
import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import Image from "next/image";
import FuchsiaButton from "./FuchsiaButton";

const headers: string[] = ['Calculate Rebates', 'Disburse Funds', 'Pay Rewards', 'Apply Discounts']
const headerUtils: string = 'animate-slideUp';

export default function Hero() {
  const [headerIndex, setHeaderIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useMemo(() => {
    if (headerIndex === headers.length) {
      setHeaderIndex(0);
      return;
    }
    const timerId = setTimeout(() => {

      setHeaderIndex(prev => prev + 1)
    }, 3000)

    return () => clearTimeout(timerId);

  }, [headerIndex]);

  return (
    <div className="bg-genericBanner bg-cover py-12 px-5 tracking-[0.1px]">
      <div className='text-2xl font-bold'>
        <h1
          className={`${headerUtils} ${headerIndex === 0
              ? 'text-purple-600'
              : 'hidden'}`}
        >{headers[0]}</h1>
        <h1
          className={`${headerUtils} ${headerIndex === 1
              ? 'text-pink-600'
              : 'hidden'}`}
        >{headers[1]}</h1>
        <h1
          className={`${headerUtils} ${headerIndex === 2
              ? 'text-amber-600'
              : 'hidden'}`}
        >{headers[2]}</h1>
        <h1
          className={`${headerUtils} ${headerIndex === 3
              ? 'text-lime-600'
              : 'hidden'}`}
        >{headers[3]}</h1>
        <h1>Without the Worry</h1>
      </div>
      <div className="my-3">
        <p className="text-xl font-light bg-transparent">Channel software to motivate partners and manage spend. You do you. We&apos;ll handle the rest.</p>
      </div>
      <FuchsiaButton text="Products and Platform" />
      <div className="bg-cyan-500 relative rounded-[2.5rem] w-[17rem] h-[17rem] my-7">
          <Image className='absolute left-6 w-[98%] bottom-0 z-20' src='/ladyNumberOne.png' width={400} height={400} alt="Lady Number One" />
          <Image className="absolute top-8 left-9 z-10 w-7/12" src='/logoShape.svg' width={400} height={400} alt="logo" />
          <Image className="absolute -bottom-11 right-0 w-3/4 z-30" src='/dots.svg' width={400} height={400} alt="dots" />
          <Image className="absolute bottom-14 -right-14 w-5/12 z-40" src='/graphOverlay.png' width={400} height={400} alt="dots" />
      </div>
    </div>
  )
}