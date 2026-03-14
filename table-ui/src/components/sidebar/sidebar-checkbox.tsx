interface SidebarCheckboxProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export default function SidebarCheckbox({
  label,
  checked,
  onChange
}: SidebarCheckboxProps) {
  return (
    <label className="flex items-center gap-x-3 text-text-secondary cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 border-border-default rounded"
      />

      {label}
    </label>
  )
}