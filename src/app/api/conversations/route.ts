'use server'

import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../lib/d1';

// GET /api/conversations?userId=xxx - 根据用户ID获取会话列表
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    if (!userId) {
      return NextResponse.json({ success: false, error: '用户ID不能为空' }, { status: 400 });
    }

    const conversations = await db.query(
      'SELECT id, conversation_id, title, created_at FROM conversations WHERE user_id = ? ORDER BY created_at DESC',
      [userId]
    );

    return NextResponse.json({
      success: true,
      data: conversations
    });
  } catch (error) {
    console.error('获取会话列表失败:', error);
    return NextResponse.json(
      { success: false, error: '获取会话列表失败' },
      { status: 500 }
    );
  }
}

// POST /api/conversations - 根据用户ID创建会话
export async function POST(request: NextRequest) {
  try {
    const { userId, conversationId, title } = await request.json() as {
      userId: number;
      conversationId: string;
      title?: string;
    };
    
    if (!userId || !conversationId) {
      return NextResponse.json({ success: false, error: '用户ID和会话ID不能为空' }, { status: 400 });
    }

    // 检查用户是否存在
    const user = await db.queryOne('SELECT id FROM users WHERE id = ?', [userId]);
    if (!user) {
      return NextResponse.json({ success: false, error: '用户不存在' }, { status: 404 });
    }

    // 创建会话
    const result = await db.execute(
      'INSERT INTO conversations (user_id, conversation_id, title) VALUES (?, ?, ?)',
      [userId, conversationId, title || '新对话']
    );

    // 获取创建的会话信息
    const newConversation = await db.queryOne(
      'SELECT id, conversation_id, title, created_at FROM conversations WHERE id = ?',
      [result.meta.last_row_id]
    );

    return NextResponse.json({
      success: true,
      data: newConversation
    });
  } catch (error) {
    console.error('创建会话失败:', error);
    return NextResponse.json(
      { success: false, error: '创建会话失败' },
      { status: 500 }
    );
  }
}
