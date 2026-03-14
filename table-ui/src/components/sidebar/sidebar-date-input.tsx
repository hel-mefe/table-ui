interface SidebarDateInputProps {
  label: string
  value?: string
  onChange: (value: string) => void
}

export default function SidebarDateInput({
  label,
  value,
  onChange
}: SidebarDateInputProps) {
  return (
    <div className="flex flex-col gap-y-1">
      <span className="text-xs text-text-secondary">
        {label}
      </span>

      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
        border
        border-border-default
        rounded-md
        px-3
        py-2
        text-sm
        "
      />
    </div>
  )
}