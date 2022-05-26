import React from 'react'

const TextArea = ({
  register,
  name,
  required,
  minLength,
  placeholder,
  type,
  label,
  error,
}) => {
  return (
    <div>
      {label && (
        <label className='label !py-1'>
          <span className='label-text'>{label}</span>
        </label>
      )}
      <textarea
        type={type}
        placeholder={placeholder}
        className='textarea textarea-bordered w-full h-32'
        {...register(name, { required: required, minLength: minLength })}
      />
      {error && (
        <label className='label !py-1'>
          <span className='label-text-alt text-red-500'>{error?.message}</span>
        </label>
      )}
    </div>
  )
}

export default TextArea
