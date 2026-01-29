export const STAGE_NAMES: Record<number, string> = {
  1: 'Xác định yêu cầu',
  2: 'Phân tích và thiết kế',
  3: 'Lập trình',
  4: 'Kiểm thử',
  5: 'Đóng gói',
  6: 'Cài đặt, bàn giao',
  7: 'Phát hành',
}

export interface ProjectData {
  name: string
  clientName: string
  startDate?: string
  endDate?: string
  technologies?: string
  description?: string
}

export const getStagePrompt = (stageNumber: number, projectData: ProjectData) => {
  return `Tạo nội dung chi tiết cho Công đoạn ${stageNumber}: ${STAGE_NAMES[stageNumber]} của hồ sơ TT13/2020.

## THÔNG TIN DỰ ÁN
- Tên phần mềm: ${projectData.name}
- Khách hàng: ${projectData.clientName}
- Thời gian: ${projectData.startDate || 'N/A'} - ${projectData.endDate || 'N/A'}
- Công nghệ: ${projectData.technologies || 'N/A'}
- Mô tả: ${projectData.description || 'N/A'}

## YÊU CẦU OUTPUT
Trả về JSON với format sau:
{
  "title": "Công đoạn ${stageNumber}: ${STAGE_NAMES[stageNumber]}",
  "description": "Mô tả ngắn về công đoạn này",
  "objectives": ["Mục tiêu 1", "Mục tiêu 2"],
  "activities": [
    {
      "name": "Tên hoạt động",
      "description": "Mô tả chi tiết hoạt động",
      "duration": "X ngày công"
    }
  ],
  "deliverables": ["Sản phẩm đầu ra 1", "Sản phẩm đầu ra 2"],
  "participants": [
    {
      "role": "Vai trò",
      "name": "[Điền tên]",
      "responsibility": "Trách nhiệm cụ thể"
    }
  ],
  "timeline": {
    "start": "DD/MM/YYYY",
    "end": "DD/MM/YYYY"
  },
  "notes": "Ghi chú bổ sung nếu có"
}

## LƯU Ý
- Nội dung phải chuyên nghiệp, phù hợp với loại phần mềm và công nghệ
- Thời gian và ngày công phải hợp lý
- Các hoạt động phải cụ thể và có thể đo lường
- Sử dụng tiếng Việt chuẩn, chính xác`
}

export const getAnalyzePrompt = (fileContent: string) => {
  return `Phân tích tài liệu mô tả dự án sau và trích xuất thông tin:

---
${fileContent}
---

Trả về JSON với format:
{
  "projectName": "Tên phần mềm (trích xuất hoặc gợi ý)",
  "clientName": "Tên khách hàng",
  "description": "Mô tả ngắn gọn về dự án",
  "features": ["Tính năng 1", "Tính năng 2"],
  "technologies": ["Công nghệ 1", "Công nghệ 2"],
  "estimatedDuration": "Thời gian ước tính",
  "suggestions": ["Gợi ý 1 để hoàn thiện hồ sơ", "Gợi ý 2"]
}

Nếu không tìm thấy thông tin, để trống hoặc gợi ý giá trị phù hợp.`
}
