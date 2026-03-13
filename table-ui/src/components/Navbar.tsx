import React from 'react'

interface NavItem {
    label: string
    path: string
}

interface NavbarProps {
    items: NavItem[]
    profile: Profile
}

const Navbar = () => {
  return (
    <div className='bg-gray-300 h-32 flex gap-x-4'>
        <h2>Service Dashboard</h2>
        <h2>Finance Forecast</h2>
        <h2>Human Resources</h2>

    </div>
  )
}

export default Navbar