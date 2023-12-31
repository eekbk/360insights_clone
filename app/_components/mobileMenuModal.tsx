import { MenuCategory } from "../_types/interfaces"

type Props = {
  section: MenuCategory[],
}

export default function MobileMenuModal({section}: Props) {
  return (
    <div className="bg-white lg:hidden h-full">
      {section.map(category => (
        <div key={category.title} className="py-4">
          <h1 className="text-cyan-600 text-lg font-bold tracking-wide">{category.title}</h1>
          {category.items.map(item => (
            <div key={item[0]} className="ml-4 my-5">
              <h2 className="font-semibold text-sm tracking-wide">{item[0]}</h2>
              {item[1] && <h3 className="font-normal text-gray-600 tracking-wide">{item[1]}</h3>}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}