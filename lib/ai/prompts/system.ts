// lib/ai/prompts/system.ts

export const SYSTEM_PROMPT = `Bạn là AI Copilot của TT13 DocGen - công cụ tạo hồ sơ chứng minh quy trình sản xuất phần mềm theo Thông tư 13/2020/TT-BTTTT.

## VAI TRÒ
- Hướng dẫn người dùng qua 4 bước: Upload → Cấu hình → Xem lại → Xuất file
- Phân tích tài liệu người dùng upload và trích xuất thông tin
- Trả lời câu hỏi về TT13/2020
- Đề xuất cải thiện nội dung hồ sơ

## NGUYÊN TẮC
1. Luôn trả lời bằng tiếng Việt
2. Thân thiện, chuyên nghiệp, ngắn gọn
3. Chủ động đề xuất, không chờ hỏi
4. Khi có lỗi, giải thích rõ và đề xuất cách sửa

## KIẾN THỨC TT13/2020
Thông tư 13/2020/TT-BTTTT quy định 7 công đoạn sản xuất phần mềm:
1. Xác định yêu cầu (Bắt buộc)
2. Phân tích và thiết kế (Bắt buộc)
3. Lập trình
4. Kiểm thử
5. Đóng gói
6. Cài đặt, bàn giao
7. Phát hành

Tối thiểu phải có Công đoạn 1 HOẶC Công đoạn 2 để được công nhận là sản xuất phần mềm.

## FORMAT TRẢ LỜI
- Dùng emoji phù hợp (✓, ⚠️, 💡, 📁)
- Bullet points cho danh sách ngắn
- Không dùng markdown code blocks trừ khi cần thiết
- Giữ câu trả lời dưới 200 từ khi có thể`

export const ANALYZE_PROMPT = `Phân tích nội dung tài liệu dự án phần mềm sau và trích xuất thông tin theo format JSON.

## NỘI DUNG TÀI LIỆU:
{content}

## YÊU CẦU:
Trả về JSON với cấu trúc sau (chỉ trả về JSON, không có text khác):

{
  "projectName": "Tên dự án/phần mềm",
  "clientName": "Tên khách hàng/đơn vị sử dụng",
  "description": "Mô tả ngắn về dự án (1-2 câu)",
  "startDate": "MM/YYYY hoặc null",
  "endDate": "MM/YYYY hoặc null",
  "technologies": ["Tech 1", "Tech 2"],
  "features": [
    {"name": "Tên chức năng", "description": "Mô tả ngắn"}
  ],
  "teamSize": số người hoặc null,
  "confidence": 0.0-1.0 (độ tin cậy của việc trích xuất)
}`

export const GENERATE_STAGE_PROMPT = `Tạo nội dung chi tiết cho một công đoạn trong hồ sơ TT13/2020.

## THÔNG TIN DỰ ÁN:
{projectInfo}

## CÔNG ĐOẠN CẦN TẠO: {stageNumber} - {stageName}

## YÊU CẦU:
Trả về JSON với cấu trúc (chỉ trả về JSON):

{
  "title": "Công đoạn X: Tên công đoạn",
  "objective": "Mục tiêu của công đoạn",
  "activities": [
    {
      "name": "Tên hoạt động",
      "description": "Mô tả chi tiết",
      "duration": "X ngày/tuần",
      "responsible": "Vai trò chịu trách nhiệm"
    }
  ],
  "deliverables": [
    {
      "name": "Tên sản phẩm",
      "description": "Mô tả",
      "format": "Định dạng file"
    }
  ],
  "tools": ["Công cụ 1", "Công cụ 2"],
  "participants": [
    {
      "role": "Vai trò",
      "responsibility": "Trách nhiệm chính"
    }
  ],
  "qualityCriteria": ["Tiêu chí 1", "Tiêu chí 2"],
  "notes": "Ghi chú bổ sung nếu có"
}`

export const STAGE_NAMES: Record<number, string> = {
  1: 'Xác định yêu cầu',
  2: 'Phân tích và thiết kế',
  3: 'Lập trình',
  4: 'Kiểm thử',
  5: 'Đóng gói',
  6: 'Cài đặt, bàn giao',
  7: 'Phát hành'
}
