'use client'

import { useEffect, useRef, useState } from 'react'
import Section from '../../components/ui/Section'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Icon from '../../components/ui/Icon'
import PageLayout from '../../components/PageLayout'

export default function AgentTest() {
  return (
    <PageLayout>
      <div className='max-w-4xl mx-auto py-8'>
        <Section
          title="AI 职业规划助手"
          subtitle="与我们的AI助手对话，获得个性化的职业规划建议"
          className="mb-8"
          centered
        />

        <Card className="overflow-hidden">
          {/* Chat.mount 容器 */}
          <div id="chat-container" className="h-180" >
            <iframe src="https://links.betteryeah.com/chat/quickLink/5e135397877a4e8f91244a1870ed6d85" className="w-full h-full"></iframe>
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
              <h3 className='font-semibold mb-2' style={{ color: 'var(--text-primary)' }}>说明</h3>
              <p className='text-sm leading-relaxed' style={{ color: 'var(--text-secondary)' }}>
                当前使用 BetterYeah AI 服务提供真实的职业规划建议。AI助手会根据你的回答提供个性化的职业规划建议。
              </p>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  )
}