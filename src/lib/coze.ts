// Coze API 集成服务
export interface CozeMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface CozeResponse {
  messages: Array<{
    role: 'assistant';
    type: 'answer';
    content: string;
  }>;
  conversation_id: string;
  code: number;
  msg: string;
}

export interface CozeConfig {
  botId: string;
  apiKey: string;
  userId?: string;
}

class CozeAPI {
  private config: CozeConfig;
  private baseUrl = 'https://api.coze.cn/v1';

  constructor(config: CozeConfig) {
    this.config = config;
  }

  /**
   * 发送消息到Coze Bot
   */
  async sendMessage(message: string, conversationId?: string): Promise<CozeResponse> {
    const url = `${this.baseUrl}/chat`;
    
    const payload = {
      conversation_id: conversationId,
      bot_id: this.config.botId,
      user: this.config.userId || 'default_user',
      query: message,
      stream: false
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data as CozeResponse;
    } catch (error) {
      console.error('Coze API Error:', error);
      throw new Error('Failed to send message to Coze API');
    }
  }

  /**
   * 创建新的对话会话
   */
  async createConversation(): Promise<string> {
    // Coze API 会在第一次发送消息时自动创建对话
    return '';
  }
}

// 创建默认实例（需要配置环境变量）
export const cozeAPI = new CozeAPI({
  botId: process.env.NEXT_PUBLIC_COZE_BOT_ID || '7554617652959051787',
  apiKey: process.env.NEXT_PUBLIC_COZE_API_KEY || 'pat_Y3NGndKvdri90WzopuNsCKtmJCyt0aW0DzDlwR8IgcnODFldJRuZmJaGPKlBVHZG',
  userId: 'genz-careerpath-user'
});

export default CozeAPI;
