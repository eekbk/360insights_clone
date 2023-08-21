import { Dispatch, SetStateAction } from "react";
import { MenuCategory } from "../_types/interfaces";
import Chevron from "./chevron";
import MobileMenuModal from "./mobileMenuModal";

type Props = {
  title: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  section: MenuCategory[];
}

export default function MobileMenuItem({title, isOpen, setIsOpen, section}: Props) {
  console.log('isOpen: ', isOpen);

  return(
    <>
      <div className="flex justify-between py-6 cursor-pointer hover:underline active:underline" onClick={() => {setIsOpen(!isOpen)}}>
        <div>{title}</div>
        <Chevron isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {isOpen && <MobileMenuModal section={section} />}
    </>
  )
}