import Avatar from "../avatar"
import { Profile } from "../../features/profile/profile.types"
import { TiMessages } from "react-icons/ti"
import { IoIosNotificationsOutline } from "react-icons/io"

interface NavbarActionsProps {
  profile: Profile
}

export default function NavbarActions({ profile }: NavbarActionsProps) {
  return (
    <div className="flex text-[#687582] h-10 gap-x-10 items-center">
      <IoIosNotificationsOutline size={"24px"} />
      <TiMessages size={"24px"} />
      <Avatar profile={profile} />
    </div>
  )
}