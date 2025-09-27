'use client'

interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div 
      className='px-4 md:px-[15%] min-h-screen'
      style={{ backgroundColor: 'var(--navy-secondary)' }}
    >
      {children}
    </div>
  )
}
