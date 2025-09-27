import { ReactNode } from 'react'

interface IconProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  variant?: 'blue' | 'purple' | 'indigo' | 'green' | 'orange'
  className?: string
}

export default function Icon({
  children,
  size = 'md',
  variant = 'blue',
  className = ''
}: IconProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }
  
  const variantClasses = {
    blue: 'dark-gradient-light',
    purple: 'bg-gradient-to-br from-slate-400 to-slate-600',
    indigo: 'bg-gradient-to-br from-slate-500 to-slate-700',
    green: 'bg-gradient-to-br from-green-400 to-green-600',
    orange: 'bg-gradient-to-br from-orange-400 to-orange-600'
  }

  return (
    <div className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-xl flex items-center justify-center ${className}`}>
      {children}
    </div>
  )
}
