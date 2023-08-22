'use client'
import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import Image from "next/image";
import FuchsiaButton from "./FuchsiaButton";

const headers: string[] = ['Calculate Rebates', 'Disburse Funds', 'Pay Rewards', 'Apply Discounts']
const headerUtils: string = 'animate-slideUp';

export default function Hero() {
  const [headerIndex, setHeaderIndex] = useState(0)
  // const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
    <div className="w-full bg-genericBanner bg-blend-darken bg-cover bg-center pt-[50px] pb-20 md:py-12 tracking-wide lg:py-28 flex justify-center px-[1.15rem]">
      <div className="flex flex-col md:flex-row justify-between items-center lg:min-w-[64rem] w-full max-w-[73rem]"> {/** Hero immediate wrapper */}
        <div className='text-2xl font-bold md:text-3xl md:w-1/2 lg:text-[2.5rem] lg:leading-[3rem] flex flex-col justify-between'> {/** Title/desc/button container */}
          <div> {/**Title/desc container */}
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
            <p className="text-xl font-light bg-transparent my-3 lg:w-[28rem]">Channel software to motivate partners and manage spend. You do you. We&apos;ll handle the rest.</p>
          <FuchsiaButton text="Products and Platform" />
        </div>
        <div className="relative flex md:w-[32rem] self-start md:self-center justify-end md:mr-2"> {/** Picture container */}
          <div className="bg-cyan-500 rounded-[2.5rem] aspect-square w-[18.5rem] md:w-[15rem] my-5 lg:w-96" >
            <Image className='absolute -right-4 md:right-16 w-[98%] aspect-square md:w-[97%] md:max-w-[282px] lg:w-[30rem] lg:max-w-none lg:right-24 bottom-5 z-20' src='/ladyNumberOne.png' width={800} height={800} alt="Lady Number One" />
            <Image className="absolute top-14 left-9 z-10 w-7/12 lg:w-[11rem] lg:left-[17rem]" src='/logoShape.svg' width={400} height={400} alt="logo" />
            <Image className="absolute aspect-square -bottom-4 right-0 w-[12.5rem] md:-bottom-6 z-30" src='/dots.svg' width={400} height={400} alt="dots" />
            <Image className="absolute bottom-16 -right-14 w-[45%] z-40 md:w-48 lg:w-52" src='/graphOverlay.png' width={400} height={400} alt="graph" />
          </div>
        </div>
      </div>
    </div>
  )
}