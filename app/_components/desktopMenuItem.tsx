import { useRef, useEffect, Dispatch, SetStateAction, useState } from "react";
import { MenuCategory } from "../_types/interfaces";
import { debounce } from "../helpers/functions";
import Chevron from "./chevron";
import DesktopMenuModal from "./desktopMenuModal";

type Props = {
  title: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  section: MenuCategory[];
}

export default function DesktopMenuItem({title, isOpen, setIsOpen, section}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  // check for window resizing to add event listener
  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize(window.innerWidth);
    }, 250); // debounce to avoid excessive state changes or rerenders

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])


  // add event listeners to close dropdown if user clicks outside
  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if(isOpen && ref.current && !ref.current?.contains(e.target)) {
        setIsOpen(false);
      }
    }
    if (windowSize >= 1024 && isOpen) {
      document.addEventListener('mousedown', checkIfClickedOutside);

      return () => {document.removeEventListener('mousedown', checkIfClickedOutside)}
    }

    return () => {}
  }, [isOpen, setIsOpen, title, windowSize])



  return (
    <div ref={ref}>
      <div  className='hidden lg:flex text-sm font-semibold [&>*]:mx-1' >
        <button id={title} onClick={() => setIsOpen(!isOpen)} className="focus:underline active:underline hover:underline flex items-center justify-between gap-3"  >
          {title}
          <Chevron isOpen={isOpen} size="medium"/>
        </button>
      </div>
    {isOpen && <DesktopMenuModal section={section}/>}

    </div>
  )
}