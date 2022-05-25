import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const CustomLink = ({ to, children, className }) => {
  const { pathname } = useResolvedPath(to)
  const match = useMatch({ path: pathname, end: true })

  return (
    <Link
      to={to}
      className={`btn !px-2 !py-1.5 !h-auto !min-h-0 !capitalize text-base font-normal  ${
        match
          ? 'btn-neutral text-base-100'
          : 'bg-transparent border-0 text-neutral hover:bg-neutral/10'
      } ${className ? className : ''}`}
    >
      {children}
    </Link>
  )
}

export default CustomLink
