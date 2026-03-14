interface SidebarSectionProps {
  title: string
  children: React.ReactNode
}

export default function SidebarSection({
  title,
  children
}: SidebarSectionProps) {
  return (
    <div className="flex flex-col gap-y-4">
      <h3 className="text-text-primary font-semibold">
        {title}
      </h3>

      {children}
    </div>
  )
}