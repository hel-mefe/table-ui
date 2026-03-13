import React from 'react'
import vite from '../../public/vite.svg'

const Avatar = () => {
  return (
    <div className='flex justify-center items-center gap-x-2'>
        <div className='flex'>
            <img src={vite} className='w-6 h-6 rounded-full' />
        </div>
        <div className='flex flex-col'>
            <h3 className='text-sm'>Max Smith</h3>
            <h3 className='text-xs'>London, UK</h3>
        </div>
    </div>
  )
}

export default Avatar