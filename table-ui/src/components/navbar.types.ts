import { NavItem } from "../features/navigation/navigation.types"
import { Profile } from "../features/profile/profile.types"

export interface NavbarProps {
  items: NavItem[]
  profile: Profile
}