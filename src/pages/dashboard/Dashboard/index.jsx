import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Outlet } from 'react-router-dom'
import CancelContext from '../../../contexts/CancelContext'
import auth from '../../../firebase/firebase.init'
import useAdmin from '../../../hooks/useAdmin'
import CustomLink from '../../standalone/CustomLink'

const Dashboard = () => {
  const { canceled, selectedUser } = useContext(CancelContext)
  const [user] = useAuthState(auth)
  const [admin, loading] = useAdmin(user)
  return (
    <main className='container px-6'>
      <div className='drawer !h-full drawer-mobile'>
        <input
          id='dashboard-sidebar'
          type='checkbox'
          className='drawer-toggle'
        />
        <div className='drawer-content lg:ml-6'>
          <Outlet />
        </div>
        <div className={`drawer-side `}>
          <label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
          <ul
            className={`menu py-4 overflow-y-auto w-56 bg-base-100 text-base-content ${
              canceled?._id || selectedUser?.email ? '!-z-10' : '!z-10'
            }`}
          >
            {/* <!-- Sidebar content here --> */}
            <li>
              <CustomLink className={'!rounded-none'} to={'/dashboard'}>
                My Profile
              </CustomLink>
            </li>
            {!loading ? (
              !admin ? (
                <>
                  <li>
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
                </>
              ) : (
                <>
                  <li>
                    <CustomLink
                      className={'!rounded-none'}
                      to={'/dashboard/manage-orders'}
                    >
                      Manage All Orders
                    </CustomLink>
                  </li>
                  <li>
                    <CustomLink
                      className={'!rounded-none'}
                      to={'/dashboard/add-parts'}
                    >
                      Add Parts
                    </CustomLink>
                  </li>
                  <li>
                    <CustomLink
                      className={'!rounded-none'}
                      to={'/dashboard/make-admin'}
                    >
                      Make Admin
                    </CustomLink>
                  </li>
                  <li>
                    <CustomLink
                      className={'!rounded-none'}
                      to={'/dashboard/manage-parts'}
                    >
                      Manage Parts
                    </CustomLink>
                  </li>
                </>
              )
            ) : null}
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
