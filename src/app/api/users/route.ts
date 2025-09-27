import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../lib/d1';

export async function GET() {
  try {
    const users = await db.query('SELECT * FROM users ORDER BY created_at DESC');
    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    return NextResponse.json({ success: false, error: '获取用户失败' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json() as { name: string; email: string };
    if (!name || !email) {
      return NextResponse.json({ success: false, error: '姓名和邮箱不能为空' }, { status: 400 });
    }
    
    const result = await db.execute(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email]
    );
    
    return NextResponse.json({ success: true, data: { id: result.meta.last_row_id } });
  } catch (error) {
    return NextResponse.json({ success: false, error: '创建用户失败' }, { status: 500 });
  }
}