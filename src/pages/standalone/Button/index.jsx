import React from 'react'

const Button = ({
  children,
  fullWidth,
  outlined,
  neutral,
  onClick,
  className,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${fullWidth && 'btn-block'} ${
        !outlined
          ? !neutral
            ? 'bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary border-0'
            : 'bg-neutral'
          : 'btn-outline !border-neutral !text-neutral hover:!text-base-100 hover:bg-neutral'
      } text-base-100 font-bold ${className ? className : ''}`}
    >
      {children}
    </button>
  )
}

export default Button
