# TT13 DocGen

Biến tài liệu thô thành hồ sơ chứng minh quy trình sản xuất phần mềm theo TT13/2020 chuyên nghiệp trong vài phút với AI Copilot.

## Features

- **AI Copilot thông minh**: Chat trực tiếp với AI để điều chỉnh nội dung, hỏi đáp về TT13/2020
- **Export DOCX chuyên nghiệp**: File output với format chuẩn, header/footer, page numbers
- **Tự động chèn ảnh minh họa**: Upload file zip, AI tự động map vào đúng công đoạn
- **Tùy chỉnh thương hiệu**: Thêm logo công ty, màu sắc brand vào hồ sơ
- **Tuân thủ TT13/2020**: Đảm bảo đủ 7 công đoạn theo quy định

## Tech Stack

- **Frontend**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + Radix UI
- **State**: Zustand + React Query
- **AI**: Anthropic Claude API
- **Doc Generation**: docx.js
- **Auth**: NextAuth.js (Google OAuth)
- **Database**: PostgreSQL + Prisma
- **Storage**: Vercel Blob

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Google OAuth credentials
- Anthropic API key

### Installation

1. Clone the repository:
```bash
git clone <repo-url>
cd tt13-docgen
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:
```
DATABASE_URL="postgresql://..."
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
ANTHROPIC_API_KEY="sk-ant-..."
```

4. Set up the database:
```bash
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
tt13-docgen/
├── app/                    # Next.js app router pages
│   ├── (auth)/            # Authenticated routes
│   ├── api/               # API routes
│   └── ...
├── components/            # React components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   ├── landing/          # Landing page sections
│   ├── workspace/        # Workspace components
│   └── chat/             # Chat components
├── lib/                   # Utilities and configs
│   ├── ai/               # AI prompts and client
│   └── docgen/           # Document generator
├── hooks/                 # Custom React hooks
├── stores/               # Zustand stores
├── types/                # TypeScript types
└── prisma/               # Database schema
```

## License

Copyright TC Data. All rights reserved.
