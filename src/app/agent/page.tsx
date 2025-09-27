'use client'

import { useEffect, useRef, useState } from 'react'
import Section from '../../components/ui/Section'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Icon from '../../components/ui/Icon'
import PageLayout from '../../components/PageLayout'

type Message = { role: 'user' | 'agent'; content: string }

const generateMockAdvice = (text: string): string => {
  const has = (k: string) => text.includes(k)
  if (has('前端') || has('React')) return '建议：系统复习 TS/React/路由与数据流，做 2 个作品集。'
  if (has('数据') || has('分析')) return '建议：学习 SQL/可视化与 A/B 测试方法，做 1 个分析报告。'
  if (has('运营') || has('增长')) return '建议：掌握 AARRR 与内容增长策略，设计一个增长实验。'
  return '建议：先完成通用能力打底（表达/项目管理），再选择细分赛道试跑。'
}

export default function AgentTest() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'agent', content: '你好，我是职业规划 Agent，告诉我你的兴趣与目标吧～' },
  ])
  const [input, setInput] = useState('')
  const [thinking, setThinking] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function send() {
    if (!input.trim()) return
    const userText = input.trim()
    setInput('')
    setMessages((m) => [...m, { role: 'user', content: userText }])
    setThinking(true)
    // Demo: 本地生成一个简单回复（可替换为实际后端/Worker 调用）
    await new Promise((r) => setTimeout(r, 500))
    const reply = generateMockAdvice(userText)
    setMessages((m) => [...m, { role: 'agent', content: reply }])
    setThinking(false)
  }

  return (
    <PageLayout>
      <div className='max-w-4xl mx-auto'>
      <Section
        title="AI 职业规划助手"
        subtitle="与我们的AI助手对话，获得个性化的职业规划建议"
        className="mb-8"
        centered
      />

      <Card className="overflow-hidden">
        {/* Chat Header */}
        <div className='px-6 py-4' style={{background: 'var(--dark-gradient)'}}>
          <div className='flex items-center space-x-3'>
            <div className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center'>
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
              </svg>
            </div>
            <div>
              <h3 className='font-semibold text-lg' style={{color: 'var(--text-primary)'}}>职业规划助手</h3>
              <p className='text-sm' style={{color: 'var(--text-secondary)'}}>在线 · 随时为您服务</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div ref={listRef} className='h-96 overflow-y-auto p-6 space-y-4' style={{backgroundColor: 'var(--card-bg)'}}>
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex space-x-3 max-w-xs lg:max-w-md ${m.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  m.role === 'user' 
                    ? 'dark-gradient-light' 
                    : 'dark-gradient-light'
                }`}>
                  {m.role === 'user' ? (
                    <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                    </svg>
                  ) : (
                    <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                    </svg>
                  )}
                </div>
                
                {/* Message Bubble */}
                <div className={`px-4 py-3 rounded-2xl ${
                  m.role === 'user' 
                    ? 'dark-gradient text-white' 
                    : 'dark-card shadow-md'
                }`}>
                  <p className='text-sm leading-relaxed'>{m.content}</p>
                </div>
              </div>
            </div>
          ))}
          
          {thinking && (
            <div className='flex justify-start'>
              <div className='flex space-x-3 max-w-xs lg:max-w-md'>
                <div className='w-8 h-8 rounded-full dark-gradient-light flex items-center justify-center flex-shrink-0'>
                  <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                  </svg>
                </div>
                <div className='dark-card shadow-md px-4 py-3 rounded-2xl' style={{color: 'var(--text-primary)'}}>
                  <div className='flex items-center space-x-1'>
                    <div className='w-2 h-2 rounded-full animate-bounce' style={{backgroundColor: 'var(--text-muted)'}}></div>
                    <div className='w-2 h-2 rounded-full animate-bounce' style={{ animationDelay: '0.1s', backgroundColor: 'var(--text-muted)' }}></div>
                    <div className='w-2 h-2 rounded-full animate-bounce' style={{ animationDelay: '0.2s', backgroundColor: 'var(--text-muted)' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className='p-4' style={{backgroundColor: 'var(--card-bg)', borderTop: '1px solid var(--border)'}}>
          <div className='flex space-x-3'>
            <input
              className='flex-1 px-4 py-3 rounded-xl transition-all duration-200'
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)'
              }}
              placeholder='说说你的目标、擅长与偏好…'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
            />
            <Button 
              onClick={send}
              disabled={!input.trim() || thinking}
              loading={thinking}
            >
              {thinking ? '思考中…' : '发送'}
            </Button>
          </div>
        </div>
      </Card>

      {/* Info Card */}
      <Card className="mt-8 dark-card">
        <div className='flex items-start space-x-3'>
          <Icon variant="blue" size="sm" className="flex-shrink-0 mt-0.5">
            <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
          </Icon>
          <div>
            <h3 className='font-semibold mb-2' style={{color: 'var(--text-primary)'}}>说明</h3>
            <p className='text-sm leading-relaxed' style={{color: 'var(--text-secondary)'}}>
              当前为本地演示逻辑。可接入 Cloudflare Worker API 返回真实建议。AI助手会根据你的回答提供个性化的职业规划建议。
            </p>
          </div>
        </div>
      </Card>
      </div>
    </PageLayout>
  )
}