import React from 'react'

const Input = ({
  register,
  label,
  error,
  name,
  required,
  pattern,
  minLength,
  min,
  max,
  placeholder,
  type,
  inputClass,
  className,
  bordered,
}) => {
  return (
    <div className={`${className ? className : ''}`}>
      {label && (
        <label className='label !py-1'>
          <span className='label-text'>{label}</span>
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`input ${bordered && 'input-bordered'} w-full ${
          error && 'border-red-500'
        } ${inputClass ? inputClass : ''}`}
        {...register(name, {
          required: required,
          pattern: pattern,
          minLength: minLength,
          miv: min,
          max: max,
        })}
      />
      {error && (
        <label className='label !py-1'>
          <span className='label-text-alt text-red-500'>{error?.message}</span>
        </label>
      )}
    </div>
  )
}

export default Input
