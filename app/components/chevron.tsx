import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Image from "next/image";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  size?: string;
}

export default function Chevron({isOpen, setIsOpen, size = 'large'}: Props) {
  const [caratClasses, setCaratClasses] = useState('');
  const largeCaratClasses: string = "h-[0.75em] w-[0.75em] border-t-[0.25em] border-r-[0.25em] border-black rotate-[135deg] border-solid ";
  const smallCaratClasses: string = "h-[0.6em] w-[0.6em] border-t-[0.2em] border-r-[0.2em] border-black rotate-[135deg] border-solid ";
  const mediumCaratClasses: string = "relative bottom-0.5 h-[0.6em] w-[0.6em] border-t-[0.2em] border-r-[0.2em] border-black rotate-[135deg] border-solid ";

  useEffect(() => {
    if (size === 'large') {
      setCaratClasses(largeCaratClasses);
    } else if (size === 'medium') {
      setCaratClasses(mediumCaratClasses);
    } else {
      setCaratClasses(smallCaratClasses);
    }
  }, [size])
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`transition ease transform duration-300 flex items-center ${
        isOpen
        ? 'rotate-180 border-cyan-600'
        : ''
      }`}
    >
              <div
                className={`${caratClasses} ${
                  isOpen && size !== 'small'
                  ? 'border-cyan-600'
                  : ''
                }`}
                onClick={() => {setIsOpen(!isOpen)}}
                id={size === 'small' ? 'small-carat' : ''}
              />


    {/* <button

      onClick={() => {setIsOpen(!isOpen)}}
      >
      <Image src="/chevronDown.svg" width={0} height={0} style={{ width: '15px', height: 'auto'}} alt="carat" />
    </button> */}

    </div>
  )
}