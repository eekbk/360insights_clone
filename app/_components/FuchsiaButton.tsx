'use client'

export default function FuchsiaButton({ text }: { text: string }) {
  return (
    <button
      className="bg-pink-600 active:bg-cyan-360 text-white text-lg md:text-xl font-bold leading-8
                tracking-wider py-3 px-11  md:rounded-[2rem] my-11 rounded-3xl
                sm:w-fit"
    >
      {text}
    </button>
  )
}