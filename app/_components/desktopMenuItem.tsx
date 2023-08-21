import { useRef, useEffect, Dispatch, SetStateAction } from "react";
import { MenuCategory } from "../_types/interfaces";
import Chevron from "./chevron";
import DesktopMenuModal from "./desktopMenuModal";

type Props = {
  title: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  section: MenuCategory[];
}

export default function DesktopMenuItem({title, isOpen, setIsOpen, section}: Props) {
  const ref = useRef<HTMLInputElement>();
  const windowSize = useRef(window.innerWidth)

  useEffect(() => {
    if (windowSize.current >= 1024) {
      const checkIfClickedOutside = (e: any) => {
        e.preventDefault();
        if(isOpen && !ref.current?.contains(e.target) && e.target.id !== title) {
          setIsOpen(false);
        }
      }

      document.addEventListener('mousedown', checkIfClickedOutside);

      return () => {document.removeEventListener('mousedown', checkIfClickedOutside)}
    }
  }, [isOpen])



  return (
    <>
    <div  className='hidden lg:flex text-sm font-semibold [&>*]:mx-1' >
    <button id={title} onClick={() => setIsOpen(!isOpen)} className="focus:underline active:underline"  >{title}</button>
    <Chevron isOpen={isOpen} setIsOpen={setIsOpen} size="medium"/>
    </div>
    {isOpen && <DesktopMenuModal section={section}/>}

    </>
  )
}