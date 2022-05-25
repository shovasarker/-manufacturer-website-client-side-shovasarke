import React from 'react'
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from 'react-icons/fa'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='w-full py-20 text-base-100 bg-neutral'>
      <div className='footer !container !px-6'>
        <div>
          <h3 className='text-2xl border py-2 px-4'>Abacus Parts</h3>
          <p className='text-lg mt-4'>follow us on</p>
          <div className='flex justify-start items-center gap-2'>
            <a
              href='https://www.facebook.com/'
              target={'_blank'}
              rel='noreferrer'
              alt=''
            >
              <FaFacebookSquare className='w-8 h-8' />
            </a>
            <a
              href='https://twitter.com/?lang=en'
              target={'_blank'}
              rel='noreferrer'
              alt=''
            >
              <FaTwitterSquare className='w-8 h-8' />
            </a>
            <a
              href='https://www.instagram.com/?hl=en'
              target={'_blank'}
              rel='noreferrer'
              alt=''
            >
              <FaInstagramSquare className='w-8 h-8' />
            </a>
          </div>
        </div>
        <div>
          <span className='footer-title'>Parts Available</span>
          <a href='/' className='link link-hover'>
            RAM
          </a>
          <a href='/' className='link link-hover'>
            Chipset
          </a>
          <a href='/' className='link link-hover'>
            Battery
          </a>
          <a href='/' className='link link-hover'>
            Capacitors
          </a>
        </div>
        <div className='w-full md:justify-items-end'>
          <span className='md:w-2/3 xl:w-1/2 text-left footer-title'>
            Our Address
          </span>
          <span className='md:w-2/3 xl:w-1/2 text-left'>
            California - 12/13 new Hudson road
          </span>
        </div>
      </div>
      <p className='text-center mt-16'>
        Copyright &copy; {year} All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
