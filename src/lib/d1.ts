import { getCloudflareContext } from '@opennextjs/cloudflare';

export type D1Result<T = any> = {
  success: boolean;
  meta: {
    changes: number;
    last_row_id: number;
    duration: number;
  };
  results?: T[];
};

// 获取 D1 数据库实例
export function getD1Database(): D1Database {
  const context = getCloudflareContext();
  if (!context?.env?.DB) {
    throw new Error('D1 database not available. Make sure it is bound in wrangler.jsonc');
  }
  return context.env.DB as D1Database;
}

// 数据库操作示例
export class DatabaseService {
  private db: D1Database;

  constructor() {
    this.db = getD1Database();
  }

  // 执行查询
  async query<T = any>(sql: string, params: any[] = []): Promise<T[]> {
    const stmt = this.db.prepare(sql);
    const result = await stmt.bind(...params).all<T>();
    return result.results || [];
  }

  // 执行单条查询
  async queryOne<T = any>(sql: string, params: any[] = []): Promise<T | null> {
    const stmt = this.db.prepare(sql);
    return await stmt.bind(...params).first<T>();
  }

  // 执行更新/插入/删除
  async execute(sql: string, params: any[] = []): Promise<D1Result> {
    const stmt = this.db.prepare(sql);
    return await stmt.bind(...params).run();
  }

  // 批量执行
  async batch(statements: { sql: string; params: any[] }[]): Promise<D1Result[]> {
    const preparedStatements = statements.map(({ sql, params }) => 
      this.db.prepare(sql).bind(...params)
    );
    return await this.db.batch(preparedStatements);
  }
}

// 导出单例实例
export const db = new DatabaseService();
