import { MenuCategory } from "../_types/interfaces"

type Props = {
  section: MenuCategory[],
}

export default function DesktopMenuModal({section}: Props) {
  return (

  <div className="absolute hidden lg:flex justify-between top-14 right-12 gap-9 bg-white shadow-2xl rounded-3xl py-16 px-10 z-[152] min-w-[268px]">
    {section.map(category => (
      <div key={category.title} className="flex flex-col space-y-5 px-1">
        {category.title && <h1 className="text-cyan-600 text-lg font-bold tracking-wide">{category.title}</h1>}
        {category.items.map(item => (
          <div key={item[0]} className="text-sm">
            <h2 className="font-semibold text-sm tracking-wide">{item[0]}</h2>
            {item[1] && <h3 className="font-normal text-gray-600 tracking-wide">{item[1]}</h3>}
          </div>
        ))}
      </div>

))}
  </div>
)
}