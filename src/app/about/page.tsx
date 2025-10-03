'use client'
import Card from '../../components/ui/Card'
import Section from '../../components/ui/Section'
import Button from '../../components/ui/Button'
import PageLayout from '../../components/PageLayout'

// 团队介绍数据
const teamData = {
  ceo: {
    name: "杨婉琳",
    position: "CEO",
    description: "专注于职业规划领域数年，曾任职于知名咨询公司，深度了解GenZ群体职业发展需求",
    expertise: ["职业规划", "人才发展", "战略咨询"],
    avatar: "👩‍💼"
  },
  cto: {
    name: "袁心",
    position: "Co-founder｜IACA认证职业咨询师", 
    description: "留美8年，专注K12/高校生涯规划与志愿填报，累计服务上千名学生",
    expertise: ["生涯规划", "教育项目合作", "AI+教育"],
    avatar: "👨‍💼"
  }
}

// 品牌理念数据
const brandData = {
  mission: "找到你的激情所在，助力自我实现",
  vision: "成为GenZ群体最信赖的职业规划平台",
  values: [
    {
      title: "个性化",
      description: "千人千面的定制化服务",
      icon: "🎯"
    },
    {
      title: "专业性", 
      description: "基于数据驱动的科学规划",
      icon: "📊"
    },
    {
      title: "可及性",
      description: "让优质职业指导触手可及",
      icon: "🌟"
    }
  ],
  story: "在浩瀚的宇宙中，每一颗星星都有自己独特的轨迹。GenZcareerpath就像职业梦想的启明星，为每一位年轻人指引方向，帮助他们在职业的星空中找到属于自己的那颗星。"
}

// 融资与发展数据
const developmentData = {
  funding: {
    stage: "种子轮",
    amount: "500万RMB",
    status: "进行中"
  },
  phases: [
    {
      phase: "第一阶段",
      title: "产品研发",
      description: "完善AI测评系统，优化用户体验",
      timeline: "2024年Q1-Q2"
    },
    {
      phase: "第二阶段", 
      title: "用户社区搭建",
      description: "建立活跃的求职者社区，增强用户粘性",
      timeline: "2024年Q3-Q4"
    },
    {
      phase: "第三阶段",
      title: "行业领先",
      description: "成为GenZ职业规划领域的领导者",
      timeline: "2025年"
    }
  ]
}

// 合作案例数据
const caseStudies = [
  {
    title: "某985高校合作案例",
    description: "为该校2000+学生提供职业规划服务，学生满意度达95%",
    metrics: ["2000+学生", "95%满意度", "3个月服务期"],
    logo: "🎓"
  },
  {
    title: "知名互联网企业合作",
    description: "为企业提供人才推荐服务，成功推荐50+优秀候选人",
    metrics: ["50+候选人", "80%面试通过率", "6个月合作期"],
    logo: "🏢"
  }
]

export default function About() {
  return (
    <PageLayout>
      <div className='flex flex-col gap-16'>
      {/* 团队介绍 */}
      <Section title="团队介绍" subtitle="专业团队，助力你的职业梦想">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <Card className='text-center'>
            <div className='text-6xl mb-4'>{teamData.ceo.avatar}</div>
            <h3 className='text-2xl font-bold mb-2' style={{color: 'var(--text-primary)'}}>{teamData.ceo.name}</h3>
            <div className='text-lg font-semibold mb-4' style={{color: 'var(--accent)'}}>{teamData.ceo.position}</div>
            <p style={{color: 'var(--text-secondary)'}} className='mb-4'>{teamData.ceo.description}</p>
            <div className='flex flex-wrap justify-center gap-2'>
              {teamData.ceo.expertise.map((skill, index) => (
                <span key={index} className='px-3 py-1 rounded-full text-sm' style={{backgroundColor: 'var(--navy-light)', color: 'var(--accent)'}}>
                  {skill}
                </span>
              ))}
            </div>
          </Card>
          
          <Card className='text-center'>
            <div className='text-6xl mb-4'>{teamData.cto.avatar}</div>
            <h3 className='text-2xl font-bold mb-2' style={{color: 'var(--text-primary)'}}>{teamData.cto.name}</h3>
            <div className='text-lg font-semibold mb-4' style={{color: 'var(--accent)'}}>{teamData.cto.position}</div>
            <p style={{color: 'var(--text-secondary)'}} className='mb-4'>{teamData.cto.description}</p>
            <div className='flex flex-wrap justify-center gap-2'>
              {teamData.cto.expertise.map((skill, index) => (
                <span key={index} className='px-3 py-1 rounded-full text-sm' style={{backgroundColor: 'var(--navy-light)', color: 'var(--accent)'}}>
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* 品牌理念 */}
      <Section title="品牌理念" subtitle="我们的使命与价值观">
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <Card>
            <h3 className='text-2xl font-bold mb-4' style={{color: 'var(--text-primary)'}}>使命愿景</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='text-lg font-semibold mb-2' style={{color: 'var(--accent)'}}>使命</h4>
                <p style={{color: 'var(--text-secondary)'}}>{brandData.mission}</p>
              </div>
              <div>
                <h4 className='text-lg font-semibold mb-2' style={{color: 'var(--accent)'}}>愿景</h4>
                <p style={{color: 'var(--text-secondary)'}}>{brandData.vision}</p>
              </div>
            </div>
          </Card>
          
          <Card>
            <h3 className='text-2xl font-bold mb-4' style={{color: 'var(--text-primary)'}}>核心价值观</h3>
            <div className='space-y-4'>
              {brandData.values.map((value, index) => (
                <div key={index} className='flex items-start space-x-3'>
                  <div className='text-2xl'>{value.icon}</div>
                  <div>
                    <h4 className='font-semibold' style={{color: 'var(--text-primary)'}}>{value.title}</h4>
                    <p className='text-sm' style={{color: 'var(--text-secondary)'}}>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <Card className='dark-gradient text-white'>
            <h3 className='text-2xl font-bold mb-4' style={{color: 'var(--text-primary)'}}>品牌故事</h3>
          <p className='text-lg leading-relaxed'>{brandData.story}</p>
        </Card>
      </Section>

      {/* 融资与发展 */}
      <Section title="融资与发展" subtitle="我们的发展历程与未来规划">
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <Card className='text-center bg-gradient-to-br from-blue-50 to-indigo-50'>
            <h3 className='text-xl font-bold mb-2' style={{color: 'var(--text-primary)'}}>当前融资</h3>
            <div className='text-3xl font-bold mb-2' style={{color: 'var(--accent)'}}>{developmentData.funding.amount}</div>
            <div className='text-lg mb-2' style={{color: 'var(--text-secondary)'}}>{developmentData.funding.stage}</div>
            <div className='text-sm' style={{color: 'var(--text-muted)'}}>{developmentData.funding.status}</div>
          </Card>
          
          <div className='lg:col-span-2'>
            <h3 className='text-2xl font-bold mb-6' style={{color: 'var(--text-primary)'}}>发展阶段</h3>
            <div className='space-y-6'>
              {developmentData.phases.map((phase, index) => (
                <div key={index} className='flex items-start space-x-4'>
                  <div className='w-8 h-8 dark-gradient text-white rounded-full flex items-center justify-center font-bold flex-shrink-0'>
                    {index + 1}
                  </div>
                  <div className='flex-1'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-2'>
                      <h4 className='text-lg font-semibold' style={{color: 'var(--text-primary)'}}>{phase.title}</h4>
                      <span className='text-sm' style={{color: 'var(--text-muted)'}}>{phase.timeline}</span>
                    </div>
                    <p style={{color: 'var(--text-secondary)'}}>{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 合作案例 */}
      <Section title="合作案例" subtitle="我们的成功实践">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {caseStudies.map((case_, index) => (
            <Card key={index} hover>
              <div className='text-center mb-4'>
                <div className='text-4xl mb-2'>{case_.logo}</div>
                <h3 className='text-xl font-bold' style={{color: 'var(--text-primary)'}}>{case_.title}</h3>
              </div>
              <p style={{color: 'var(--text-secondary)'}} className='mb-4'>{case_.description}</p>
              <div className='flex flex-wrap gap-2'>
                {case_.metrics.map((metric, metricIndex) => (
                  <span key={metricIndex} className='px-3 py-1 rounded-full text-sm' style={{backgroundColor: 'var(--navy-light)', color: 'var(--accent)'}}>
                    {metric}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 联系我们 */}
      <Section title="联系我们" subtitle="期待与您合作">
        <Card className='text-center'>
          <h3 className='text-2xl font-bold mb-4' style={{color: 'var(--text-primary)'}}>加入我们</h3>
          <p style={{color: 'var(--text-secondary)'}} className='mb-6'>如果您对我们的项目感兴趣，欢迎联系我们</p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button as="a" href="/contact" size="lg">
              立即联系
            </Button>
            <Button as="a" href="/" variant="outline" size="lg">
              返回首页
            </Button>
          </div>
        </Card>
      </Section>
      </div>
    </PageLayout>
  )
}
