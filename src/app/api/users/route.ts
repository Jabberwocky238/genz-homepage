'use server'

import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/d1';

// GET /api/users - 获取所有用户
export async function GET() {
  try {
    const users = await db.query('SELECT * FROM users ORDER BY created_at DESC');
    return NextResponse.json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

// POST /api/users - 创建新用户
export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json() as { name: string, email: string };
    
    const result = await db.execute(
      'INSERT INTO users (name, email, created_at) VALUES (?, ?, ?)',
      [name, email, new Date().toISOString()]
    );
    
    return NextResponse.json({ 
      success: true, 
      id: result.meta.last_row_id 
    });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}
