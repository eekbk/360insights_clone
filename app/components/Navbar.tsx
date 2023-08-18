import Image from "next/image";
import Hamburger from "./Hamburger";

const menuItems: string[] = ['Products', 'Solutions', 'Resources', 'About'];

export default function Navbar() {
  return (
    <nav className="top-0 sticky bg-white z-50">

      <div className="w-full flex justify-between px-5 py-2">
        <div className="">
        <Image src="https://www.360insights.com/hubfs/_2022/logo.svg" width={190} height={48} alt="360insights logo" />
        </div>
        <Hamburger />
      </div>
    </nav>
  )
}