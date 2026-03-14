import NavbarItem from "./navbar-item"
import NavbarActions from "./navbar-actions"
import { NavbarProps } from "./navbar.types"

export default function Navbar({ items, profile }: NavbarProps) {
  return (
    <div className="bg-[#f4f7f9] h-14 flex items-center justify-between px-20 py-2 w-full">

      <div className="flex items-center h-10 gap-x-8 text-sm">
        {items.map((item) => (
          <NavbarItem key={item.path} item={item} />
        ))}
      </div>

      <NavbarActions profile={profile} />

    </div>
  )
}