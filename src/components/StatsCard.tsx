'use client'
import Card from './ui/Card'

interface StatItem {
  value: string
  label: string
  description: string
  color: 'blue' | 'purple' | 'indigo'
}

interface StatsCardProps {
  stats: StatItem[]
}

export default function StatsCard({ stats }: StatsCardProps) {
  const getColorStyle = (color: string) => {
    switch (color) {
      case 'blue':
        return { color: 'var(--accent)' }
      case 'purple':
        return { color: 'var(--navy-light)' }
      case 'indigo':
        return { color: 'var(--text-primary)' }
      default:
        return { color: 'var(--text-primary)' }
    }
  }

  return (
    <Card className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className='text-center'>
          <div className='text-4xl font-bold mb-2' style={getColorStyle(stat.color)}>
            {stat.value}
          </div>
          <div className='text-sm font-medium mb-1' style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
          <div className='text-sm' style={{ color: 'var(--text-muted)' }}>{stat.description}</div>
        </div>
      ))}
    </Card>
  )
}
