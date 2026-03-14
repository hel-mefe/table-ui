import SidebarSection from "./sidebar-section"
import SidebarCheckbox from "./sidebar-checkbox"
import SidebarDateInput from "./sidebar-date-input"
import { SidebarProps } from "./sidebar.types"


export default function Sidebar({
  filters,
  onChange,
  onApply,
  onClear
}: SidebarProps) {
  return (
    <aside
      className="
      bg-[#F4F7F9]
      w-[288px]
      min-h-screen
      p-4
      flex
      flex-col
      gap-y-8
      justify-between
      "
    >

    <div className="flex gap-x-2 justify-center items-center">
        <h2 className="text-[#1A78F2]">Gler</h2>
        <h3>Admin Panel</h3>
    </div>

      <h2 className="flex items-center text-md rounded-lg font-semibold px-4 py-2 text-text-primary text-black bg-[#D3D8DD] ">
        User Management
      </h2>

      {/* Postcode */}
      <SidebarSection title="Postcode">
        <input
          type="text"
          placeholder="ZIP"
          value={filters.postcode ?? ""}
          onChange={(e) =>
            onChange({ ...filters, postcode: e.target.value })
          }
          className="
          border
          border-border-default
          rounded-md
          bg-whiteWe'll switch the approach now, we'll work with 
          w-[127px]
          px-3
          py-2
          "
        />
      </SidebarSection>

      {/* Registration Status */}
      <SidebarSection title="Registration Status">
        <SidebarCheckbox
          label="Onboarded"
          checked={filters.status?.includes("Onboarded") ?? false}
          onChange={() => {}}
        />

        <SidebarCheckbox
          label="Rejected"
          checked={filters.status?.includes("Rejected") ?? false}
          onChange={() => {}}
        />
      </SidebarSection>

      {/* Date */}
      <SidebarSection title="Date Registered">

        <div className="flex gap-x-3">

          <SidebarDateInput
            label="Start"
            value={filters.startDate}
            onChange={(value) =>
              onChange({ ...filters, startDate: value })
            }
          />

          <SidebarDateInput
            label="End"
            value={filters.endDate}
            onChange={(value) =>
              onChange({ ...filters, endDate: value })
            }
          />

        </div>

      </SidebarSection>

      {/* Vendor Type */}
      <SidebarSection title="Vendor Type">

        <SidebarCheckbox
          label="Independent"
          checked={filters.vendorType?.includes("Independent") ?? false}
          onChange={() => {}}
        />

        <SidebarCheckbox
          label="Company"
          checked={filters.vendorType?.includes("Company") ?? false}
          onChange={() => {}}
        />

      </SidebarSection>

      {/* Service Offering */}
      <SidebarSection title="Service Offering">

        <SidebarCheckbox
          label="Housekeeping"
          checked={false}
          onChange={() => {}}
        />

        <SidebarCheckbox
          label="Window Cleaning"
          checked={false}
          onChange={() => {}}
        />

        <SidebarCheckbox
          label="Car Valet"
          checked={false}
          onChange={() => {}}
        />

      </SidebarSection>

      {/* Actions */}

      <div className="flex flex-col gap-y-3 mt-auto">

        <button
          onClick={onApply}
          className="
          bg-brand-primary
          hover:bg-brand-primary-hover
          text-white
          rounded-full
          py-3
          transition
          "
        >
          Filter
        </button>

        <button
          onClick={onClear}
          className="
          text-text-secondary
          text-sm
          "
        >
          Clear Filters
        </button>

      </div>

    </aside>
  )
}