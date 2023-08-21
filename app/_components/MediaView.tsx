import Image from "next/image"
import Card from "./card";
import { cards } from "@/data/cardsInfo";


export default function MediaView() {
  return (
    <div className="w-full flex justify-center items-center backdrop-opacity-70" >
      <div className="absolute -z-50 w-full h-full opacity-70" style={{background: 'linear-gradient(#F1F1F1 50%, #FFFFFF 50%'}}/>
      <div className="grid grid-cols-1 md:grid-rows-1 gap-5 md:grid-cols-3 max-w-[73rem] p-5"  >
        {/* <Image src={eBookImage} height={200} width={200} alt=''/> */}
        {cards.map(card => <Card key={card.title} cardInfo={card} />)}
      </div>
    </div>
  )
}