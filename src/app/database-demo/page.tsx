'use client'

import { useState, useEffect } from 'react'
import Section from '../../components/ui/Section'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import PageLayout from '../../components/PageLayout'

interface User {
  id: number
  name: string
  email: string
  created_at: string
}

export default function DatabaseDemo() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '' })
  
  const loadUsers = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/users')
      const result = await response.json() as { success: boolean; data?: User[]; error?: string }
      
      if (!result.success) {
        throw new Error(result.error || '获取用户失败')
      }
      
      setUsers(result.data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : '加载用户数据失败')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim()) return

    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      const result = await response.json() as { success: boolean; error?: string }
      
      if (!result.success) {
        throw new Error(result.error || '创建用户失败')
      }
      
      setFormData({ name: '', email: '' })
      setShowForm(false)
      loadUsers() // 重新加载用户列表
    } catch (err) {
      setError(err instanceof Error ? err.message : '创建用户失败')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <Section title="用户管理" subtitle="D1数据库用户增删改查" className="mb-6" centered />

        {error && (
          <Card className="mb-4 p-4 bg-red-50 border-red-200">
            <p className="text-red-800">{error}</p>
          </Card>
        )}

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">用户列表 ({users.length})</h2>
          <Button onClick={() => setShowForm(true)} disabled={loading}>
            添加用户
          </Button>
        </div>

        {showForm && (
          <Card className="mb-4 p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="用户名"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <Input
                  placeholder="邮箱"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="secondary" onClick={() => setShowForm(false)}>
                  取消
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? '创建中...' : '创建'}
                </Button>
              </div>
            </form>
          </Card>
        )}

        <Card>
          {loading ? (
            <div className="p-8 text-center">加载中...</div>
          ) : users.length === 0 ? (
            <div className="p-8 text-center text-gray-500">暂无用户数据</div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">用户名</th>
                  <th className="px-4 py-2 text-left">邮箱</th>
                  <th className="px-4 py-2 text-left">创建时间</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-t">
                    <td className="px-4 py-2">{user.id}</td>
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{new Date(user.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Card>
      </div>
    </PageLayout>
  )
}
