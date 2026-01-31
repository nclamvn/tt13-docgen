// app/api/admin/seed-docs/route.ts
// API endpoint to seed preset documents (for production use)

import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

const PRESET_DOCUMENTS = [
  {
    code: 'TT13_2020',
    name: 'Thông tư 13/2020/TT-BTTTT',
    shortName: 'TT13/2020',
    category: 'SOFTWARE',
    description: 'Quy định việc xác định hoạt động sản xuất sản phẩm phần mềm đáp ứng quy trình',
    effectiveDate: new Date('2020-08-15'),
    content: `THÔNG TƯ 13/2020/TT-BTTTT
QUY ĐỊNH VIỆC XÁC ĐỊNH HOẠT ĐỘNG SẢN XUẤT SẢN PHẨM PHẦN MỀM

Điều 4. Công đoạn sản xuất sản phẩm phần mềm
Quy trình sản xuất sản phẩm phần mềm gồm 07 công đoạn:

1. XÁC ĐỊNH YÊU CẦU (Bắt buộc*)
   - Thu thập, phân tích yêu cầu khách hàng
   - Sản phẩm: Tài liệu đặc tả yêu cầu (SRS)

2. PHÂN TÍCH VÀ THIẾT KẾ (Bắt buộc*)
   - Thiết kế kiến trúc, database, UI
   - Sản phẩm: Tài liệu thiết kế (SDD)

3. LẬP TRÌNH
   - Viết mã nguồn, unit test
   - Sản phẩm: Source code, tài liệu kỹ thuật

4. KIỂM THỬ
   - Test tích hợp, UAT
   - Sản phẩm: Test cases, báo cáo kiểm thử

5. ĐÓNG GÓI
   - Build, đóng gói sản phẩm
   - Sản phẩm: Gói phần mềm, hướng dẫn cài đặt

6. CÀI ĐẶT, BÀN GIAO
   - Deploy, đào tạo, bàn giao
   - Sản phẩm: Biên bản bàn giao, nghiệm thu

7. PHÁT HÀNH
   - Release, bảo trì
   - Sản phẩm: Sản phẩm phát hành, SLA

*Tối thiểu phải có Công đoạn 1 HOẶC Công đoạn 2

Điều 5. Hồ sơ chứng minh
- Tài liệu đặc tả yêu cầu hoặc thiết kế
- Sản phẩm đầu ra của từng công đoạn
- Biên bản nghiệm thu (nếu có)
- Lưu trữ tối thiểu 10 năm`,
    summary: 'Quy định 7 công đoạn sản xuất phần mềm. Tối thiểu phải có CD1 hoặc CD2. Hồ sơ lưu trữ 10 năm.'
  },
  {
    code: 'ND13_2023',
    name: 'Nghị định 13/2023/NĐ-CP',
    shortName: 'NĐ13/2023',
    category: 'DATA',
    description: 'Bảo vệ dữ liệu cá nhân',
    effectiveDate: new Date('2023-07-01'),
    content: `NGHỊ ĐỊNH 13/2023/NĐ-CP
BẢO VỆ DỮ LIỆU CÁ NHÂN

Điều 3. Giải thích từ ngữ
- Dữ liệu cá nhân cơ bản: Họ tên, ngày sinh, giới tính, CCCD, SĐT...
- Dữ liệu cá nhân nhạy cảm: Sức khỏe, tôn giáo, sinh trắc học, vị trí...

Điều 9. Quyền của chủ thể dữ liệu
1. Quyền được biết
2. Quyền đồng ý
3. Quyền truy cập, chỉnh sửa
4. Quyền rút lại đồng ý
5. Quyền xóa dữ liệu
6. Quyền hạn chế xử lý
7. Quyền cung cấp dữ liệu
8. Quyền phản đối
9. Quyền khiếu nại, khởi kiện

Điều 13. Nguyên tắc xử lý
1. Hợp pháp, minh bạch
2. Giới hạn mục đích
3. Thu thập tối thiểu
4. Chính xác, cập nhật
5. Giới hạn lưu trữ
6. Toàn vẹn, bảo mật

Điều 20. Mức phạt
- 10-20 triệu: Không thông báo, xử lý sai mục đích
- 20-50 triệu: Xử lý không đồng ý, không bảo vệ
- 50-100 triệu: Chuyển dữ liệu trái phép, làm lộ dữ liệu`,
    summary: '9 quyền chủ thể dữ liệu, 6 nguyên tắc xử lý, mức phạt 10-100 triệu VND.'
  },
  {
    code: 'TT78_2021',
    name: 'Thông tư 78/2021/TT-BTC',
    shortName: 'TT78/2021',
    category: 'TAX',
    description: 'Ưu đãi thuế TNDN cho doanh nghiệp phần mềm',
    effectiveDate: new Date('2021-10-01'),
    content: `THÔNG TƯ 78/2021/TT-BTC
ƯU ĐÃI THUẾ TNDN CHO DOANH NGHIỆP PHẦN MỀM

Điều 2. Điều kiện hưởng ưu đãi
1. Có ĐKKD ngành nghề phù hợp
2. Doanh thu phần mềm > 50% tổng doanh thu
3. Có hồ sơ TT13/2020
4. Không vi phạm thuế 3 năm gần nhất

Điều 3. Mức ưu đãi
┌─────────────────────┬─────────────────────────┐
│ Thuế suất ưu đãi    │ 10% (thay vì 20%)       │
│ Thời gian           │ 15 năm                  │
├─────────────────────┼─────────────────────────┤
│ Miễn thuế           │ 4 năm đầu               │
│ Giảm 50%            │ 9 năm tiếp theo         │
└─────────────────────┴─────────────────────────┘

Điều 5. Hồ sơ đăng ký
1. Đơn đề nghị (Mẫu 01/ƯĐPM)
2. ĐKKD
3. Hồ sơ TT13/2020 (SRS/SDD, sản phẩm đầu ra, biên bản nghiệm thu)
4. Báo cáo tài chính kiểm toán
5. Danh mục sản phẩm phần mềm`,
    summary: 'Thuế suất 10%/15 năm, miễn 4 năm, giảm 50% 9 năm. Cần hồ sơ TT13/2020.'
  },
  {
    code: 'ND218_2013',
    name: 'Nghị định 218/2013/NĐ-CP',
    shortName: 'NĐ218/2013',
    category: 'TAX',
    description: 'Ưu đãi thuế đối với doanh nghiệp CNTT',
    effectiveDate: new Date('2013-12-26'),
    content: `NGHỊ ĐỊNH 218/2013/NĐ-CP
ƯU ĐÃI THUẾ DOANH NGHIỆP CNTT

Điều 2. Điều kiện
1. ĐKKD ngành CNTT
2. Doanh thu CNTT > 50%
3. Nhân sự kỹ thuật ≥ 60% có trình độ CĐ+ về CNTT

Điều 3. Ưu đãi thuế TNDN
- Thuế suất 10% trong 15 năm
- Miễn 4 năm, giảm 50% trong 9 năm

Điều 6. Miễn thuế nhập khẩu
- Máy móc, thiết bị
- Nguyên liệu sản xuất
- Phương tiện chuyên dùng

Điều 7-9. Ưu đãi khác
- Ưu tiên thuê đất (50 năm)
- Hỗ trợ đào tạo nhân lực
- Tiếp cận vốn ưu đãi`,
    summary: 'TNDN 10%/15 năm, miễn NK máy móc, ưu đãi thuê đất, hỗ trợ đào tạo.'
  },
  {
    code: 'LUAT_CNTT_2006',
    name: 'Luật Công nghệ thông tin 2006',
    shortName: 'Luật CNTT',
    category: 'SOFTWARE',
    description: 'Luật nền tảng về hoạt động CNTT tại Việt Nam',
    effectiveDate: new Date('2007-01-01'),
    content: `LUẬT CÔNG NGHỆ THÔNG TIN 2006

Điều 4. Giải thích từ ngữ
- Công nghệ thông tin: Các phương pháp, công cụ sản xuất, xử lý, lưu trữ thông tin số
- Phần mềm: Chương trình điều khiển thiết bị số
- Sản phẩm phần mềm: Phần mềm + tài liệu kèm theo
- Dịch vụ phần mềm: Giải pháp, hỗ trợ, tư vấn về phần mềm
- Sản xuất phần mềm: Quá trình tạo sản phẩm phần mềm theo quy trình

Điều 46. Sản xuất phần mềm
1. Tổ chức, cá nhân có quyền sản xuất phần mềm
2. Hoạt động sản xuất phải đáp ứng quy trình theo quy định
3. Sản phẩm phải đảm bảo chất lượng theo tiêu chuẩn

Điều 47. Quyền đối với phần mềm
1. Quyền tác giả được bảo hộ theo Luật SHTT
2. Có quyền đăng ký bảo hộ sáng chế

Điều 65-66. An toàn thông tin
- Bảo vệ thông tin là yêu cầu bắt buộc
- Không được thu thập, sử dụng thông tin cá nhân trái phép`,
    summary: 'Định nghĩa phần mềm, quy định sản xuất theo quy trình, bảo hộ quyền tác giả.'
  },
  {
    code: 'TT16_2014',
    name: 'Thông tư 16/2014/TT-BTTTT',
    shortName: 'TT16/2014',
    category: 'CONTRACT',
    description: 'Quy định về hợp đồng CNTT',
    effectiveDate: new Date('2014-12-01'),
    content: `THÔNG TƯ 16/2014/TT-BTTTT
HỢP ĐỒNG TRONG LĨNH VỰC CNTT

Điều 5. Nội dung hợp đồng phần mềm
1. Thông tin các bên (tên, địa chỉ, MST, đại diện)
2. Đối tượng (mô tả sản phẩm, yêu cầu kỹ thuật)
3. Giá trị hợp đồng (giá, phương thức thanh toán)
4. Thời hạn thực hiện (bắt đầu, kết thúc, milestones)
5. Điều kiện nghiệm thu (tiêu chí, quy trình)
6. Bảo hành, bảo trì
7. Quyền sở hữu trí tuệ (mã nguồn, license)
8. Bảo mật thông tin
9. Phạt vi phạm
10. Giải quyết tranh chấp

Điều 8. Quy trình nghiệm thu
1. Nghiệm thu từng công đoạn
2. Nghiệm thu tổng thể (chức năng, hiệu năng, bảo mật)
3. Hồ sơ: Biên bản, báo cáo test, danh sách lỗi

Điều 9. Tiêu chí nghiệm thu
- Đáp ứng 100% yêu cầu chức năng
- Không có lỗi Critical/Blocker
- Tài liệu đầy đủ

Điều 12. Lưu trữ hồ sơ
- Thời gian: tối thiểu 10 năm
- Định dạng: bản cứng hoặc điện tử`,
    summary: '10 nội dung bắt buộc trong hợp đồng, quy trình nghiệm thu, lưu trữ 10 năm.'
  },
  {
    code: 'TEMPLATE_SRS',
    name: 'Mẫu tài liệu SRS',
    shortName: 'Mẫu SRS',
    category: 'SOFTWARE',
    description: 'Mẫu tài liệu đặc tả yêu cầu theo IEEE 830',
    effectiveDate: null,
    content: `MẪU TÀI LIỆU ĐẶC TẢ YÊU CẦU (SRS)
Theo chuẩn IEEE 830

1. GIỚI THIỆU
   1.1. Mục đích tài liệu
   1.2. Phạm vi sản phẩm
   1.3. Định nghĩa, từ viết tắt
   1.4. Tài liệu tham khảo

2. MÔ TẢ TỔNG QUAN
   2.1. Góc nhìn sản phẩm
   2.2. Chức năng sản phẩm
   2.3. Đặc điểm người dùng
   2.4. Ràng buộc
   2.5. Giả định và phụ thuộc

3. YÊU CẦU CỤ THỂ
   3.1. Yêu cầu chức năng
        [REQ-XXX] Tên yêu cầu
        - Mô tả: Chi tiết yêu cầu
        - Độ ưu tiên: Cao/TB/Thấp
        - Đầu vào: ...
        - Xử lý: ...
        - Đầu ra: ...
        - Tiêu chí chấp nhận: ...

   3.2. Yêu cầu phi chức năng
        - Hiệu năng
        - Bảo mật
        - Khả năng sử dụng
        - Độ tin cậy
        - Khả năng mở rộng

4. YÊU CẦU GIAO DIỆN
   4.1. Giao diện người dùng
   4.2. Giao diện phần cứng
   4.3. Giao diện phần mềm
   4.4. Giao diện truyền thông

5. PHỤ LỤC
   - Use Case Diagrams
   - Wireframes
   - Data Dictionary`,
    summary: 'Cấu trúc tài liệu SRS: Giới thiệu, Mô tả, Yêu cầu chức năng/phi chức năng, Giao diện.'
  },
  {
    code: 'TEMPLATE_ACCEPTANCE',
    name: 'Mẫu biên bản nghiệm thu',
    shortName: 'Mẫu BB Nghiệm thu',
    category: 'CONTRACT',
    description: 'Mẫu biên bản nghiệm thu phần mềm',
    effectiveDate: null,
    content: `BIÊN BẢN NGHIỆM THU SẢN PHẨM PHẦN MỀM

I. CĂN CỨ NGHIỆM THU
- Hợp đồng số: ...
- Thông tư 13/2020/TT-BTTTT

II. THÔNG TIN CHUNG
- Tên sản phẩm: ...
- Phiên bản: ...
- Ngày nghiệm thu: ...

III. THÀNH PHẦN THAM GIA
1. BÊN A (Khách hàng):
   - Đơn vị: ...
   - Đại diện: ...

2. BÊN B (Nhà cung cấp):
   - Đơn vị: ...
   - Đại diện: ...

IV. NỘI DUNG NGHIỆM THU

1. Khối lượng công việc:
   □ Xác định yêu cầu (CD1)
   □ Phân tích thiết kế (CD2)
   □ Lập trình (CD3)
   □ Kiểm thử (CD4)
   □ Đóng gói (CD5)
   □ Cài đặt, bàn giao (CD6)

2. Chất lượng sản phẩm:
   - Chức năng: Đạt/Không đạt
   - Lỗi Critical: 0
   - Hiệu năng: Đạt/Không đạt
   - Tài liệu: Đầy đủ/Thiếu

3. Tài liệu bàn giao:
   □ SRS
   □ SDD
   □ Source code
   □ Hướng dẫn sử dụng
   □ Hướng dẫn cài đặt
   □ Báo cáo kiểm thử

V. KẾT LUẬN
□ ĐẠT yêu cầu nghiệm thu
□ KHÔNG ĐẠT yêu cầu

VI. CHỮ KÝ
Bên A                    Bên B
(Ký, đóng dấu)          (Ký, đóng dấu)`,
    summary: 'Cấu trúc biên bản nghiệm thu: căn cứ, nội dung, chất lượng, tài liệu bàn giao.'
  }
]

export async function POST(req: Request) {
  try {
    // Simple auth check - you can add proper auth here
    const authHeader = req.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.ADMIN_SECRET || 'seed-docs-2024'}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const results = []

    for (const doc of PRESET_DOCUMENTS) {
      const result = await prisma.presetDocument.upsert({
        where: { code: doc.code },
        update: {
          name: doc.name,
          shortName: doc.shortName,
          category: doc.category,
          description: doc.description,
          content: doc.content,
          summary: doc.summary,
          effectiveDate: doc.effectiveDate,
          isActive: true
        },
        create: {
          ...doc,
          isActive: true
        }
      })
      results.push({ code: result.code, name: result.name })
    }

    return NextResponse.json({
      success: true,
      message: `Seeded ${results.length} documents`,
      documents: results
    })
  } catch (error) {
    console.error('Seed error:', error)
    return NextResponse.json(
      { error: 'Failed to seed documents', details: String(error) },
      { status: 500 }
    )
  }
}

// Also allow GET to check status
export async function GET() {
  try {
    const count = await prisma.presetDocument.count()
    const docs = await prisma.presetDocument.findMany({
      select: { code: true, shortName: true, category: true }
    })

    return NextResponse.json({
      count,
      documents: docs
    })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
