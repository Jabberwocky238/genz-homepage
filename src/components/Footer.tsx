export default function Footer() {
  return (
    <footer className='dark-bg' style={{ color: 'var(--text-primary)', borderTop: '1px solid var(--border)' }}>
      <div className='max-w-6xl mx-auto px-4 py-8'>
        <div className='text-center'>
          <h3 className='text-xl font-bold mb-2' style={{ color: 'var(--text-primary)' }}>GenZcareerpath</h3>
          <p className='mb-4' style={{ color: 'var(--text-secondary)' }}>
            你的职业梦想启明星
          </p>
          <div className='text-sm' style={{ color: 'var(--text-muted)' }}>
            © 2024 GenZcareerpath. 保留所有权利。
          </div>
        </div>
      </div>
    </footer>
  )
}
