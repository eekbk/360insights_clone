import { CardInfo } from "@/app/_types/interfaces";

const webinarImage: string = 'https://www.360insights.com/hubfs/_2022/icons/360icons/homepage/Hero%20content%20pieces/webinar.svg';
const eBookImage: string = 'https://www.360insights.com/hubfs/_2022/icons/360icons/homepage/Hero%20content%20pieces/blog.svg';

export const cards: CardInfo[] = [
  {
    category: 'eBook',
    title: 'Consumer Durables in the Post Pandemic Era: A Renaissance Journey',
    callToAction: 'DOWNLOAD THE EBOOK NOW',
    imageUrl: eBookImage,
  },
  {
    category: 'Help Sheet',
    title: 'Consumer Incentives: Gift with Purchase vs Cash Incentives',
    callToAction: 'VIEW THE HELP SHEET',
    imageUrl: eBookImage,
  },
  {
    category: 'Webinar',
    title: 'This Is Not Your Grandparents Partner Enablement',
    callToAction: 'WATCH NOW',
    imageUrl: webinarImage,
  }
]
