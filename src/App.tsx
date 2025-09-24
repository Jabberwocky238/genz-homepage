import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [quizStep, setQuizStep] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: string }>({})

  const questions = [
    {
      id: 'value',
      title: '你更看重哪一项？',
      options: ['成长速度', '稳定安全', '影响力/成就感', '收入上限'],
    },
    {
      id: 'scene',
      title: '你更喜欢的工作场景？',
      options: ['远程/自由', '办公/协作', '出差/客户现场', '实操/动手'],
    },
    {
      id: 'skill',
      title: '你目前更擅长哪类技能？',
      options: ['技术/数据', '内容/设计', '运营/市场', '管理/组织'],
    },
  ]

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

  return (
    <div className='site'>
      <header className='hero'>
        <div className='hero__content'>
          <h1>GenZ职业规划</h1>
          <p>为00后/95后打造的生涯导航：用AI测评、职业地图与可落地的学习路径，帮你更快找到热爱与收入的平衡点。</p>
          <div className='hero__cta'>
            <a href='#quiz' className='btn primary'>开始3分钟AI测评</a>
            <a href='#map' className='btn secondary'>查看职业地图</a>
          </div>
        </div>
      </header>

      <main>
        <section id='quiz' className='section quiz'>
          <h2>AI性格与优势速测</h2>
          <p>根据你的偏好，快速匹配适配赛道与岗位方向。</p>
          <div className='quiz__card'>
            {quizStep < questions.length ? (
              <div>
                <h3>{questions[quizStep].title}</h3>
                <div className='options'>
                  {questions[quizStep].options.map((opt) => (
                    <button
                      key={opt}
                      className='chip'
                      onClick={() => {
                        const qid = questions[quizStep].id
                        setAnswers({ ...answers, [qid]: opt })
                        setQuizStep(quizStep + 1)
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <div className='quiz__progress'>
                  第 {quizStep + 1} / {questions.length} 题
                </div>
              </div>
            ) : (
              <div className='quiz__result'>
                <h3>你的匹配方向</h3>
                <p className='result'>{result}</p>
                <a href='#map' className='btn primary'>去看路线与岗位</a>
              </div>
            )}
          </div>
        </section>

        <section id='map' className='section map'>
          <h2>职业地图与成长路径</h2>
          <div className='grid three'>
            <div className='card'>
              <h3>技术与产品</h3>
              <ul>
                <li>入门：前端基础 / Python 数据分析</li>
                <li>进阶：全栈与云 / 数据可视化 / AI 应用</li>
                <li>职位：前端工程师、全栈工程师、数据分析师、产品经理</li>
              </ul>
            </div>
            <div className='card'>
              <h3>内容与设计</h3>
              <ul>
                <li>入门：短视频剪辑 / 视觉与排版</li>
                <li>进阶：品牌与用户体验 / 账号增长</li>
                <li>职位：新媒体运营、品牌设计、UI/UX、内容策划</li>
              </ul>
            </div>
            <div className='card'>
              <h3>运营与市场</h3>
              <ul>
                <li>入门：社群/活动运营 / 基础数据分析</li>
                <li>进阶：AARRR 增长 / 商务拓展 / 合作营销</li>
                <li>职位：用户增长、活动运营、BD、产品运营</li>
              </ul>
            </div>
          </div>
        </section>

        <section id='skills' className='section skills'>
          <h2>核心技能与资源</h2>
          <div className='grid two'>
            <div className='card'>
              <h3>通用能力</h3>
              <ul>
                <li>结构化表达与写作</li>
                <li>高效学习与知识管理</li>
                <li>项目管理与协作工具（Notion/Jira/Git）</li>
              </ul>
            </div>
            <div className='card'>
              <h3>找工作与实习</h3>
              <ul>
                <li>简历模板与案例库</li>
                <li>面试题库与模拟</li>
                <li>实习/远程机会导航</li>
              </ul>
            </div>
          </div>
        </section>

        <section id='cases' className='section cases'>
          <h2>真实转型与成长案例</h2>
          <div className='timeline'>
            <div className='timeline__item'>
              <span className='t'>大三 · 0基础入门前端</span>
              <p>3个月上线2个小项目，获得互联网实习机会。</p>
            </div>
            <div className='timeline__item'>
              <span className='t'>毕业 · 数据分析转正</span>
              <p>通过作品集与项目复盘，拿到数据岗 Offer。</p>
            </div>
            <div className='timeline__item'>
              <span className='t'>2年 · 运营到增长</span>
              <p>从活动运营成长为增长负责人，月度指标翻倍。</p>
            </div>
          </div>
        </section>

        <section id='faq' className='section faq'>
          <h2>常见问题</h2>
          <details>
            <summary>非科班可以转技术吗？</summary>
            <p>可以。以项目为导向的学习 + 公开作品集是关键。</p>
          </details>
          <details>
            <summary>如何选择赛道？</summary>
            <p>优先基于兴趣与优势，再结合城市/行业趋势与机会密度。</p>
          </details>
          <details>
            <summary>英语与数学不好怎么办？</summary>
            <p>设定可量化目标（如阅读英文文档10分钟/天），逐步提升即可。</p>
          </details>
        </section>
      </main>

      <footer className='footer'>
        <div className='footer__inner'>
          <div>
            <strong>GenZ职业规划</strong>
            <p>让每一次选择都有数据与方法的支撑。</p>
          </div>
          <nav className='footer__nav'>
            <a href='#quiz'>AI测评</a>
            <a href='#map'>职业地图</a>
            <a href='#skills'>技能资源</a>
            <a href='#faq'>FAQ</a>
          </nav>
        </div>
        <div className='footer__copy'>© {new Date().getFullYear()} GenZ Career Path</div>
      </footer>
    </div>
  )
}

export default App
