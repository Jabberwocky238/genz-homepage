import { ReactNode } from 'react'

interface SectionProps {
  children?: ReactNode
  title?: string
  subtitle?: string
  id?: string
  className?: string
  centered?: boolean
}

export default function Section({
  children,
  title,
  subtitle,
  id,
  className = '',
  centered = true
}: SectionProps) {
  return (
    <section id={id} className={`space-y-8 ${className}`}>
      {(title || subtitle) && (
        <div className={centered ? 'text-center' : ''}>
          {title && (
            <h2 className='text-3xl font-bold mb-4' style={{ color: 'var(--text-primary)' }}>{title}</h2>
          )}
          {subtitle && (
            <p className='text-lg' style={{ color: 'var(--text-secondary)' }}>{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
