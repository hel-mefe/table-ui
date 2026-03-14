import { Profile } from "../features/profile/profile.types"

interface AvatarProps {
  profile: Profile
}

export default function Avatar({ profile }: AvatarProps) {
  return (
    <div className="flex items-center gap-x-2">
      <img
        src={profile.avatarUrl}
        className="w-6 h-6 rounded-full"
      />

      <div className="flex flex-col">
        <span className="text-sm">{profile.name}</span>
        <span className="text-xs">{profile.location}</span>
      </div>
    </div>
  )
}