'use client'

export default function FuchsiaButton({ text }: { text: string }) {
  return (
    <button className="bg-pink-600 text-white text-lg font-bold tracking-wider py-3 px-11 md:px-6 md:rounded-[2rem] my-9 rounded-3xl lg:max-w-xs">{text}</button>
  )
}