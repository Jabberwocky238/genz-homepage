import Hero from '../components/Hero'
import StatsCard from '../components/StatsCard'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import PageLayout from '../components/PageLayout'

// 首页Hero区域数据
const heroData = {
  title: "你的职业梦想启明星",
  subtitle: "AI定制规划 · 行业内推交流 · 低成本高质量服务",
  primaryAction: { text: "立即开启职业测评", href: "/agent" },
  secondaryAction: { text: "AI咨询入口", href: "/contact" }
}

// 价值提炼区数据
const valueCards = [
  {
    icon: (
      <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24' style={{ color: 'var(--accent)' }}>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
      </svg>
    ),
    title: "AI定制规划",
    description: "千人千面个性化方案",
    color: "blue"
  },
  {
    icon: (
      <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24' style={{ color: 'var(--accent)' }}>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
      </svg>
    ),
    title: "行业内推交流",
    description: "直接对接业内专家",
    color: "purple"
  },
  {
    icon: (
      <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24' style={{ color: 'var(--accent)' }}>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
    title: "低成本高质量服务",
    description: "平价享受专业指导",
    color: "indigo"
  }
]

// 统计数据
const stats = [
  { value: '3分钟', label: '测评用时', description: '极速匹配方向', color: 'blue' as const },
  { value: '12+', label: '方向覆盖', description: '技术/内容/运营/管理', color: 'purple' as const },
  { value: '100+', label: '学习资源', description: '工具与模板持续更新', color: 'indigo' as const }
]

// 快速入口
const quickLinks = [
  {
    title: "AI职业咨询",
    description: "个性化职业规划方案",
    href: "/agent",
    icon: "🤖",
    color: "blue"
  },
  {
    title: "求职辅导",
    description: "模拟面试与学习资源",
    href: "/pricing",
    icon: "🎯",
    color: "purple"
  },
  {
    title: "关于我们",
    description: "了解我们的团队与理念",
    href: "/about",
    icon: "👥",
    color: "indigo"
  },
  {
    title: "付费服务",
    description: "查看服务价格与合作",
    href: "/pricing",
    icon: "💎",
    color: "green"
  }
]

export default function Home() {
  return (
    <>
      {/* 首页Hero区域 - 宇宙星空主题 */}
      <section className='relative min-h-screen rounded-3xl overflow-hidden' style={{ background: 'var(--dark-gradient)' }}>
        {/* 星空背景 */}
        <div className='absolute inset-0'>
          <div className='absolute top-20 left-20 w-2 h-2 rounded-full animate-pulse' style={{ backgroundColor: 'var(--text-primary)' }}></div>
          <div className='absolute top-40 right-32 w-1 h-1 rounded-full animate-pulse delay-1000' style={{ backgroundColor: 'var(--accent)' }}></div>
          <div className='absolute top-60 left-1/3 w-1.5 h-1.5 rounded-full animate-pulse delay-2000' style={{ backgroundColor: 'var(--accent)' }}></div>
          <div className='absolute top-80 right-20 w-1 h-1 rounded-full animate-pulse delay-500' style={{ backgroundColor: 'var(--accent)' }}></div>
          <div className='absolute bottom-40 left-16 w-2 h-2 rounded-full animate-pulse delay-1500' style={{ backgroundColor: 'var(--text-primary)' }}></div>
          <div className='absolute bottom-60 right-1/3 w-1 h-1 rounded-full animate-pulse delay-3000' style={{ backgroundColor: 'var(--accent)' }}></div>
        </div>

        <div className='relative z-10 flex items-center min-h-screen p-8 md:p-12 lg:p-16'>
          <div className='max-w-4xl'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight' style={{ color: 'var(--text-primary)' }}>
              {heroData.title}
            </h1>
            <p className='text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed' style={{ color: 'var(--text-secondary)' }}>
              {heroData.subtitle}
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button as="a" href={heroData.primaryAction.href} size="lg" className='dark-gradient'>
                {heroData.primaryAction.text}
              </Button>
              <Button as="a" href={heroData.secondaryAction.href} variant="outline" size="lg" className='border-white text-white hover:bg-white hover:text-slate-900'>
                {heroData.secondaryAction.text}
              </Button>
            </div>
          </div>
        </div>
      </section>
      <PageLayout>
        <div className='flex flex-col gap-16 py-16'>
          {/* 价值提炼区 */}
          <Section title="核心优势" subtitle="解决定位不清、信息碎、价格高的核心痛点">
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {valueCards.map((card, index) => (
                <Card key={index} hover className='text-center'>
                  <div className='flex justify-center mb-4'>
                    {card.icon}
                  </div>
                  <h3 className='text-2xl font-bold mb-3' style={{ color: 'var(--text-primary)' }}>{card.title}</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{card.description}</p>
                </Card>
              ))}
            </div>
          </Section>

          {/* 统计数据 */}
          <div className='-mt-8'>
            <StatsCard stats={stats} />
          </div>

          {/* 快速入口 */}
          <Section title="快速入口" subtitle="选择您需要的服务">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {quickLinks.map((link, index) => (
                <Card key={index} hover className='text-center group'>
                  <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                    {link.icon}
                  </div>
                  <h3 className='text-xl font-bold mb-2' style={{ color: 'var(--text-primary)' }}>{link.title}</h3>
                  <p style={{ color: 'var(--text-secondary)' }} className='mb-4'>{link.description}</p>
                  <Button as="a" href={link.href} variant="outline" className='w-full'>
                    了解更多
                  </Button>
                </Card>
              ))}
            </div>
          </Section>

          {/* 用户信任区 */}
          <Section title="用户信赖" subtitle="合作高校与用户好评">
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {/* 合作高校 */}
              <Card className='text-center'>
                <h3 className='text-xl font-bold mb-4' style={{ color: 'var(--text-primary)' }}>合作高校</h3>
                <div className='space-y-2'>
                  <div className='text-lg' style={{ color: 'var(--text-secondary)' }}>北京大学</div>
                  <div className='text-lg' style={{ color: 'var(--text-secondary)' }}>南京大学</div>
                  <div className='text-lg' style={{ color: 'var(--text-secondary)' }}>浙江大学</div>
                </div>
              </Card>

              {/* 用户好评 */}
              <Card className='text-center'>
                <h3 className='text-xl font-bold mb-4' style={{ color: 'var(--text-primary)' }}>用户好评</h3>
                <div className='space-y-3'>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    <div className='font-medium'>"精准匹配职业方向"</div>
                    <div className='text-sm' style={{ color: 'var(--text-muted)' }}>- 张同学</div>
                  </div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    <div className='font-medium'>"AI建议很实用"</div>
                    <div className='text-sm' style={{ color: 'var(--text-muted)' }}>- 李同学</div>
                  </div>
                </div>
              </Card>

              {/* 数据支撑 */}
              <Card className='text-center'>
                <h3 className='text-xl font-bold mb-4' style={{ color: 'var(--text-primary)' }}>数据支撑</h3>
                <div className='text-3xl font-bold mb-2' style={{ color: 'var(--accent)' }}>66.58%</div>
                <div style={{ color: 'var(--text-secondary)' }}>自学者选择的规划工具</div>
              </Card>
            </div>
          </Section>

          {/* 联系我们 */}
          <Section title="开始您的职业规划之旅" subtitle="立即联系我们，开启个性化职业规划">
            <Card className='text-center dark-card'>
              <h3 className='text-2xl font-bold mb-4' style={{ color: 'var(--text-primary)' }}>准备好开始了吗？</h3>
              <p style={{ color: 'var(--text-secondary)' }} className='mb-6'>我们的专业团队随时为您提供帮助</p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button as="a" href="/contact" size="lg">
                  立即联系
                </Button>
                <Button as="a" href="/agent" variant="outline" size="lg">
                  免费体验
                </Button>
              </div>
            </Card>
          </Section>
        </div>
      </PageLayout>
    </>
  )
}