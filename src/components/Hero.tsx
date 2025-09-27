'use client'
import Button from './ui/Button'

interface HeroProps {
  title: string
  subtitle: string
  primaryAction: {
    text: string
    href: string
  }
  secondaryAction: {
    text: string
    href: string
  }
}

export default function Hero({ title, subtitle, primaryAction, secondaryAction }: HeroProps) {
  return (
    <section 
      className='relative rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl'
      style={{
        background: 'var(--dark-gradient)',
        border: '1px solid var(--border)'
      }}
    >
      <div className='max-w-4xl'>
        <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6' style={{ color: 'var(--text-primary)' }}>
          {title}
        </h1>
        <p className='text-lg md:text-xl mb-8 max-w-3xl leading-relaxed' style={{ color: 'var(--text-secondary)' }}>
          {subtitle}
        </p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Button as="a" href={primaryAction.href} size="lg">
            {primaryAction.text}
          </Button>
          <Button as="a" href={secondaryAction.href} variant="secondary" size="lg">
            {secondaryAction.text}
          </Button>
        </div>
      </div>
    </section>
  )
}
