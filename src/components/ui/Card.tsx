import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
  style?: React.CSSProperties
}

export default function Card({
  children,
  className = '',
  hover = false,
  padding = 'md',
  style
}: CardProps) {
  const baseClasses = 'dark-card rounded-2xl shadow-xl'
  const hoverClasses = hover ? 'dark-card-hover' : ''
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}
