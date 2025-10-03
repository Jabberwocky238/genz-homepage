'use client'

import Card from '../../components/ui/Card'
import Section from '../../components/ui/Section'
import Button from '../../components/ui/Button'
import PageLayout from '../../components/PageLayout'

// 个人付费数据
const personalPricing = {
  singleServices: [
    {
      name: "AI深度咨询",
      price: "限时免费",
      description: "个性化职业规划报告",
      features: ["性格分析", "职业匹配", "发展路径", "行动计划"],
      popular: false
    },
    {
      name: "行业行家1对1咨询",
      price: "199-999元/次",
      description: "直接对接业内专家",
      features: ["专业指导", "行业洞察", "人脉资源", "实时答疑"],
      popular: true
    },
    {
      name: "模拟面试",
      price: "99元/次",
      description: "AI在线模拟面试",
      features: ["分行业题库", "实时反馈", "表达分析", "改进建议"],
      popular: false
    }
  ],
  subscriptions: [
    {
      name: "月度会员",
      price: "99元/月",
      description: "基础服务包",
      features: [
        "免费基础测评",
        "录播课折扣",
        "社区交流",
        "基础咨询"
      ],
      buttonText: "立即订阅",
      popular: false
    },
    {
      name: "年度会员",
      price: "699元/年",
      description: "全功能服务包",
      features: [
        "所有基础服务",
        "优先对接行家",
        "专属学习资源",
        "VIP客服支持",
        "免费模拟面试(3次)",
        "职业规划报告(2份)"
      ],
      buttonText: "立即订阅",
      popular: true
    }
  ]
}

// 机构合作数据
const institutionalCooperation = {
  schoolCooperation: {
    title: "高校定制订阅方案",
    description: "为高校提供批量学生职业规划服务",
    features: [
      "学生批量测评",
      "校内职业课程合作",
      "就业数据报告",
      "定制化服务"
    ],
    pricing: "面议",
    cases: [
      {
        school: "某985高校",
        students: "2000+学生",
        satisfaction: "95%满意度",
        period: "3个月服务期"
      }
    ]
  },
  enterpriseCooperation: {
    title: "企业合作服务",
    description: "为企业提供招聘和人才推荐服务",
    services: [
      {
        name: "企业招聘广告位",
        description: "在平台展示企业招聘信息",
        price: "面议"
      },
      {
        name: "人才推荐服务",
        description: "推荐优质候选人",
        price: "面议"
      }
    ],
    cases: [
      {
        company: "知名互联网企业",
        candidates: "50+候选人",
        successRate: "80%面试通过率",
        period: "6个月合作期"
      }
    ]
  }
}

// 常见问题数据
const faqData = [
  {
    question: "测评结果多久出？",
    answer: "基础测评结果即时生成，深度测评报告在24小时内完成。"
  },
  {
    question: "如何退款？",
    answer: "支持7天无理由退款，请联系客服处理。"
  },
  {
    question: "会员服务包含什么？",
    answer: "月度会员包含基础测评和录播课折扣，年度会员包含所有基础服务加优先对接行家。"
  },
  {
    question: "企业合作如何联系？",
    answer: "请通过联系我们页面或发送邮件至business@genzcareerpath.com。"
  }
]

export default function Pricing() {
  return (
    <PageLayout>
      <div className='flex flex-col gap-16'>
      {/* 个人付费 */}
      <Section title="个人付费" subtitle="选择适合您的服务方案">
        {/* 单次服务 */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold mb-6' style={{color: 'var(--text-primary)'}}>单次服务</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {personalPricing.singleServices.map((service, index) => (
              <Card key={index} className={`relative ${service.popular ? 'ring-2' : ''}`} style={service.popular ? {boxShadow: '0 0 0 2px var(--accent)'} : {}}>
                {service.popular && (
                  <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                    <span className='px-3 py-1 rounded-full text-sm font-semibold' style={{backgroundColor: 'var(--accent)', color: 'var(--text-primary)'}}>
                      推荐
                    </span>
                  </div>
                )}
                <div className='text-center mb-4'>
                  <h4 className='text-xl font-bold mb-2' style={{color: 'var(--text-primary)'}}>{service.name}</h4>
                  <div className='text-3xl font-bold mb-2' style={{color: 'var(--accent)'}}>{service.price}</div>
                  <p style={{color: 'var(--text-secondary)'}}>{service.description}</p>
                </div>
                <ul className='space-y-2 mb-6'>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className='flex items-center space-x-2'>
                      <div className='w-2 h-2 rounded-full' style={{backgroundColor: 'var(--accent)'}}></div>
                      <span style={{color: 'var(--text-secondary)'}}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className='w-full' size="lg">
                  立即购买
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* 订阅服务 */}
        <div>
          <h3 className='text-2xl font-bold mb-6' style={{color: 'var(--text-primary)'}}>订阅服务</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {personalPricing.subscriptions.map((subscription, index) => (
              <Card key={index} className={`relative ${subscription.popular ? 'ring-2' : ''}`} style={subscription.popular ? {boxShadow: '0 0 0 2px var(--accent)'} : {}}>
                {subscription.popular && (
                  <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                    <span className='px-3 py-1 rounded-full text-sm font-semibold' style={{backgroundColor: 'var(--accent)', color: 'var(--text-primary)'}}>
                      最受欢迎
                    </span>
                  </div>
                )}
                <div className='text-center mb-6'>
                  <h4 className='text-2xl font-bold mb-2' style={{color: 'var(--text-primary)'}}>{subscription.name}</h4>
                  <div className='text-4xl font-bold mb-2' style={{color: 'var(--accent)'}}>{subscription.price}</div>
                  <p style={{color: 'var(--text-secondary)'}}>{subscription.description}</p>
                </div>
                <ul className='space-y-3 mb-8'>
                  {subscription.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className='flex items-center space-x-3'>
                      <div className='w-2 h-2 rounded-full' style={{backgroundColor: 'var(--accent)'}}></div>
                      <span style={{color: 'var(--text-secondary)'}}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className='w-full' 
                  size="lg"
                  variant={subscription.popular ? 'primary' : 'outline'}
                >
                  {subscription.buttonText}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* 机构合作 */}
      <Section title="机构合作" subtitle="为学校和企业提供定制化服务">
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* 学校合作 */}
          <Card>
            <h3 className='text-2xl font-bold mb-4' style={{color: 'var(--text-primary)'}}>{institutionalCooperation.schoolCooperation.title}</h3>
            <p style={{color: 'var(--text-secondary)'}} className='mb-6'>{institutionalCooperation.schoolCooperation.description}</p>
            
            <div className='mb-6'>
              <h4 className='text-lg font-semibold mb-3' style={{color: 'var(--text-primary)'}}>服务内容</h4>
              <ul className='space-y-2'>
                {institutionalCooperation.schoolCooperation.features.map((feature, index) => (
                  <li key={index} className='flex items-center space-x-2'>
                    <div className='w-2 h-2 rounded-full' style={{backgroundColor: 'var(--accent)'}}></div>
                    <span style={{color: 'var(--text-secondary)'}}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className='mb-6'>
              <h4 className='text-lg font-semibold mb-3' style={{color: 'var(--text-primary)'}}>合作案例</h4>
              <div className='p-4 rounded-lg' style={{backgroundColor: 'var(--navy-light)'}}>
                <div className='text-sm' style={{color: 'var(--text-secondary)'}}>
                  <div className='font-semibold'>{institutionalCooperation.schoolCooperation.cases[0].school}</div>
                  <div>{institutionalCooperation.schoolCooperation.cases[0].students} · {institutionalCooperation.schoolCooperation.cases[0].satisfaction} · {institutionalCooperation.schoolCooperation.cases[0].period}</div>
                </div>
              </div>
            </div>
            
            <div className='flex justify-between items-center'>
              <span className='text-2xl font-bold' style={{color: 'var(--accent)'}}>{institutionalCooperation.schoolCooperation.pricing}</span>
              <Button>联系合作</Button>
            </div>
          </Card>

          {/* 企业合作 */}
          <Card>
            <h3 className='text-2xl font-bold mb-4' style={{color: 'var(--text-primary)'}}>{institutionalCooperation.enterpriseCooperation.title}</h3>
            <p style={{color: 'var(--text-secondary)'}} className='mb-6'>{institutionalCooperation.enterpriseCooperation.description}</p>
            
            <div className='space-y-4 mb-6'>
              {institutionalCooperation.enterpriseCooperation.services.map((service, index) => (
                <div key={index} className='border border-gray-200 rounded-lg p-4'>
                  <h4 className='font-semibold mb-1' style={{color: 'var(--text-primary)'}}>{service.name}</h4>
                  <p className='text-sm mb-2' style={{color: 'var(--text-secondary)'}}>{service.description}</p>
                  <div className='font-semibold' style={{color: 'var(--accent)'}}>{service.price}</div>
                </div>
              ))}
            </div>
            
            <div className='mb-6'>
              <h4 className='text-lg font-semibold mb-3' style={{color: 'var(--text-primary)'}}>合作案例</h4>
              <div className='p-4 rounded-lg' style={{backgroundColor: 'var(--navy-light)'}}>
                <div className='text-sm' style={{color: 'var(--text-secondary)'}}>
                  <div className='font-semibold'>{institutionalCooperation.enterpriseCooperation.cases[0].company}</div>
                  <div>{institutionalCooperation.enterpriseCooperation.cases[0].candidates} · {institutionalCooperation.enterpriseCooperation.cases[0].successRate} · {institutionalCooperation.enterpriseCooperation.cases[0].period}</div>
                </div>
              </div>
            </div>
            
            <Button className='w-full'>联系合作</Button>
          </Card>
        </div>
      </Section>

      {/* 常见问题 */}
      <Section title="常见问题" subtitle="解答您的疑问">
        <div className='space-y-6'>
          {faqData.map((faq, index) => (
            <Card key={index}>
              <h3 className='text-lg font-semibold mb-2' style={{color: 'var(--text-primary)'}}>{faq.question}</h3>
              <p style={{color: 'var(--text-secondary)'}}>{faq.answer}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 联系我们 */}
      <Section title="需要帮助？" subtitle="我们的团队随时为您服务">
        <Card className='text-center'>
          <h3 className='text-2xl font-bold mb-4' style={{color: 'var(--text-primary)'}}>联系我们</h3>
          <p style={{color: 'var(--text-secondary)'}} className='mb-6'>如果您有任何问题或需要定制服务，请随时联系我们</p>
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
