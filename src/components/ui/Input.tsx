'use client'

import { forwardRef } from 'react'

interface InputProps {
  label?: string
  placeholder?: string
  required?: boolean
  type?: 'text' | 'email' | 'password'
  name?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  placeholder,
  required = false,
  type = 'text',
  name,
  value,
  onChange,
  className = ''
}, ref) => {
  return (
    <div>
      {label && (
        <label className='block text-sm font-semibold mb-2' style={{ color: 'var(--text-primary)' }}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl transition-all duration-200 ${className}`}
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--border)',
          color: 'var(--text-primary)'
        }}
        onFocus={(e) => {
          e.target.style.borderColor = 'var(--accent)'
          e.target.style.boxShadow = '0 0 0 2px var(--accent)'
        }}
        onBlur={(e) => {
          e.target.style.borderColor = 'var(--border)'
          e.target.style.boxShadow = 'none'
        }}
      />
    </div>
  )
})

Input.displayName = 'Input'

export default Input
