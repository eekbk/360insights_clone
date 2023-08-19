'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Hamburger from "./Hamburger";
import Chevron from "./chevron";

const menuItems: string[] = ['Products', 'Solutions', 'Resources', 'About'];

export default function Navbar() {
  const ref = useRef<HTMLInputElement>(null);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const mobileMenuClasses: string = 'flex justify-between py-6 cursor-pointer hover:underline active:underline';
  const desktopMenuClasses: string = 'flex text-sm font-semibold [&>*]:mx-1'

  useEffect(() => {
    if (isProductsOpen) {
      setIsSolutionsOpen(false);
      setIsResourcesOpen(false);
      setIsAboutOpen(false);
    }
  }, [isProductsOpen])

  useEffect(() => {
    if(isSolutionsOpen) {
      setIsProductsOpen(false);
      setIsResourcesOpen(false);
      setIsAboutOpen(false);
    }
  }, [isSolutionsOpen])

  useEffect(() => {
    if(isResourcesOpen) {
      setIsProductsOpen(false);
      setIsSolutionsOpen(false);
      setIsAboutOpen(false);
    }
  }, [isResourcesOpen])

  useEffect(() => {
    if(isAboutOpen) {
      setIsProductsOpen(false);
      setIsSolutionsOpen(false);
      setIsResourcesOpen(false);
    }
  }, [isAboutOpen])

  return (
    <nav className="top-0 sticky bg-white z-50">
      <div className="w-full flex justify-between px-5 py-2">
        <div className="">
        <Image src="https://www.360insights.com/hubfs/_2022/logo.svg" width={190} height={48} alt="360insights logo" />
        </div>
          <Hamburger isOpen={isHamburgerOpen} setIsOpen={setIsHamburgerOpen} />
        <div className="hidden lg:flex justify-between items-center w-[42rem]">
          <div className={desktopMenuClasses} >
            <div>Products</div>
            <Chevron isOpen={isProductsOpen} setIsOpen={setIsProductsOpen} size="medium"/>
          </div>
          <div className={desktopMenuClasses}>
            <div>Solutions</div>
            <Chevron isOpen={isSolutionsOpen} setIsOpen={setIsSolutionsOpen} size="medium"/>
          </div>
          <div className={desktopMenuClasses}>
            <div>Resources</div>
            <Chevron isOpen={isResourcesOpen} setIsOpen={setIsResourcesOpen} size="medium"/>
          </div>
          <div className={desktopMenuClasses}>
            <div>About</div>
            <Chevron isOpen={isAboutOpen} setIsOpen={setIsAboutOpen} size="medium" />
          </div>
        <button className="bg-cyan-600 text-white text-lg font-bold tracking-wider leading-5 py-3.5 px-6 rounded-[2rem]">Talk to Sales</button>
        </div>

      </div>
        {isHamburgerOpen &&
          <div className="absolute bg-white w-full flex flex-col px-5 text-sm font-semibold lg:hidden">
            <div className={mobileMenuClasses} onClick={() => {setIsProductsOpen(!isProductsOpen)}}>
              <div>Products</div>
              <Chevron isOpen={isProductsOpen} setIsOpen={setIsProductsOpen} />
            </div>
            <div className={mobileMenuClasses} onClick={() => {setIsSolutionsOpen(!isSolutionsOpen)}}>
              <div>Solutions</div>
              <Chevron isOpen={isSolutionsOpen} setIsOpen={setIsSolutionsOpen} />
            </div>
            <div className={mobileMenuClasses} onClick={() => {setIsResourcesOpen(!isResourcesOpen)}}>
              <div>Resources</div>
              <Chevron isOpen={isResourcesOpen} setIsOpen={setIsResourcesOpen} />
            </div>
            <div className={mobileMenuClasses} onClick={() => {setIsAboutOpen(!isAboutOpen)}}>
              <div>About</div>
              <Chevron isOpen={isAboutOpen} setIsOpen={setIsAboutOpen} />
            </div>
            <button className="bg-cyan-600 text-white text-lg font-bold tracking-wider py-1.5 px-11 mt-2 mb-4 rounded-3xl">Talk to Sales</button>
          </div>
        }
    </nav>
  )
}