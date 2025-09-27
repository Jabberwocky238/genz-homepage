'use client'

import Card from './ui/Card'
import Icon from './ui/Icon'

interface CareerCardProps {
  title: string
  icon: React.ReactNode
  variant: 'blue' | 'purple' | 'indigo'
  items: {
    label: string
    content: string
  }[]
}

export default function CareerCard({ title, icon, variant, items }: CareerCardProps) {
  return (
    <Card hover>
      <Icon variant={variant} size="lg" className="mb-6">
        {icon}
      </Icon>
      <h3 className='text-2xl font-bold mb-6' style={{ color: 'var(--text-primary)' }}>{title}</h3>
      <div className='space-y-4'>
        {items.map((item, index) => (
          <div key={index} className='flex items-start space-x-3'>
            <div 
              className='w-2 h-2 rounded-full mt-2 flex-shrink-0'
              style={{
                backgroundColor: variant === 'blue' ? 'var(--accent)' :
                               variant === 'purple' ? 'var(--navy-light)' : 'var(--text-primary)'
              }}
            ></div>
            <p style={{ color: 'var(--text-secondary)' }}>
              <span className='font-semibold' style={{ color: 'var(--text-primary)' }}>{item.label}：</span>
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </Card>
  )
}
