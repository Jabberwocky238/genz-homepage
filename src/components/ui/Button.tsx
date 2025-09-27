'use client'

import { ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  href?: string
  as?: 'button' | 'a'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  href,
  as = 'button'
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
  
  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case 'primary':
        return {
          background: 'var(--dark-gradient)',
          color: 'var(--text-primary)',
          border: 'none'
        }
      case 'secondary':
        return {
          background: 'var(--card-bg)',
          color: 'var(--text-primary)',
          border: '2px solid var(--border)'
        }
      case 'outline':
        return {
          background: 'transparent',
          color: 'var(--text-secondary)',
          border: '2px solid var(--border)'
        }
      default:
        return {}
    }
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const content = loading ? (
    <div className='flex items-center space-x-2'>
      <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
      <span>加载中…</span>
    </div>
  ) : (
    children
  )

  const buttonStyle = {
    ...getVariantStyles(variant),
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
  }

  if (as === 'a' && href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} ${sizeClasses[size]} ${className}`}
        style={buttonStyle}
        onMouseEnter={(e) => {
          const target = e.target as HTMLElement;
          if (variant === 'primary') {
            target.style.background = 'linear-gradient(135deg, var(--navy-secondary), var(--navy-light))'
          } else if (variant === 'secondary') {
            target.style.borderColor = 'var(--accent)'
            target.style.backgroundColor = 'var(--navy-light)'
          } else if (variant === 'outline') {
            target.style.backgroundColor = 'var(--navy-light)'
            target.style.color = 'var(--text-primary)'
          }
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLElement;
          Object.assign(target.style, getVariantStyles(variant))
        }}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      style={buttonStyle}
      onMouseEnter={(e) => {
        const target = e.target as HTMLElement;
        if (variant === 'primary') {
          target.style.background = 'linear-gradient(135deg, var(--navy-secondary), var(--navy-light))'
        } else if (variant === 'secondary') {
          target.style.borderColor = 'var(--accent)'
          target.style.backgroundColor = 'var(--navy-light)'
        } else if (variant === 'outline') {
          target.style.backgroundColor = 'var(--navy-light)'
          target.style.color = 'var(--text-primary)'
        }
      }}
      onMouseLeave={(e) => {
        const target = e.target as HTMLElement;
        Object.assign(target.style, getVariantStyles(variant))
      }}
    >
      {content}
    </button>
  )
}
