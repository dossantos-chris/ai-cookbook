import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#5e5e5e] bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto p-6'>
            <Link href={'/'} className='text-4xl text-white font-semibold'>Logo</Link>
            <div>
                <ul className='flex p-4 flex-row space-x-6'>
                </ul>
            </div>    
        </div>
    </nav>
  )
}

export default Header