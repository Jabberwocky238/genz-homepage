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
export async function getD1Database(): Promise<D1Database> {
  const context = await getCloudflareContext({ async: true });
  if (!context?.env?.DB) {
    throw new Error('D1 database not available. Make sure it is bound in wrangler.jsonc');
  }
  return context.env.DB as D1Database;
}

// 数据库操作示例
export class DatabaseService {
  private db: D1Database | null = null;

  private async getDb(): Promise<D1Database> {
    if (!this.db) {
      this.db = await getD1Database();
    }
    return this.db;
  }

  // 执行查询
  async query<T = any>(sql: string, params: any[] = []): Promise<T[]> {
    const db = await this.getDb();
    const stmt = db.prepare(sql);
    const result = await stmt.bind(...params).all<T>();
    return result.results || [];
  }

  // 执行单条查询
  async queryOne<T = any>(sql: string, params: any[] = []): Promise<T | null> {
    const db = await this.getDb();
    const stmt = db.prepare(sql);
    return await stmt.bind(...params).first<T>();
  }

  // 执行更新/插入/删除
  async execute(sql: string, params: any[] = []): Promise<D1Result> {
    const db = await this.getDb();
    const stmt = db.prepare(sql);
    return await stmt.bind(...params).run();
  }

  // 批量执行
  async batch(statements: { sql: string; params: any[] }[]): Promise<D1Result[]> {
    const db = await this.getDb();
    const preparedStatements = statements.map(({ sql, params }) => 
      db.prepare(sql).bind(...params)
    );
    return await db.batch(preparedStatements);
  }
}

// 导出单例实例
export const db = new DatabaseService();
