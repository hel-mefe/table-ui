import NavbarItem from "./navbar-item"
import NavbarActions from "./navbar-actions"
import { NavbarProps } from "./navbar.types"

export default function Navbar({ items, profile }: NavbarProps) {
  return (
    <div className="bg-[#f4f7f9] h-14 flex items-center justify-between pl-16 pr-12 w-full">

      <div className="flex gap-x-6 text-sm">
        {items.map((item) => (
          <NavbarItem key={item.path} item={item} />
        ))}
      </div>

      <NavbarActions profile={profile} />

    </div>
  )
}