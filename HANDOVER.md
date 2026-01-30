# TC Data Platform - Handover Document

> **Cập nhật:** 2026-01-31 01:15

---

## 1. Tổng quan

**TC Data Platform** - Nền tảng công cụ AI cao cấp cho doanh nghiệp phần mềm Việt Nam.

### Hai sản phẩm chính:

| Sản phẩm | Mô tả | Tech Stack |
|----------|-------|------------|
| **TT13 DocGen** | Tạo hồ sơ TT13/2020 với AI Copilot | Next.js 14, Prisma, NextAuth |
| **Power BI Studio** | Layout designer cho Power BI Dashboard | Vite, React, Zustand |

### URLs:

| Service | Local | Production |
|---------|-------|------------|
| TT13 DocGen | http://localhost:3000 | https://tt13-docgen-web.onrender.com |
| Power BI Studio | http://localhost:5173 | https://powerbi-layout-studio.onrender.com |
| Landing Page | http://localhost:3000 | https://tt13-docgen-web.onrender.com |

---

## 2. Cấu trúc thư mục

```
TCdataBI/
├── tt13-docgen-integration/     # Main Next.js app (landing + TT13)
│   ├── app/
│   │   ├── (auth)/              # Protected routes (dashboard, projects, etc.)
│   │   ├── api/                 # API routes
│   │   ├── login/               # Login page
│   │   ├── powerbi/             # Power BI iframe wrapper
│   │   └── page.tsx             # Landing page
│   ├── components/
│   │   ├── landing/             # 9 landing page sections
│   │   ├── layout/              # Sidebar, Header, Footer
│   │   └── ui/                  # UI components
│   ├── prisma/
│   │   └── schema.prisma        # PostgreSQL schema
│   └── stores/                  # Zustand stores
│
└── powerbi-layout-studio/       # Vite React app
    ├── src/
    │   ├── components/
    │   │   ├── ai/              # AI Generator components (v3 - Panel-based)
    │   │   │   ├── AIChatPanel.tsx    # Main panel (grid bg + glass UI)
    │   │   │   ├── AIGenerator.tsx    # Legacy component
    │   │   │   ├── AIChatModal.tsx    # Legacy modal
    │   │   │   ├── AIButton.tsx       # Legacy button
    │   │   │   ├── PromptInput.tsx
    │   │   │   ├── GeneratedPreview.tsx
    │   │   │   ├── APIKeyModal.tsx
    │   │   │   └── index.ts           # Module exports
    │   │   ├── layout/          # Sidebar, Canvas, Controls
    │   │   ├── panels/          # Layers, Properties, Templates
    │   │   └── canvas/          # Grid, Visuals
    │   ├── services/
    │   │   └── aiService.ts     # Claude API integration
    │   └── stores/              # Zustand stores
    └── dist/                    # Build output
```

---

## 3. Trạng thái Deployment

### tt13-docgen: ✅ DEPLOYED

```yaml
# render.yaml
services:
  - type: web
    name: tt13-docgen
    runtime: node
    buildCommand: npm install && npx prisma generate && npm run build
    startCommand: npm start
```

**Environment Variables cần set trên Render:**

| Key | Value | Status |
|-----|-------|--------|
| `DATABASE_URL` | PostgreSQL connection string | ✅ |
| `NEXTAUTH_URL` | https://tt13-docgen-web.onrender.com | ✅ |
| `NEXTAUTH_SECRET` | Auto-generated | ✅ |
| `ENCRYPTION_KEY` | Auto-generated | ✅ |
| `NEXT_PUBLIC_POWERBI_STUDIO_URL` | https://powerbi-layout-studio.onrender.com | ⚠️ Cần thêm |
| `GOOGLE_CLIENT_ID` | (optional) | ❌ |
| `GOOGLE_CLIENT_SECRET` | (optional) | ❌ |

### powerbi-layout-studio: ✅ DEPLOYED

```yaml
# render.yaml
services:
  - type: web
    name: powerbi-layout-studio
    runtime: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./dist
```

**Environment Variables cần set trên Render:**

| Key | Value |
|-----|-------|
| `VITE_LANDING_PAGE_URL` | https://tt13-docgen-web.onrender.com |

---

## 4. Tính năng đã hoàn thành

### 4.1 Landing Page (TC Data Platform)

- [x] Hero section với gradient animation
- [x] Products section (2 sản phẩm) - minimal elegant design
- [x] Problem/Solution sections
- [x] Features section
- [x] Power BI demo section
- [x] FAQ section
- [x] CTA section
- [x] Footer với links
- [x] Branding: "TC Data Tools - Bộ công cụ AI cao cấp"
- [x] Stats với gradient numbers + dark green labels

### 4.2 TT13 DocGen

- [x] Google OAuth + Demo Login
- [x] Collapsible Sidebar với back button
- [x] Dashboard
- [x] Project management (CRUD)
- [x] Knowledge Base (văn bản pháp luật)
- [x] API Keys management (AES-256 encrypted)
- [x] Chat AI integration

### 4.3 Power BI Studio

- [x] Drag & drop canvas
- [x] 12+ industry templates
- [x] Multi-select & alignment tools
- [x] Layers panel
- [x] Properties panel
- [x] Canvas controls (pill design, centered)
- [x] Collapsible sidebar với back button
- [x] Export JSON
- [x] Screenshot/PDF export
- [x] **AI Generator v3 (Panel-based)** - Prompt-to-Dashboard với Claude API
  - **UI Design:**
    - Grid background pattern (20px cells)
    - Glassmorphism composer (pill-shaped, backdrop-blur)
    - Glass quick action pills
    - Minimal Anthropic-inspired design
  - **Features:**
    - Replaces canvas when AI tab active
    - 4 quick templates: Sales, HR, Finance, E-Commerce
    - Dashboard preview with mini canvas
    - Auto-generate sample data
    - API key management (localStorage)
  - **Components:** AIChatPanel.tsx (main), APIKeyModal.tsx

### 4.4 Integration

- [x] `/powerbi` page embed Power BI Studio via iframe
- [x] Unified navigation (back buttons về landing page)
- [x] Consistent color scheme (primary-500, amber-500)

---

## 5. Database Schema

```prisma
Models:
├── User              # Auth user
├── Account           # OAuth accounts
├── Session           # User sessions
├── VerificationToken # Email verification
├── Project           # TT13 projects
├── ChatMessage       # AI chat history
├── PresetDocument    # Built-in legal documents
├── UserDocument      # User uploaded docs
└── ApiKey            # Encrypted API keys
```

---

## 6. Commits gần đây

### powerbi-layout-studio:
```
05a6cc6 Add AI Dashboard Generator feature with grid background and glass UI
70bce65 Update build configuration
652cf6d Fix static site routing for SPA
e181711 Add Render deployment configuration
580ebb0 Remove logo icon from sidebar, add back button on desktop
```

### tt13-docgen-integration:
```
447fef5 Redesign product cards with minimal elegant style
a1c605e Style stats section: gradient numbers + dark green labels
2f5b69c Update branding to TC Data Tools
9722b35 Replace logo with back button in desktop sidebar
950eebf Add NEXT_PUBLIC_POWERBI_STUDIO_URL to deployment config
```

---

## 7. Pending Tasks

### Deployment: ✅ DONE

- [x] Deploy `powerbi-layout-studio` lên Render
- [x] Thêm env var cho `tt13-docgen`
- [x] AI Generator feature deployed

### Testing:

1. [ ] Test AI Generator tại https://powerbi-layout-studio.onrender.com
   - Click "AI Generator" tab
   - Nhập Claude API key
   - Test quick templates (Sales, HR, Finance, E-Commerce)
2. [ ] Test landing page tại production URL
3. [ ] Test `/powerbi` page - iframe load Power BI Studio
4. [ ] Test back buttons (cả 2 apps về landing page)

### Features cần phát triển:

1. [ ] TT13: Document generation (7 công đoạn)
2. [ ] TT13: Export DOCX
3. [ ] Power BI: Save/load layouts to cloud
4. [ ] Power BI: Export PBIX format
5. [ ] Power BI: AI chat history persistence
6. [ ] Power BI: More AI templates (Marketing, Operations, etc.)

---

## 8. Troubleshooting

| Vấn đề | Nguyên nhân | Giải pháp |
|--------|-------------|-----------|
| `/powerbi` màn hình đen | `NEXT_PUBLIC_POWERBI_STUDIO_URL` không set | Thêm env var trên Render |
| Power BI iframe không load | CORS / X-Frame-Options | Đã config trong render.yaml |
| Stats text không thấy | Màu text trùng background | Đã fix với gradient text |
| Product cards quá nặng | 3D effects | Đã redesign minimal style |
| Sidebar che controls | z-index conflict | Sidebar z-50, controls z-40 |

---

## 9. Local Development

### TT13 DocGen:

```bash
cd tt13-docgen-integration
cp .env.example .env.local
# Edit .env.local với database local
npm install
npx prisma generate
npx prisma db push
npx prisma db seed
npm run dev
```

### Power BI Studio:

```bash
cd powerbi-layout-studio
echo "VITE_LANDING_PAGE_URL=http://localhost:3000" > .env.local
npm install
npm run dev
```

---

## 10. Environment Files

### tt13-docgen-integration/.env.local

```env
DATABASE_URL="postgresql://mac@localhost:5432/tt13docgen"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="dev-secret"
NEXT_PUBLIC_POWERBI_STUDIO_URL="http://localhost:5173"
```

### powerbi-layout-studio/.env.local

```env
VITE_LANDING_PAGE_URL=http://localhost:3000
```

---

## 11. Ghi chú cho phiên tiếp theo

Khi quay lại, nói với Claude:

> "Đọc file HANDOVER.md để tiếp tục dự án TC Data Platform"

---

## 12. Liên hệ & Resources

- **Render Dashboard:** https://dashboard.render.com
- **GitHub:** https://github.com/nclamvn/tt13-docgen
- **Thông tư 13/2020:** https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Thong-tu-13-2020-TT-BTTTT-uu-dai-thue-doanh-nghiep-cong-nghe-thong-tin-458512.aspx
