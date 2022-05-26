import React from 'react'

const ControlledInput = ({
  label,
  error,
  required,
  placeholder,
  type,
  inputClass,
  className,
  bordered,
  value,
  readOnly,
  step,
  onChange,
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
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        step={step}
        required={required}
      />
      {error && (
        <label className='label !py-1'>
          <span className='label-text-alt text-red-500'>{error?.message}</span>
        </label>
      )}
    </div>
  )
}

export default ControlledInput
