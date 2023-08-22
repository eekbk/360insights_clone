'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "./Hamburger";
import Chevron from "./chevron";
import MobileMenuModal from "./mobileMenuModal";
import { products, solutions, resources, about } from "@/data/menuItems";
import DesktopMenuItem from "./desktopMenuItem";
import MobileMenuItem from "./mobileMenuItem";

const menuItems: string[] = ['Products', 'Solutions', 'Resources', 'About'];

export default function Navbar() {
  const ref = useRef<HTMLInputElement>(null);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAnyMenuOpen, setIsAnyMenuOpen] = useState(false);

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

  useEffect(() => {
    if(!isHamburgerOpen) {
      setIsProductsOpen(false);
      setIsSolutionsOpen(false);
      setIsResourcesOpen(false);
      setIsAboutOpen(false);
    }
  }, [isHamburgerOpen])

  const closeAll = () => {
    setIsHamburgerOpen(false);
    setIsProductsOpen(false);
    setIsSolutionsOpen(false);
    setIsResourcesOpen(false);
    setIsAboutOpen(false);
  }

  return (
    <nav className="top-0 bg-white z-[100] flex flex-col lg:flex-row
                justify-center relative h-full">
      <div className="w-full flex justify-between px-5 py-2 max-w-[73rem]">
        <Link href="/" onClick={closeAll}>
          <Image src="https://www.360insights.com/hubfs/_2022/logo.svg" width={190} height={48} alt="360insights logo" />
        </Link >
          <Hamburger isOpen={isHamburgerOpen} setIsOpen={setIsHamburgerOpen} />
        <div className="hidden lg:flex justify-between items-center w-[42rem] relative">
          <DesktopMenuItem title="Products" isOpen={isProductsOpen} setIsOpen={setIsProductsOpen} section={products} />
          <DesktopMenuItem title="Solutions" isOpen={isSolutionsOpen} setIsOpen={setIsSolutionsOpen} section={solutions} />
          <DesktopMenuItem title="Resources" isOpen={isResourcesOpen} setIsOpen={setIsResourcesOpen} section={resources} />
          <DesktopMenuItem title="About" isOpen={isAboutOpen} setIsOpen={setIsAboutOpen} section={about} />
          <button className="bg-cyan-360 hover:bg-pink-600 text-white text-lg font-bold tracking-wider leading-5 py-3.5 px-6 rounded-[2rem]">Talk to Sales</button>
        </div>
      </div>
      {isHamburgerOpen &&
        <div className="absolute left-0 right-0 bg-white max-h-mobileMenu shadow-sm w-full
                        flex flex-col px-5 text-sm font-semibold lg:hidden
                         top-16 overflow-y-auto"
        >
            <MobileMenuItem title='Products' isOpen={isProductsOpen} setIsOpen={setIsProductsOpen} section={products} />
            <MobileMenuItem title='Solutions' isOpen={isSolutionsOpen} setIsOpen={setIsSolutionsOpen} section={solutions} />
            <MobileMenuItem title='Resources' isOpen={isResourcesOpen} setIsOpen={setIsResourcesOpen} section={resources} />
            <MobileMenuItem title='About' isOpen={isAboutOpen} setIsOpen={setIsAboutOpen} section={about} />
            <button className="bg-cyan-360 hover:bg-pink-600 active:bg-pink-600 text-white text-lg font-bold tracking-wider py-1.5 px-11 mt-2 mb-4 rounded-3xl">Talk to Sales</button>
        </div>
      }
    </nav>
  )
}