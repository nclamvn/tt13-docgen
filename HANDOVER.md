# TT13 DocGen - Handover Document

> Cập nhật lần cuối: 2026-01-29 14:25

## 1. Tổng quan dự án

**TT13 DocGen** - Ứng dụng AI tạo hồ sơ chứng minh quy trình sản xuất phần mềm theo Thông tư 13/2020/TT-BTTTT.

- **Repository:** https://github.com/nclamvn/tt13-docgen
- **Production URL:** https://tt13-docgen-web.onrender.com
- **Database:** PostgreSQL trên Render (tt13-docgen)
- **Tech Stack:** Next.js 14, Prisma, NextAuth, TailwindCSS, Zustand

---

## 2. Trạng thái hiện tại

### Deployment Status: 🔄 ĐANG DEPLOY

Render đang build lại sau khi fix lỗi database provider (SQLite → PostgreSQL).

### Checklist Environment Variables trên Render:

| Key | Status |
|-----|--------|
| `DATABASE_URL` | ✅ Đã thêm |
| `NEXTAUTH_URL` | ✅ Đã thêm (`https://tt13-docgen-web.onrender.com`) |
| `NEXTAUTH_SECRET` | ✅ Đã thêm |
| `ENCRYPTION_KEY` | ⚠️ Cần kiểm tra |
| `GOOGLE_CLIENT_ID` | ❌ Chưa cần (dùng Demo Login) |
| `GOOGLE_CLIENT_SECRET` | ❌ Chưa cần (dùng Demo Login) |

### Build Command trên Render:
```
npm install && npx prisma generate && npx prisma db push && npm run build
```

### Start Command:
```
npm start
```

---

## 3. Tính năng đã hoàn thành

### 3.1 Authentication
- [x] Google OAuth (cần credentials)
- [x] Demo Login (bypass OAuth để test)
- [x] Session management với NextAuth + JWT

### 3.2 Layout & UI
- [x] Collapsible Sidebar với Zustand store
- [x] User info ở bottom sidebar
- [x] Logout icon only (không có text)
- [x] Navigation với active state fix (không bị highlight nhiều items)
- [x] Responsive header với search

### 3.3 Landing Page
- [x] Hero section
- [x] Problem/Solution sections
- [x] Features section
- [x] Demo section
- [x] FAQ section
- [x] CTA section
- [x] Đã loại bỏ yếu tố thương mại ("miễn phí", "dùng thử", "Gói Pro")

### 3.4 Knowledge Base (Thư viện)
- [x] Preset documents (5 văn bản pháp luật VN)
- [x] User documents upload
- [x] Document viewer
- [x] API routes

### 3.5 API Keys Management
- [x] AES-256 encryption
- [x] Anthropic/OpenAI provider support
- [x] Key validation
- [x] Settings UI với Lucide icons

### 3.6 Project Management
- [x] CRUD projects
- [x] Project workspace
- [x] File upload
- [x] AI chat integration

---

## 4. Pending / Next Steps

### Ngay sau khi deploy thành công:
1. [ ] Test Demo Login tại `/login`
2. [ ] Kiểm tra database tables được tạo
3. [ ] Test tạo project mới
4. [ ] Seed preset documents (chạy `npx prisma db seed`)

### Tính năng cần phát triển thêm:
1. [ ] Document generation với AI (7 công đoạn TT13)
2. [ ] Export DOCX
3. [ ] Template customization
4. [ ] Google OAuth setup (khi cần)

---

## 5. Database Schema (Prisma)

```
Models:
- User (auth)
- Account, Session, VerificationToken (NextAuth)
- Project (dự án)
- ChatMessage (chat AI)
- PresetDocument (văn bản pháp luật preset)
- UserDocument (tài liệu user upload)
- ApiKey (API keys encrypted)
```

---

## 6. File Structure quan trọng

```
tt13-docgen/
├── app/
│   ├── (auth)/           # Protected routes
│   │   ├── dashboard/
│   │   ├── projects/
│   │   ├── knowledge/
│   │   └── settings/
│   ├── api/              # API routes
│   └── login/
├── components/
│   ├── layout/           # Sidebar, Header, MainContent
│   ├── landing/          # Landing page sections
│   ├── settings/         # API Keys section
│   └── ui/               # UI components
├── lib/
│   ├── auth.ts           # NextAuth config + Demo login
│   ├── encryption.ts     # AES-256 encryption
│   └── api-keys.ts       # API key service
├── stores/
│   └── sidebar-store.ts  # Zustand sidebar state
├── prisma/
│   └── schema.prisma     # Database schema (PostgreSQL)
└── types/
```

---

## 7. Lỗi đã gặp & cách fix

| Lỗi | Nguyên nhân | Cách fix |
|-----|-------------|----------|
| Internal Server Error (uuid) | Package uuid bị lỗi | `rm -rf .next && npm install uuid@9` |
| Cả 2 menu items active | Logic isActive sai | Cập nhật logic kiểm tra exact match trước |
| Prisma P1012 | Schema dùng SQLite, deploy dùng PostgreSQL | Đổi provider từ `sqlite` → `postgresql` |
| Auth error | Thiếu env vars | Thêm DATABASE_URL, NEXTAUTH_URL, NEXTAUTH_SECRET |

---

## 8. Commands hữu ích

```bash
# Local development
npm run dev

# Database
npx prisma generate
npx prisma db push
npx prisma studio

# Git
git add . && git commit -m "message" && git push

# Seed data
npx prisma db seed
```

---

## 9. Liên hệ & Resources

- **Render Dashboard:** https://dashboard.render.com
- **GitHub Repo:** https://github.com/nclamvn/tt13-docgen
- **PostgreSQL:** tt13-docgen (Render)

---

## 10. Ghi chú cho phiên làm việc tiếp theo

Khi quay lại, nói với Claude:

> "Đọc file HANDOVER.md để tiếp tục dự án TT13 DocGen"

Claude sẽ đọc file này và hiểu context để tiếp tục hỗ trợ.
