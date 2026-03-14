import Avatar from "./avatar"
import { Profile } from "../features/profile/profile.types"
import { TiMessages } from "react-icons/ti"
import { IoIosNotificationsOutline } from "react-icons/io"

interface NavbarActionsProps {
  profile: Profile
}

export default function NavbarActions({ profile }: NavbarActionsProps) {
  return (
    <div className="flex text-[#687582] gap-x-8 items-center">
      <IoIosNotificationsOutline size={18} />
      <TiMessages size={18} />
      <Avatar profile={profile} />
    </div>
  )
}