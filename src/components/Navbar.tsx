'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from './ui/Button'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: '首页', href: '/' },
    { name: 'AI咨询', href: '/agent' },
    { name: '求职辅导', href: '/pricing' },
    { name: '社区', href: '/community' },
    { name: '关于我们', href: '/about' },
    { name: '数据库测试', href: '/database-demo' },
  ]

  return (
    <nav className='dark-bg shadow-2xl sticky top-0 z-50' style={{ borderBottom: '1px solid var(--border)' }}>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <div className='w-8 h-8 dark-gradient-light rounded-lg flex items-center justify-center'>
              <span className='font-bold text-sm' style={{ color: 'var(--text-primary)' }}>GZ</span>
            </div>
            <span className='text-xl font-bold' style={{ color: 'var(--text-primary)' }}>GenZcareerpath</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='transition-colors font-medium'
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--text-primary)'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className='hidden md:flex items-center space-x-4'>
            <Button as="a" href="/contact" variant="outline" size="sm">
              联系我们
            </Button>
            <Button as="a" href="/agent" size="sm">
              开始测评
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='focus:outline-none transition-colors'
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}
            >
              <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                {isMenuOpen ? (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                ) : (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 dark-card' style={{ borderTop: '1px solid var(--border)' }}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='block px-3 py-2 text-base font-medium rounded-md transition-colors'
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.color = 'var(--text-primary)';
                    target.style.backgroundColor = 'var(--navy-light)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.color = 'var(--text-secondary)';
                    target.style.backgroundColor = 'transparent';
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className='pt-4 space-y-2'>
                <Button as="a" href="/contact" variant="outline" size="sm" className='w-full'>
                  联系我们
                </Button>
                <Button as="a" href="/agent" size="sm" className='w-full'>
                  开始测评
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
