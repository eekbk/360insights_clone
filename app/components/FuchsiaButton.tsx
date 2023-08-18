'use client'
export default function FuchsiaButton({ text }: { text: string }) {
  return (
    <button className="bg-pink-600 text-white text-lg font-bold tracking-wider py-3 px-11 my-9 rounded-3xl">{text}</button>
  )
}