import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RiMenuUnfoldFill } from 'react-icons/ri'
import Menu from '../Menu'
import MobileMenu from '../MobileMenu'

const Navbar = () => {
  const { pathname } = useLocation()
  return (
    <div className='navbar !container !px-6 py-4 justify-between bg-base-100'>
      <div>
        {pathname.includes('dashboard') && (
          <label
            htmlFor='dashboard-sidebar'
            className='btn btn-ghost btn-square drawer-button lg:hidden mr-4'
          >
            <RiMenuUnfoldFill className='w-7 h-7' />
          </label>
        )}
        <Link
          to={'/'}
          className='block text-2xl navbar-center text-neutral font-medium'
        >
          Abacus Parts
        </Link>
      </div>
      <MobileMenu />
      <Menu />
    </div>
  )
}

export default Navbar
