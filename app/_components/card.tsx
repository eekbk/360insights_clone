import Image from "next/image";
import { CardInfo } from "../_types/interfaces"

type Props = {
  cardInfo: CardInfo,
}

export default function Card({cardInfo}: Props) {
  const { category, title, callToAction, imageUrl } = cardInfo;

  return (
    <div className="bg-white rounded-3xl p-4 py-8 shadow-sm space-y-3">
      <div className="flex justify-between items-center">
        <div className="w-12">
          <Image src={imageUrl} width={100} height={100} alt={category} />
        </div>
        <button className="w-[4.5rem] h-12 px-6 py-4 active:bg-cyan-600 rounded-3xl">
          <Image src='/redArrow.svg' width={16} height={16} alt='redArrow' />
        </button>
      </div>
      <h2 className="text-sm">{category}</h2>
      <h1 className="text-cyan-600 font-bold text-xl">{title}</h1>
      <h2 className="text-sm">{callToAction}</h2>

    </div>
  )
}