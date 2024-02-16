'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { products, solutions, resources, about } from "@/data/menuItems";
import DesktopMenuItem from "./desktopMenuItem";
import MobileMenuItem from "./mobileMenuItem";

const menuItems: string[] = ['Products', 'Solutions', 'Resources', 'About'];

export default function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState('');

  const handleDropdownToggle = (dropDownName: string) => {
    if (openDropdown === dropDownName) {
      setOpenDropdown('') // we'll toggle off if the same dropdown is clicked again
    } else {
      setOpenDropdown(dropDownName);
    }
  }
  const closeAll = () => {
    setIsHamburgerOpen(false);
    setOpenDropdown('');
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
          <DesktopMenuItem title="Products" isOpen={openDropdown === 'Products'} setIsOpen={() => handleDropdownToggle('Products')} section={products} />
          <DesktopMenuItem title='Solutions' isOpen={openDropdown === 'Solutions'} setIsOpen={() => handleDropdownToggle('Solutions')} section={solutions} />
          <DesktopMenuItem title='Resources' isOpen={openDropdown === 'Resources'} setIsOpen={() => handleDropdownToggle('Resources')} section={resources} />
          <DesktopMenuItem title='About' isOpen={openDropdown === 'About'} setIsOpen={() => handleDropdownToggle('About')} section={about} />
          <button className="bg-cyan-360 hover:bg-pink-600 text-white text-lg font-bold tracking-wider leading-5 py-3.5 px-6 rounded-[2rem]">Talk to Sales</button>
        </div>
      </div>
      {isHamburgerOpen &&
        <div className="absolute left-0 right-0 bg-white max-h-mobileMenu shadow-sm w-full
                        flex flex-col px-5 text-sm font-semibold lg:hidden
                         top-16 overflow-y-auto"
        >
            <MobileMenuItem title='Products' isOpen={openDropdown === 'Products'} setIsOpen={() => handleDropdownToggle('Products')} section={products} />
            <MobileMenuItem title='Solutions' isOpen={openDropdown === 'Solutions'} setIsOpen={() => handleDropdownToggle('Solutions')} section={solutions} />
            <MobileMenuItem title='Resources' isOpen={openDropdown === 'Resources'} setIsOpen={() => handleDropdownToggle('Resources')} section={resources} />
            <MobileMenuItem title='About' isOpen={openDropdown === 'About'} setIsOpen={() => handleDropdownToggle('About')} section={about} />
            <button className="bg-cyan-360 hover:bg-pink-600 active:bg-pink-600 text-white text-lg font-bold tracking-wider py-1.5 px-11 mt-2 mb-4 rounded-3xl">Talk to Sales</button>
        </div>
      }
    </nav>
  )
}