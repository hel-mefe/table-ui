import { NavItem } from "../../features/navigation/navigation.types"

interface NavbarItemProps {
  item: NavItem
}

export default function NavbarItem({ item }: NavbarItemProps) {
  return (
    <a
      href={item.path}
      className="text-sm hover:text-black cursor-pointer"
    >
      {item.label}
    </a>
  )
}