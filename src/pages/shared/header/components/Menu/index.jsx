import React from 'react'
import MenuItems from '../MenuItems'

const Menu = () => {
  return (
    <div className='navbar-center hidden lg:flex'>
      <ul className='menu menu-horizontal p-0 space-x-1'>
        <MenuItems />
      </ul>
    </div>
  )
}

export default Menu
