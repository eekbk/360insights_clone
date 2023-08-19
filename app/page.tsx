import Image from 'next/image'
import Navbar from './_components/Navbar'
import ContactHeader from './_components/ContactHeader';
import Hero from './_components/Hero';

export default function Home() {
  const numberGenerator = () => {
    const result: number[] = [];
    let i: number = 0;

    while (i < 100) {
      result.push(i);
      i++;
    }

    return result;
  }

  const numberList: number[] = numberGenerator();

  return (
      <>
        <Hero />
      </>
  )
}
