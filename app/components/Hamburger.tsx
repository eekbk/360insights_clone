import { useState, Dispatch, SetStateAction } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Hamburger({ isOpen, setIsOpen }: Props) {
  // const [isOpen, setIsOpen] = useState(false);
  const hamburgerLine: string = 'h-0.5 w-5 my-0.5 bg-black transition ease transform duration-300'

  return (
    <button
      className="lg:hidden flex flex-col justify-center items-center group"
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