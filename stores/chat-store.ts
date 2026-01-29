import { create } from 'zustand'

interface Message {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
}

interface ChatStore {
  messages: Message[]
  isLoading: boolean
  error: string | null

  addMessage: (message: Omit<Message, 'id'>) => void
  updateMessage: (id: string, content: string) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  clearMessages: () => void
  initWithWelcome: () => void
}

const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  role: 'assistant',
  content: `Xin chào! Tôi là AI Copilot của TT13 DocGen. Tôi sẽ hỗ trợ bạn tạo hồ sơ TT13/2020.

Bắt đầu bằng cách upload file mô tả dự án và ảnh minh họa (nếu có). Tôi sẽ phân tích và đề xuất nội dung cho bạn.

**Mẹo:** Đặt tên ảnh theo quy tắc cd1-xxx.png, cd2-xxx.png để tôi tự động chèn vào đúng công đoạn.`,
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [WELCOME_MESSAGE],
  isLoading: false,
  error: null,

  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        { ...message, id: Date.now().toString() },
      ],
    })),

  updateMessage: (id, content) =>
    set((state) => ({
      messages: state.messages.map((m) =>
        m.id === id ? { ...m, content } : m
      ),
    })),

  setLoading: (loading) => set({ isLoading: loading }),

  setError: (error) => set({ error }),

  clearMessages: () => set({ messages: [] }),

  initWithWelcome: () => set({ messages: [WELCOME_MESSAGE] }),
}))
