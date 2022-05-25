import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomLink from '../../standalone/CustomLink'

const Dashboard = () => {
  return (
    <main className='container px-6'>
      <div className='drawer drawer-mobile'>
        <input
          id='dashboard-sidebar'
          type='checkbox'
          className='drawer-toggle'
        />
        <div className='drawer-content lg:ml-6'>
          <Outlet />
        </div>
        <div className='drawer-side'>
          <label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
          <ul className='menu py-4 overflow-y-auto w-56 bg-base-100 text-base-content'>
            {/* <!-- Sidebar content here --> */}
            <li>
              <CustomLink className={'!rounded-none'} to={'/dashboard'}>
                My Profile
              </CustomLink>
              <CustomLink
                className={'!rounded-none'}
                to={'/dashboard/my-orders'}
              >
                My Orders
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className={'!rounded-none'}
                to={'/dashboard/my-reviews'}
              >
                My Reviews
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className={'!rounded-none'}
                to={'/dashboard/add-review'}
              >
                Add a Review
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
