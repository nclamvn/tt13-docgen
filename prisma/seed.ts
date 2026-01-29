// prisma/seed.ts

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const PRESET_DOCUMENTS = [
  {
    code: 'TT13_2020',
    name: 'Thông tư 13/2020/TT-BTTTT',
    shortName: 'TT13/2020',
    category: 'SOFTWARE',
    description: 'Quy định về quy trình sản xuất, kiểm thử và phát hành sản phẩm phần mềm',
    effectiveDate: new Date('2020-07-01'),
    content: `
THÔNG TƯ 13/2020/TT-BTTTT
QUY ĐỊNH QUY TRÌNH SẢN XUẤT PHẦN MỀM

Điều 1. Phạm vi điều chỉnh
Thông tư này quy định về quy trình sản xuất sản phẩm phần mềm, bao gồm các công đoạn và yêu cầu kỹ thuật.

Điều 2. Đối tượng áp dụng
- Doanh nghiệp sản xuất phần mềm
- Tổ chức, cá nhân tham gia hoạt động sản xuất phần mềm

Điều 3. Các công đoạn sản xuất phần mềm
1. CÔNG ĐOẠN 1: XÁC ĐỊNH YÊU CẦU
   - Thu thập và phân tích yêu cầu của khách hàng
   - Xác định phạm vi dự án
   - Lập tài liệu đặc tả yêu cầu (SRS)
   - Sản phẩm: Tài liệu đặc tả yêu cầu phần mềm

2. CÔNG ĐOẠN 2: PHÂN TÍCH VÀ THIẾT KẾ
   - Phân tích yêu cầu chi tiết
   - Thiết kế kiến trúc hệ thống
   - Thiết kế giao diện người dùng
   - Thiết kế cơ sở dữ liệu
   - Sản phẩm: Tài liệu thiết kế hệ thống (SDD)

3. CÔNG ĐOẠN 3: LẬP TRÌNH
   - Lập trình theo thiết kế
   - Code review
   - Unit testing
   - Sản phẩm: Mã nguồn, tài liệu kỹ thuật

4. CÔNG ĐOẠN 4: KIỂM THỬ
   - Kiểm thử tích hợp
   - Kiểm thử hệ thống
   - Kiểm thử chấp nhận
   - Sản phẩm: Báo cáo kiểm thử, danh sách lỗi

5. CÔNG ĐOẠN 5: ĐÓNG GÓI
   - Đóng gói sản phẩm
   - Tạo bộ cài đặt
   - Tài liệu hướng dẫn sử dụng
   - Sản phẩm: Bộ cài đặt, tài liệu

6. CÔNG ĐOẠN 6: CÀI ĐẶT, BÀN GIAO
   - Cài đặt tại môi trường khách hàng
   - Đào tạo người dùng
   - Nghiệm thu
   - Sản phẩm: Biên bản bàn giao, nghiệm thu

7. CÔNG ĐOẠN 7: PHÁT HÀNH
   - Phát hành chính thức
   - Hỗ trợ sau bán hàng
   - Bảo trì, nâng cấp
   - Sản phẩm: Sản phẩm phát hành, kế hoạch bảo trì

Điều 4. Yêu cầu tối thiểu
Để được công nhận là sản xuất phần mềm, doanh nghiệp phải thực hiện tối thiểu:
- Công đoạn 1 (Xác định yêu cầu) HOẶC
- Công đoạn 2 (Phân tích và thiết kế)

Điều 5. Hồ sơ lưu trữ
- Hồ sơ phải được lưu trữ tối thiểu 10 năm
- Định dạng: Bản cứng hoặc bản điện tử có giá trị pháp lý

Điều 6. Hiệu lực thi hành
Thông tư này có hiệu lực từ ngày 01 tháng 07 năm 2020.
    `.trim(),
    summary: 'Quy định 7 công đoạn sản xuất phần mềm: Xác định yêu cầu, Phân tích thiết kế, Lập trình, Kiểm thử, Đóng gói, Cài đặt bàn giao, Phát hành. Tối thiểu phải có CD1 hoặc CD2.'
  },
  {
    code: 'TT78_2021',
    name: 'Thông tư 78/2021/TT-BTC',
    shortName: 'TT78/2021',
    category: 'TAX',
    description: 'Hướng dẫn về thuế thu nhập doanh nghiệp đối với hoạt động sản xuất phần mềm',
    effectiveDate: new Date('2021-10-01'),
    content: `
THÔNG TƯ 78/2021/TT-BTC
HƯỚNG DẪN THUẾ THU NHẬP DOANH NGHIỆP ĐỐI VỚI HOẠT ĐỘNG PHẦN MỀM

Điều 1. Đối tượng được ưu đãi
1. Doanh nghiệp sản xuất phần mềm theo quy định tại TT13/2020
2. Doanh nghiệp cung cấp dịch vụ phần mềm

Điều 2. Điều kiện hưởng ưu đãi
1. Có Giấy chứng nhận đăng ký hoạt động sản xuất phần mềm
2. Doanh thu từ hoạt động phần mềm chiếm trên 50% tổng doanh thu
3. Có hồ sơ chứng minh quy trình sản xuất theo TT13/2020

Điều 3. Mức ưu đãi thuế TNDN
1. Thuế suất ưu đãi: 10% trong 15 năm
2. Miễn thuế: 4 năm đầu kể từ khi có thu nhập chịu thuế
3. Giảm 50%: 9 năm tiếp theo

Điều 4. Hồ sơ xin ưu đãi
1. Đơn đề nghị hưởng ưu đãi thuế
2. Giấy chứng nhận đăng ký kinh doanh
3. Hồ sơ chứng minh quy trình sản xuất phần mềm
4. Báo cáo tài chính năm gần nhất

Điều 5. Hiệu lực
Thông tư có hiệu lực từ 01/10/2021.
    `.trim(),
    summary: 'Ưu đãi thuế TNDN cho DN phần mềm: thuế suất 10%/15 năm, miễn 4 năm đầu, giảm 50% cho 9 năm tiếp. Cần hồ sơ TT13/2020.'
  },
  {
    code: 'ND13_2023',
    name: 'Nghị định 13/2023/NĐ-CP',
    shortName: 'NĐ13/2023',
    category: 'DATA',
    description: 'Bảo vệ dữ liệu cá nhân trong hoạt động kinh doanh',
    effectiveDate: new Date('2023-07-01'),
    content: `
NGHỊ ĐỊNH 13/2023/NĐ-CP
BẢO VỆ DỮ LIỆU CÁ NHÂN

Chương I: QUY ĐỊNH CHUNG

Điều 1. Phạm vi điều chỉnh
Nghị định này quy định về bảo vệ dữ liệu cá nhân trong môi trường số.

Điều 2. Giải thích từ ngữ
1. Dữ liệu cá nhân: Thông tin dưới dạng ký hiệu, chữ viết, chữ số gắn liền với một con người cụ thể
2. Dữ liệu cá nhân nhạy cảm: Quan điểm chính trị, tôn giáo, sức khỏe, tài chính, vị trí địa lý

Chương II: QUYỀN VÀ NGHĨA VỤ

Điều 9. Quyền của chủ thể dữ liệu
1. Được biết về việc xử lý dữ liệu
2. Đồng ý hoặc không đồng ý
3. Truy cập, chỉnh sửa, xóa dữ liệu
4. Rút lại sự đồng ý
5. Khiếu nại, khởi kiện

Điều 10. Nghĩa vụ của bên xử lý dữ liệu
1. Thông báo mục đích xử lý
2. Chỉ xử lý khi có sự đồng ý
3. Bảo mật dữ liệu
4. Xóa khi không còn cần thiết

Chương III: XỬ LÝ DỮ LIỆU CÁ NHÂN

Điều 11. Nguyên tắc xử lý
1. Hợp pháp, minh bạch
2. Giới hạn mục đích
3. Thu thập tối thiểu
4. Chính xác, cập nhật
5. Lưu trữ có thời hạn
6. Toàn vẹn, bảo mật

Điều 15. Đồng ý xử lý dữ liệu
1. Phải có văn bản hoặc hình thức tương đương
2. Được thể hiện rõ ràng, cụ thể
3. Có thể rút lại bất cứ lúc nào

Chương IV: TRÁCH NHIỆM VÀ XỬ PHẠT

Điều 20. Mức phạt vi phạm
1. Phạt tiền từ 10 - 100 triệu VND
2. Đình chỉ hoạt động 1-3 tháng
3. Thu hồi giấy phép

Điều 21. Hiệu lực
Nghị định có hiệu lực từ 01/07/2023.
    `.trim(),
    summary: 'Quy định về bảo vệ dữ liệu cá nhân: quyền chủ thể, nghĩa vụ bên xử lý, nguyên tắc đồng ý, mức phạt 10-100 triệu VND.'
  },
  {
    code: 'ND218_2013',
    name: 'Nghị định 218/2013/NĐ-CP',
    shortName: 'NĐ218/2013',
    category: 'TAX',
    description: 'Quy định chi tiết về ưu đãi thuế đối với doanh nghiệp công nghệ thông tin',
    effectiveDate: new Date('2013-12-26'),
    content: `
NGHỊ ĐỊNH 218/2013/NĐ-CP
ƯU ĐÃI THUẾ ĐỐI VỚI DOANH NGHIỆP CÔNG NGHỆ THÔNG TIN

Điều 1. Đối tượng áp dụng
1. Doanh nghiệp sản xuất phần mềm
2. Doanh nghiệp cung cấp dịch vụ phần mềm
3. Doanh nghiệp sản xuất phần cứng, điện tử

Điều 2. Điều kiện hưởng ưu đãi
1. Đăng ký hoạt động đúng ngành nghề
2. Có ít nhất 50% doanh thu từ hoạt động CNTT
3. Đáp ứng tiêu chí về nhân sự kỹ thuật

Điều 3. Ưu đãi thuế thu nhập doanh nghiệp
1. Thuế suất 10% áp dụng 15 năm
2. Miễn thuế 4 năm, giảm 50% trong 9 năm tiếp theo
3. Được chuyển lỗ tối đa 5 năm

Điều 4. Ưu đãi thuế nhập khẩu
1. Miễn thuế nhập khẩu máy móc, thiết bị
2. Miễn thuế nguyên liệu sản xuất

Điều 5. Ưu đãi khác
1. Ưu tiên thuê đất với giá ưu đãi
2. Hỗ trợ đào tạo nhân lực
3. Tiếp cận nguồn vốn ưu đãi

Điều 6. Thủ tục đăng ký
1. Nộp hồ sơ tại Sở TTTT
2. Thời gian xử lý: 15 ngày làm việc
3. Giấy chứng nhận có hiệu lực 5 năm

Điều 7. Hiệu lực
Nghị định có hiệu lực từ 26/12/2013.
    `.trim(),
    summary: 'Ưu đãi thuế CNTT: TNDN 10%/15 năm, miễn 4 năm + giảm 50% 9 năm, miễn thuế NK máy móc, ưu đãi đất đai.'
  },
  {
    code: 'TT16_2014',
    name: 'Thông tư 16/2014/TT-BTTTT',
    shortName: 'TT16/2014',
    category: 'CONTRACT',
    description: 'Quy định về hợp đồng điện tử trong lĩnh vực công nghệ thông tin',
    effectiveDate: new Date('2014-12-01'),
    content: `
THÔNG TƯ 16/2014/TT-BTTTT
HỢP ĐỒNG ĐIỆN TỬ TRONG LĨNH VỰC CNTT

Chương I: QUY ĐỊNH CHUNG

Điều 1. Phạm vi
Quy định về giao kết, thực hiện hợp đồng điện tử trong lĩnh vực CNTT.

Điều 2. Giá trị pháp lý
Hợp đồng điện tử có giá trị pháp lý như hợp đồng giấy khi:
1. Có chữ ký số hợp lệ
2. Thông tin không bị thay đổi từ khi ký
3. Có tem thời gian điện tử

Chương II: GIAO KẾT HỢP ĐỒNG ĐIỆN TỬ

Điều 3. Nội dung bắt buộc
1. Thông tin các bên
2. Đối tượng hợp đồng
3. Giá trị hợp đồng
4. Thời hạn thực hiện
5. Điều khoản thanh toán
6. Quyền và nghĩa vụ các bên

Điều 4. Hợp đồng phần mềm
1. Mô tả chi tiết sản phẩm/dịch vụ
2. Yêu cầu kỹ thuật
3. Điều kiện nghiệm thu
4. Chế độ bảo hành, bảo trì
5. Quyền sở hữu trí tuệ

Điều 5. Chữ ký điện tử
1. Phải sử dụng chứng thư số do CA cấp
2. Chữ ký phải gắn liền với văn bản
3. Có thể xác minh danh tính người ký

Chương III: LƯU TRỮ VÀ BẢO MẬT

Điều 6. Lưu trữ hợp đồng
1. Thời gian lưu trữ tối thiểu 10 năm
2. Định dạng: PDF/A hoặc tương đương
3. Phải có bản sao dự phòng

Điều 7. Hiệu lực
Thông tư có hiệu lực từ 01/12/2014.
    `.trim(),
    summary: 'Quy định hợp đồng điện tử CNTT: giá trị pháp lý, nội dung bắt buộc, chữ ký số, lưu trữ 10 năm.'
  }
]

async function main() {
  console.log('Seeding preset documents...')

  for (const doc of PRESET_DOCUMENTS) {
    await prisma.presetDocument.upsert({
      where: { code: doc.code },
      update: doc,
      create: doc
    })
    console.log(`  ${doc.shortName}`)
  }

  console.log('Seed completed!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
