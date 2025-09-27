'use client'

import { forwardRef } from 'react'

interface TextareaProps {
  label?: string
  placeholder?: string
  required?: boolean
  name?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  rows?: number
  className?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  placeholder,
  required = false,
  name,
  value,
  onChange,
  rows = 4,
  className = ''
}, ref) => {
  return (
    <div>
      {label && (
        <label className='block text-sm font-semibold mb-2' style={{ color: 'var(--text-primary)' }}>
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className={`w-full px-4 py-3 rounded-xl transition-all duration-200 resize-none ${className}`}
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

Textarea.displayName = 'Textarea'

export default Textarea
