'use client'

import Card from '../../components/ui/Card'
import Section from '../../components/ui/Section'
import Button from '../../components/ui/Button'
import PageLayout from '../../components/PageLayout'

// 社区数据
const communityData = {
  stats: [
    { value: '10,000+', label: '活跃用户', description: '每日在线交流' },
    { value: '500+', label: '经验分享', description: '成功案例分享' },
    { value: '50+', label: '行业专家', description: '专业指导答疑' },
    { value: '95%', label: '满意度', description: '用户好评率' }
  ],
  features: [
    {
      title: "经验分享",
      description: "与同龄人分享求职经验，获得真实的一手信息",
      icon: "💬",
      color: "blue"
    },
    {
      title: "行业交流",
      description: "加入不同行业群组，了解最新行业动态",
      icon: "🏢",
      color: "purple"
    },
    {
      title: "专家答疑",
      description: "直接向行业专家提问，获得专业指导",
      icon: "🎓",
      color: "indigo"
    },
    {
      title: "学习资源",
      description: "获取最新的学习资料和技能提升建议",
      icon: "📚",
      color: "green"
    }
  ],
  recentPosts: [
    {
      id: 1,
      title: "前端开发3年经验分享：从入门到进阶",
      author: "张同学",
      authorRole: "前端工程师",
      company: "字节跳动",
      likes: 128,
      comments: 45,
      time: "2小时前",
      tags: ["前端", "经验分享", "职业发展"]
    },
    {
      id: 2,
      title: "产品经理面试经验：如何准备PM面试",
      author: "李同学",
      authorRole: "产品经理",
      company: "腾讯",
      likes: 89,
      comments: 32,
      time: "5小时前",
      tags: ["产品经理", "面试", "求职技巧"]
    },
    {
      id: 3,
      title: "数据分析师转行经验：从会计到数据科学",
      author: "王同学",
      authorRole: "数据分析师",
      company: "阿里巴巴",
      likes: 156,
      comments: 67,
      time: "1天前",
      tags: ["数据分析", "转行", "技能学习"]
    }
  ],
  hotTopics: [
    { name: "前端开发", posts: 234, color: "blue" },
    { name: "产品设计", posts: 189, color: "purple" },
    { name: "数据分析", posts: 156, color: "indigo" },
    { name: "运营推广", posts: 142, color: "green" },
    { name: "技术管理", posts: 98, color: "orange" },
    { name: "创业经验", posts: 87, color: "pink" }
  ]
}

export default function Community() {
  return (
    <PageLayout>
      <div className='flex flex-col gap-16'>
        {/* 社区介绍 */}
        <Section title="GenZ职业社区" subtitle="与同龄人一起成长，分享经验，获得指导">
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {communityData.stats.map((stat, index) => (
              <Card key={index} className='text-center'>
                <div className='text-3xl font-bold mb-2' style={{ color: 'var(--accent)' }}>
                  {stat.value}
                </div>
                <div className='text-lg font-semibold mb-1' style={{ color: 'var(--text-primary)' }}>
                  {stat.label}
                </div>
                <div className='text-sm' style={{ color: 'var(--text-secondary)' }}>
                  {stat.description}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* 社区功能 */}
        <Section title="社区功能" subtitle="丰富的交流和学习功能">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {communityData.features.map((feature, index) => (
              <Card key={index} hover className='text-center'>
                <div className='text-4xl mb-4'>{feature.icon}</div>
                <h3 className='text-xl font-bold mb-3' style={{ color: 'var(--text-primary)' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* 最新动态 */}
          <div className='lg:col-span-2'>
            <Section title="最新动态" subtitle="社区最新分享和讨论">
              <div className='space-y-4'>
                {communityData.recentPosts.map((post) => (
                  <Card key={post.id} hover>
                    <div className='flex justify-between items-start mb-3'>
                      <h3 className='text-lg font-semibold' style={{ color: 'var(--text-primary)' }}>
                        {post.title}
                      </h3>
                      <span className='text-sm' style={{ color: 'var(--text-muted)' }}>
                        {post.time}
                      </span>
                    </div>
                    
                    <div className='flex items-center space-x-2 mb-3'>
                      <div className='w-8 h-8 dark-gradient-light rounded-full flex items-center justify-center'>
                        <span className='text-sm font-bold' style={{ color: 'var(--text-primary)' }}>
                          {post.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className='font-medium' style={{ color: 'var(--text-primary)' }}>
                          {post.author}
                        </div>
                        <div className='text-sm' style={{ color: 'var(--text-secondary)' }}>
                          {post.authorRole} · {post.company}
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-wrap gap-2 mb-3'>
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className='px-2 py-1 rounded-full text-xs'
                          style={{ backgroundColor: 'var(--navy-light)', color: 'var(--accent)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className='flex items-center space-x-4 text-sm' style={{ color: 'var(--text-muted)' }}>
                      <span className='flex items-center space-x-1'>
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                        </svg>
                        <span>{post.likes}</span>
                      </span>
                      <span className='flex items-center space-x-1'>
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
                        </svg>
                        <span>{post.comments}</span>
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </Section>
          </div>

          {/* 热门话题 */}
          <div>
            <Section title="热门话题" subtitle="大家都在讨论什么">
              <div className='space-y-3'>
                {communityData.hotTopics.map((topic, index) => (
                  <Card key={index} hover className='flex items-center justify-between'>
                    <div className='flex items-center space-x-3'>
                      <div className='w-3 h-3 rounded-full' style={{ backgroundColor: 'var(--accent)' }}></div>
                      <span className='font-medium' style={{ color: 'var(--text-primary)' }}>
                        {topic.name}
                      </span>
                    </div>
                    <span className='text-sm' style={{ color: 'var(--text-muted)' }}>
                      {topic.posts} 讨论
                    </span>
                  </Card>
                ))}
              </div>
            </Section>
          </div>
        </div>

        {/* 加入社区 */}
        <Section title="加入我们的社区" subtitle="开始你的职业成长之旅">
          <Card className='text-center dark-gradient text-white'>
            <h3 className='text-2xl font-bold mb-4' style={{ color: 'var(--text-primary)' }}>
              准备好加入了吗？
            </h3>
            <p style={{ color: 'var(--text-secondary)' }} className='mb-6'>
              与10,000+同龄人一起交流学习，获得专业指导
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button as="a" href="/agent" size="lg">
                立即加入
              </Button>
              <Button as="a" href="/contact" variant="outline" size="lg" className='border-white text-white hover:bg-white hover:text-slate-900'>
                了解更多
              </Button>
            </div>
          </Card>
        </Section>
      </div>
    </PageLayout>
  )
}
