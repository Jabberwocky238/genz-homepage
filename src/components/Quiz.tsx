'use client'

import { useState, useMemo } from 'react'
import Button from './ui/Button'
import Card from './ui/Card'
import Section from './ui/Section'

interface Question {
  id: string
  title: string
  options: string[]
}

interface QuizProps {
  questions: Question[]
  onComplete?: (result: string) => void
}

export default function Quiz({ questions, onComplete }: QuizProps) {
  const [quizStep, setQuizStep] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: string }>({})

  const result = useMemo(() => {
    const v = answers.value
    const s = answers.scene
    const k = answers.skill
    if (!v || !s || !k) return null
    if (k === '技术/数据') return '产品技术路线：前端/全栈/数据分析/AI 应用工程师'
    if (k === '内容/设计') return '内容创作路线：新媒体/短视频/品牌设计/交互设计'
    if (k === '运营/市场') return '增长运营路线：用户增长/活动运营/内容运营/商务拓展'
    return '管理通用路线：项目管理/HRBP/培训发展/组织发展'
  }, [answers])

  const handleAnswer = (option: string) => {
    const qid = questions[quizStep].id
    const newAnswers = { ...answers, [qid]: option }
    setAnswers(newAnswers)
    
    if (quizStep < questions.length - 1) {
      setQuizStep(quizStep + 1)
    } else {
      onComplete?.(result || '')
    }
  }

  return (
    <Section title="AI性格与优势速测" subtitle="根据你的偏好，快速匹配适配赛道与岗位方向。">
      <Card>
        {/* Progress Steps */}
        <div className='flex justify-center mb-8'>
          <div className='flex items-center space-x-4'>
            {questions.map((q, idx) => (
              <div key={q.id} className='flex items-center'>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                  idx <= quizStep 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {idx + 1}
                </div>
                {idx < questions.length - 1 && (
                  <div className={`w-8 h-0.5 mx-2 ${
                    idx < quizStep ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {quizStep < questions.length ? (
          <div className='text-center'>
            <h3 className='text-2xl font-semibold text-gray-800 mb-8'>{questions[quizStep].title}</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto'>
              {questions[quizStep].options.map((opt) => (
                <Button
                  key={opt}
                  variant="outline"
                  className='px-6 py-4 text-gray-700 hover:from-blue-50 hover:to-purple-50'
                  onClick={() => handleAnswer(opt)}
                >
                  {opt}
                </Button>
              ))}
            </div>
            <div className='text-sm text-gray-500 mt-6'>第 {quizStep + 1} / {questions.length} 题</div>
          </div>
        ) : (
          <div className='text-center'>
            <div className='w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6'>
              <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>你的匹配方向</h3>
            <p className='text-xl font-semibold text-blue-600 mb-8'>{result}</p>
            <Button size="lg">
              进一步测试
            </Button>
          </div>
        )}
      </Card>
    </Section>
  )
}
