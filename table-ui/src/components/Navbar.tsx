import React from 'react'
import Avatar from './Avatar'

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
    <div className='bg-[#f4f7f9] h-14 items-center justify-between pl-16 pr-4 flex gap-x-6 w-full'>
        <div className='flex gap-x-6 text-md'>
            <h2>Service Dashboard</h2>
            <h2>Finance Forecast</h2>
            <h2>Human Resources</h2>
        </div>
        <div className='flex gap-x-4'>
            <h2>Icon1</h2>
            <h2>Icon2</h2>
            <Avatar />
        </div>
    </div>
  )
}

export default Navbar