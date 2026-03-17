import { SidebarCheckboxLabel, AppCheckbox } from "../ui/checkbox"

interface SidebarCheckboxProps {
  label: string
  checked: boolean
  onChange: () => void
}

export default function SidebarCheckbox({
  label,
  checked,
  onChange
}: SidebarCheckboxProps) {
  return (
    <SidebarCheckboxLabel
      control={
        <AppCheckbox checked={checked} onChange={onChange} />
      }
      label={label}
    />
  )
}