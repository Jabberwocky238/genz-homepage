import { NextRequest, NextResponse } from 'next/server';
import { cozeAPI } from '../../../lib/coze';

// POST /api/coze - 发送消息到 Coze Bot
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { message?: string; conversationId?: string };
    const { message, conversationId } = body;
    
    if (!message) {
      return NextResponse.json(
        { success: false, error: '消息内容不能为空' },
        { status: 400 }
      );
    }
    
    const response = await cozeAPI.sendMessage(message, conversationId);
    
    return NextResponse.json({ 
      success: true, 
      data: response 
    });
  } catch (error) {
    console.error('Coze API 请求失败:', error);
    return NextResponse.json(
      { success: false, error: '发送消息失败' },
      { status: 500 }
    );
  }
}

// GET /api/coze - 创建新的对话会话
export async function GET(request: NextRequest) {
  try {
    const conversationId = await cozeAPI.createConversation();
    
    return NextResponse.json({ 
      success: true, 
      data: { conversationId } 
    });
  } catch (error) {
    console.error('创建对话失败:', error);
    return NextResponse.json(
      { success: false, error: '创建对话失败' },
      { status: 500 }
    );
  }
}
