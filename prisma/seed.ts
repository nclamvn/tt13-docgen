// prisma/seed.ts

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const PRESET_DOCUMENTS = [
  // ============================================
  // THÔNG TƯ 13/2020/TT-BTTTT - VĂN BẢN CHÍNH
  // ============================================
  {
    code: 'TT13_2020',
    name: 'Thông tư 13/2020/TT-BTTTT',
    shortName: 'TT13/2020',
    category: 'SOFTWARE',
    description: 'Quy định việc xác định hoạt động sản xuất sản phẩm phần mềm đáp ứng quy trình',
    effectiveDate: new Date('2020-08-15'),
    content: `
THÔNG TƯ 13/2020/TT-BTTTT
QUY ĐỊNH VIỆC XÁC ĐỊNH HOẠT ĐỘNG SẢN XUẤT SẢN PHẨM PHẦN MỀM ĐÁP ỨNG QUY TRÌNH

Căn cứ Luật Công nghệ thông tin ngày 29 tháng 6 năm 2006;
Căn cứ Nghị định số 71/2007/NĐ-CP ngày 03 tháng 5 năm 2007 của Chính phủ;
Căn cứ Nghị định số 17/2017/NĐ-CP ngày 17 tháng 02 năm 2017 của Chính phủ;
Bộ trưởng Bộ Thông tin và Truyền thông ban hành Thông tư quy định việc xác định hoạt động sản xuất sản phẩm phần mềm đáp ứng quy trình.

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG I: QUY ĐỊNH CHUNG
═══════════════════════════════════════════════════════════════════════════════

Điều 1. Phạm vi điều chỉnh
Thông tư này quy định việc xác định hoạt động sản xuất sản phẩm phần mềm đáp ứng quy trình để được hưởng các chính sách ưu đãi theo quy định của pháp luật.

Điều 2. Đối tượng áp dụng
1. Tổ chức, doanh nghiệp có hoạt động sản xuất sản phẩm phần mềm.
2. Cơ quan nhà nước có liên quan đến việc xác định hoạt động sản xuất sản phẩm phần mềm.

Điều 3. Nguyên tắc xác định hoạt động sản xuất phần mềm
1. Hoạt động sản xuất phần mềm phải tuân thủ quy trình sản xuất được quy định tại Thông tư này.
2. Có hồ sơ chứng minh việc thực hiện các công đoạn sản xuất.
3. Sản phẩm đầu ra phải có khả năng hoạt động độc lập hoặc tích hợp được với hệ thống khác.

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG II: CÁC CÔNG ĐOẠN SẢN XUẤT PHẦN MỀM
═══════════════════════════════════════════════════════════════════════════════

Điều 4. Công đoạn sản xuất sản phẩm phần mềm
Quy trình sản xuất sản phẩm phần mềm gồm 07 công đoạn sau:

┌─────┬──────────────────────────┬────────────┬─────────────────────────────────┐
│ STT │ TÊN CÔNG ĐOẠN            │ BẮT BUỘC   │ MÔ TẢ                           │
├─────┼──────────────────────────┼────────────┼─────────────────────────────────┤
│  1  │ Xác định yêu cầu         │ Có (*)     │ Thu thập, phân tích yêu cầu     │
│  2  │ Phân tích và thiết kế    │ Có (*)     │ Thiết kế kiến trúc, DB, UI      │
│  3  │ Lập trình                │ Không      │ Viết mã nguồn, unit test        │
│  4  │ Kiểm thử                 │ Không      │ Test tích hợp, UAT              │
│  5  │ Đóng gói                 │ Không      │ Build, đóng gói sản phẩm        │
│  6  │ Cài đặt, bàn giao        │ Không      │ Deploy, đào tạo, bàn giao       │
│  7  │ Phát hành                │ Không      │ Release, bảo trì                │
└─────┴──────────────────────────┴────────────┴─────────────────────────────────┘

(*) Tối thiểu phải có Công đoạn 1 HOẶC Công đoạn 2

1. CÔNG ĐOẠN 1: XÁC ĐỊNH YÊU CẦU
   a) Mục tiêu: Thu thập, phân tích và tài liệu hóa các yêu cầu của phần mềm.
   b) Hoạt động chính:
      - Khảo sát, phỏng vấn khách hàng và người dùng
      - Phân tích yêu cầu chức năng và phi chức năng
      - Lập tài liệu đặc tả yêu cầu phần mềm (SRS)
      - Xác nhận yêu cầu với khách hàng
   c) Sản phẩm đầu ra:
      - Tài liệu đặc tả yêu cầu phần mềm (SRS)
      - Biên bản họp khảo sát yêu cầu
      - Ma trận truy vết yêu cầu
      - Biên bản phê duyệt yêu cầu

2. CÔNG ĐOẠN 2: PHÂN TÍCH VÀ THIẾT KẾ
   a) Mục tiêu: Chuyển đổi yêu cầu thành thiết kế kỹ thuật chi tiết.
   b) Hoạt động chính:
      - Thiết kế kiến trúc hệ thống
      - Thiết kế cơ sở dữ liệu
      - Thiết kế giao diện người dùng
      - Thiết kế chi tiết các module
   c) Sản phẩm đầu ra:
      - Tài liệu thiết kế hệ thống (SDD)
      - Sơ đồ kiến trúc hệ thống
      - Thiết kế cơ sở dữ liệu (ERD)
      - Thiết kế giao diện (UI/UX mockup)

3. CÔNG ĐOẠN 3: LẬP TRÌNH
   a) Mục tiêu: Phát triển mã nguồn theo thiết kế.
   b) Hoạt động chính:
      - Lập trình các chức năng theo thiết kế
      - Viết unit test
      - Code review
      - Tích hợp module
   c) Sản phẩm đầu ra:
      - Mã nguồn chương trình
      - Tài liệu mô tả kỹ thuật
      - Báo cáo unit test

4. CÔNG ĐOẠN 4: KIỂM THỬ
   a) Mục tiêu: Đảm bảo phần mềm hoạt động đúng yêu cầu.
   b) Hoạt động chính:
      - Kiểm thử tích hợp
      - Kiểm thử hệ thống
      - Kiểm thử chấp nhận (UAT)
      - Kiểm thử hiệu năng, bảo mật
   c) Sản phẩm đầu ra:
      - Kế hoạch kiểm thử
      - Test cases
      - Báo cáo kiểm thử
      - Biên bản UAT

5. CÔNG ĐOẠN 5: ĐÓNG GÓI
   a) Mục tiêu: Đóng gói phần mềm thành sản phẩm hoàn chỉnh.
   b) Hoạt động chính:
      - Build và compile mã nguồn
      - Tạo bộ cài đặt
      - Chuẩn bị tài liệu đi kèm
      - Kiểm tra gói cài đặt
   c) Sản phẩm đầu ra:
      - Gói phần mềm hoàn chỉnh
      - Hướng dẫn cài đặt
      - Hướng dẫn sử dụng
      - Release notes

6. CÔNG ĐOẠN 6: CÀI ĐẶT, BÀN GIAO
   a) Mục tiêu: Triển khai phần mềm cho khách hàng.
   b) Hoạt động chính:
      - Cài đặt phần mềm tại môi trường khách hàng
      - Migration dữ liệu (nếu có)
      - Đào tạo người dùng
      - Nghiệm thu và bàn giao
   c) Sản phẩm đầu ra:
      - Biên bản cài đặt
      - Tài liệu đào tạo
      - Biên bản bàn giao
      - Biên bản nghiệm thu

7. CÔNG ĐOẠN 7: PHÁT HÀNH
   a) Mục tiêu: Phát hành và duy trì sản phẩm.
   b) Hoạt động chính:
      - Phát hành chính thức sản phẩm
      - Hỗ trợ kỹ thuật
      - Bảo trì, sửa lỗi
      - Nâng cấp phiên bản
   c) Sản phẩm đầu ra:
      - Sản phẩm phát hành
      - SLA/Hợp đồng bảo trì
      - Báo cáo hỗ trợ
      - Changelog/Release notes

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG III: HỒ SƠ CHỨNG MINH
═══════════════════════════════════════════════════════════════════════════════

Điều 5. Hồ sơ chứng minh hoạt động sản xuất phần mềm
1. Hồ sơ chứng minh phải bao gồm:
   a) Tài liệu đặc tả yêu cầu hoặc tài liệu thiết kế;
   b) Sản phẩm đầu ra của từng công đoạn đã thực hiện;
   c) Biên bản nghiệm thu, bàn giao (nếu có).

2. Hồ sơ phải được lưu trữ tối thiểu 10 năm.

3. Định dạng hồ sơ: bản cứng hoặc bản điện tử có giá trị pháp lý.

Điều 6. Yêu cầu đối với hồ sơ
1. Hồ sơ phải thể hiện rõ:
   - Tên dự án/sản phẩm phần mềm
   - Thời gian thực hiện
   - Các bên tham gia
   - Nội dung công việc của từng công đoạn
   - Sản phẩm đầu ra

2. Hồ sơ phải có chữ ký xác nhận của người có thẩm quyền.

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG IV: ĐIỀU KHOẢN THI HÀNH
═══════════════════════════════════════════════════════════════════════════════

Điều 7. Hiệu lực thi hành
Thông tư này có hiệu lực thi hành kể từ ngày 15 tháng 8 năm 2020.

Điều 8. Tổ chức thực hiện
1. Cục Công nghiệp CNTT và Truyền thông có trách nhiệm hướng dẫn, kiểm tra việc thực hiện Thông tư này.
2. Các tổ chức, doanh nghiệp có trách nhiệm thực hiện đúng quy định tại Thông tư này.

Nơi nhận:
- Thủ tướng, các Phó Thủ tướng Chính phủ;
- Văn phòng Quốc hội;
- Các Bộ, cơ quan ngang Bộ;
- UBND các tỉnh, thành phố trực thuộc TW;
- Cục Kiểm tra VBQPPL (Bộ Tư pháp);
- Công báo; Website Chính phủ;
- Lưu: VT, CNTT.

                                                          BỘ TRƯỞNG
                                                    Nguyễn Mạnh Hùng
    `.trim(),
    summary: 'Quy định 7 công đoạn sản xuất phần mềm: (1) Xác định yêu cầu, (2) Phân tích thiết kế, (3) Lập trình, (4) Kiểm thử, (5) Đóng gói, (6) Cài đặt bàn giao, (7) Phát hành. Tối thiểu phải có Công đoạn 1 HOẶC Công đoạn 2 để được công nhận là sản xuất phần mềm. Hồ sơ lưu trữ tối thiểu 10 năm.'
  },

  // ============================================
  // NGHỊ ĐỊNH 13/2023/NĐ-CP - BẢO VỆ DỮ LIỆU
  // ============================================
  {
    code: 'ND13_2023',
    name: 'Nghị định 13/2023/NĐ-CP',
    shortName: 'NĐ13/2023',
    category: 'DATA',
    description: 'Bảo vệ dữ liệu cá nhân',
    effectiveDate: new Date('2023-07-01'),
    content: `
NGHỊ ĐỊNH 13/2023/NĐ-CP
BẢO VỆ DỮ LIỆU CÁ NHÂN

Căn cứ Luật Tổ chức Chính phủ ngày 19 tháng 6 năm 2015;
Căn cứ Luật An ninh mạng ngày 12 tháng 6 năm 2018;
Theo đề nghị của Bộ trưởng Bộ Công an;
Chính phủ ban hành Nghị định về bảo vệ dữ liệu cá nhân.

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG I: QUY ĐỊNH CHUNG
═══════════════════════════════════════════════════════════════════════════════

Điều 1. Phạm vi điều chỉnh
Nghị định này quy định về bảo vệ dữ liệu cá nhân và trách nhiệm bảo vệ dữ liệu cá nhân của cơ quan, tổ chức, cá nhân có liên quan.

Điều 2. Đối tượng áp dụng
1. Cơ quan, tổ chức, cá nhân Việt Nam.
2. Cơ quan, tổ chức, cá nhân nước ngoài tại Việt Nam.
3. Cơ quan, tổ chức, cá nhân nước ngoài xử lý dữ liệu cá nhân của công dân Việt Nam.

Điều 3. Giải thích từ ngữ
1. "Dữ liệu cá nhân" là thông tin dưới dạng ký hiệu, chữ viết, chữ số, hình ảnh, âm thanh hoặc dạng tương tự trên môi trường điện tử gắn liền với một con người cụ thể hoặc giúp xác định một con người cụ thể.

2. "Dữ liệu cá nhân cơ bản" bao gồm:
   - Họ, chữ đệm và tên khai sinh, tên gọi khác (nếu có)
   - Ngày, tháng, năm sinh; ngày, tháng, năm chết hoặc mất tích
   - Giới tính
   - Nơi sinh, nơi đăng ký khai sinh, nơi thường trú, nơi tạm trú, nơi ở hiện tại
   - Quốc tịch
   - Hình ảnh của cá nhân
   - Số điện thoại, số chứng minh nhân dân, số căn cước công dân
   - Số hộ chiếu, số giấy phép lái xe
   - Số thuế cá nhân, số bảo hiểm xã hội, số thẻ bảo hiểm y tế
   - Tình trạng hôn nhân
   - Thông tin về mối quan hệ gia đình
   - Thông tin về tài khoản số

3. "Dữ liệu cá nhân nhạy cảm" bao gồm:
   - Quan điểm chính trị, quan điểm tôn giáo
   - Tình trạng sức khỏe và đời tư
   - Dữ liệu về nguồn gốc chủng tộc, nguồn gốc dân tộc
   - Đặc điểm di truyền
   - Đặc điểm sinh trắc học
   - Dữ liệu về đời sống tình dục, xu hướng tình dục
   - Dữ liệu về tội phạm, hành vi vi phạm pháp luật
   - Thông tin khách hàng của tổ chức tín dụng
   - Dữ liệu về vị trí của cá nhân

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG II: QUYỀN VÀ NGHĨA VỤ CỦA CHỦ THỂ DỮ LIỆU
═══════════════════════════════════════════════════════════════════════════════

Điều 9. Quyền của chủ thể dữ liệu
1. Quyền được biết:
   - Được biết về hoạt động xử lý dữ liệu cá nhân của mình
   - Được thông báo khi có vi phạm về bảo vệ dữ liệu

2. Quyền đồng ý:
   - Đồng ý hoặc không đồng ý cho phép xử lý dữ liệu cá nhân

3. Quyền truy cập:
   - Được truy cập để xem, chỉnh sửa dữ liệu cá nhân của mình

4. Quyền rút lại sự đồng ý:
   - Rút lại sự đồng ý đã cho phép xử lý dữ liệu

5. Quyền xóa dữ liệu:
   - Yêu cầu xóa dữ liệu cá nhân của mình

6. Quyền hạn chế xử lý:
   - Yêu cầu hạn chế xử lý dữ liệu cá nhân

7. Quyền cung cấp dữ liệu:
   - Được cung cấp dữ liệu cá nhân của mình

8. Quyền phản đối:
   - Phản đối việc xử lý dữ liệu cá nhân

9. Quyền khiếu nại, tố cáo, khởi kiện:
   - Khiếu nại, tố cáo hoặc khởi kiện theo quy định của pháp luật

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG III: NGHĨA VỤ CỦA BÊN XỬ LÝ DỮ LIỆU
═══════════════════════════════════════════════════════════════════════════════

Điều 11. Nghĩa vụ của Bên Kiểm soát dữ liệu cá nhân
1. Xây dựng và công khai chính sách xử lý dữ liệu cá nhân.
2. Thông báo cho chủ thể dữ liệu về mục đích xử lý.
3. Chỉ xử lý dữ liệu đúng mục đích đã thông báo.
4. Bảo vệ dữ liệu cá nhân khỏi truy cập trái phép.
5. Thông báo cho cơ quan có thẩm quyền khi xảy ra vi phạm.

Điều 12. Nghĩa vụ của Bên Xử lý dữ liệu cá nhân
1. Chỉ xử lý dữ liệu theo yêu cầu của Bên Kiểm soát.
2. Hỗ trợ Bên Kiểm soát thực hiện nghĩa vụ.
3. Xóa hoặc trả lại dữ liệu sau khi kết thúc hợp đồng.
4. Báo cáo vi phạm cho Bên Kiểm soát.

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG IV: XỬ LÝ DỮ LIỆU CÁ NHÂN
═══════════════════════════════════════════════════════════════════════════════

Điều 13. Nguyên tắc xử lý dữ liệu cá nhân
1. Hợp pháp, công bằng và minh bạch.
2. Giới hạn mục đích: Chỉ thu thập cho mục đích rõ ràng, hợp pháp.
3. Thu thập tối thiểu: Chỉ thu thập dữ liệu cần thiết.
4. Chính xác: Dữ liệu phải chính xác và được cập nhật.
5. Giới hạn lưu trữ: Không lưu trữ lâu hơn mức cần thiết.
6. Toàn vẹn và bảo mật: Bảo vệ dữ liệu khỏi truy cập trái phép.

Điều 14. Đồng ý của chủ thể dữ liệu
1. Sự đồng ý phải được thể hiện rõ ràng bằng văn bản hoặc hình thức tương đương.
2. Sự đồng ý phải dựa trên cơ sở tự nguyện.
3. Chủ thể dữ liệu có quyền rút lại sự đồng ý bất cứ lúc nào.

Điều 15. Xử lý dữ liệu không cần sự đồng ý
Được phép xử lý mà không cần sự đồng ý trong các trường hợp:
1. Bảo vệ tính mạng, sức khỏe của chủ thể dữ liệu.
2. Thực hiện hợp đồng mà chủ thể dữ liệu là một bên.
3. Thực hiện nghĩa vụ pháp lý của Bên Kiểm soát.
4. Phục vụ lợi ích công cộng, an ninh quốc gia.

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG V: XỬ PHẠT VI PHẠM
═══════════════════════════════════════════════════════════════════════════════

Điều 20. Mức phạt vi phạm hành chính
1. Phạt tiền từ 10.000.000 đến 20.000.000 đồng đối với hành vi:
   - Không thông báo cho chủ thể dữ liệu
   - Xử lý dữ liệu không đúng mục đích

2. Phạt tiền từ 20.000.000 đến 50.000.000 đồng đối với hành vi:
   - Xử lý dữ liệu mà không có sự đồng ý
   - Không có biện pháp bảo vệ dữ liệu

3. Phạt tiền từ 50.000.000 đến 100.000.000 đồng đối với hành vi:
   - Chuyển dữ liệu ra nước ngoài trái phép
   - Cố ý làm lộ dữ liệu cá nhân

Điều 21. Biện pháp khắc phục hậu quả
1. Buộc xóa dữ liệu cá nhân đã thu thập trái phép.
2. Buộc thông báo cho chủ thể dữ liệu về vi phạm.
3. Đình chỉ hoạt động xử lý dữ liệu từ 01 đến 03 tháng.

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG VI: ĐIỀU KHOẢN THI HÀNH
═══════════════════════════════════════════════════════════════════════════════

Điều 22. Hiệu lực thi hành
Nghị định này có hiệu lực thi hành kể từ ngày 01 tháng 7 năm 2023.

                                                       TM. CHÍNH PHỦ
                                                        THỦ TƯỚNG
                                                     Phạm Minh Chính
    `.trim(),
    summary: 'Quy định về bảo vệ dữ liệu cá nhân: phân loại dữ liệu cơ bản và nhạy cảm, 9 quyền của chủ thể dữ liệu (được biết, đồng ý, truy cập, rút lại, xóa, hạn chế, cung cấp, phản đối, khiếu nại), 6 nguyên tắc xử lý, mức phạt 10-100 triệu VND. Có hiệu lực từ 01/07/2023.'
  },

  // ============================================
  // THÔNG TƯ 78/2021/TT-BTC - ƯU ĐÃI THUẾ
  // ============================================
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

Căn cứ Luật Thuế thu nhập doanh nghiệp;
Căn cứ Nghị định số 218/2013/NĐ-CP ngày 26/12/2013;
Bộ trưởng Bộ Tài chính ban hành Thông tư hướng dẫn về thuế TNDN đối với hoạt động sản xuất phần mềm.

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG I: ĐỐI TƯỢNG VÀ ĐIỀU KIỆN HƯỞNG ƯU ĐÃI
═══════════════════════════════════════════════════════════════════════════════

Điều 1. Đối tượng được ưu đãi thuế
1. Doanh nghiệp sản xuất phần mềm đáp ứng quy trình theo Thông tư 13/2020/TT-BTTTT.
2. Doanh nghiệp cung cấp dịch vụ phần mềm.
3. Doanh nghiệp hoạt động trong lĩnh vực công nghệ thông tin.

Điều 2. Điều kiện hưởng ưu đãi
Để được hưởng ưu đãi thuế, doanh nghiệp phải đáp ứng các điều kiện:
1. Có Giấy chứng nhận đăng ký doanh nghiệp với ngành nghề phù hợp.
2. Doanh thu từ hoạt động phần mềm chiếm trên 50% tổng doanh thu.
3. Có hồ sơ chứng minh quy trình sản xuất theo Thông tư 13/2020/TT-BTTTT.
4. Không vi phạm pháp luật về thuế trong 3 năm gần nhất.

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG II: MỨC ƯU ĐÃI THUẾ
═══════════════════════════════════════════════════════════════════════════════

Điều 3. Thuế suất ưu đãi
┌─────────────────────────────────────────┬─────────────────────────────────────┐
│ HẠNG MỤC                                │ MỨC ƯU ĐÃI                          │
├─────────────────────────────────────────┼─────────────────────────────────────┤
│ Thuế suất ưu đãi                        │ 10% (so với 20% thông thường)       │
│ Thời gian áp dụng                       │ 15 năm kể từ năm đầu có doanh thu   │
├─────────────────────────────────────────┼─────────────────────────────────────┤
│ Miễn thuế                               │ 4 năm đầu kể từ khi có thu nhập     │
│                                         │ chịu thuế                           │
├─────────────────────────────────────────┼─────────────────────────────────────┤
│ Giảm 50% thuế                           │ 9 năm tiếp theo sau thời gian       │
│                                         │ miễn thuế                           │
└─────────────────────────────────────────┴─────────────────────────────────────┘

Điều 4. Ưu đãi khác
1. Được chuyển lỗ tối đa 5 năm liên tục.
2. Được khấu hao nhanh tài sản cố định.
3. Được trích lập quỹ phát triển khoa học công nghệ.

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG III: HỒ SƠ VÀ THỦ TỤC
═══════════════════════════════════════════════════════════════════════════════

Điều 5. Hồ sơ đăng ký hưởng ưu đãi
1. Đơn đề nghị hưởng ưu đãi thuế (Mẫu 01/ƯĐPM).
2. Bản sao Giấy chứng nhận đăng ký doanh nghiệp.
3. Hồ sơ chứng minh quy trình sản xuất phần mềm theo TT13/2020.
4. Báo cáo tài chính năm gần nhất được kiểm toán.
5. Danh mục sản phẩm phần mềm đã sản xuất.

Điều 6. Hồ sơ chứng minh quy trình sản xuất
Theo quy định tại Điều 5, Thông tư 13/2020/TT-BTTTT, bao gồm:
1. Tài liệu đặc tả yêu cầu (SRS) hoặc Tài liệu thiết kế (SDD).
2. Sản phẩm đầu ra của các công đoạn đã thực hiện.
3. Biên bản nghiệm thu, bàn giao (nếu có).

Điều 7. Thủ tục đăng ký
1. Nộp hồ sơ tại cơ quan thuế quản lý trực tiếp.
2. Thời gian xử lý: 15 ngày làm việc kể từ khi nhận đủ hồ sơ.
3. Kết quả: Thông báo chấp thuận hoặc từ chối (nếu không đủ điều kiện).

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG IV: BÁO CÁO VÀ KIỂM TRA
═══════════════════════════════════════════════════════════════════════════════

Điều 8. Báo cáo định kỳ
1. Báo cáo quyết toán thuế hàng năm.
2. Báo cáo tình hình hoạt động sản xuất phần mềm.
3. Báo cáo doanh thu từ hoạt động phần mềm.

Điều 9. Kiểm tra, thanh tra
1. Cơ quan thuế có quyền kiểm tra hồ sơ hưởng ưu đãi.
2. Doanh nghiệp có nghĩa vụ cung cấp đầy đủ hồ sơ khi được yêu cầu.
3. Trường hợp vi phạm: Truy thu thuế và xử phạt theo quy định.

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG V: ĐIỀU KHOẢN THI HÀNH
═══════════════════════════════════════════════════════════════════════════════

Điều 10. Hiệu lực thi hành
Thông tư này có hiệu lực thi hành kể từ ngày 01 tháng 10 năm 2021.

                                                         BỘ TRƯỞNG
                                                     Hồ Đức Phớc
    `.trim(),
    summary: 'Ưu đãi thuế TNDN cho doanh nghiệp phần mềm: thuế suất 10% trong 15 năm (thay vì 20%), miễn thuế 4 năm đầu, giảm 50% thuế 9 năm tiếp theo. Điều kiện: doanh thu phần mềm >50%, có hồ sơ TT13/2020. Hồ sơ gồm: SRS/SDD, sản phẩm đầu ra các công đoạn, biên bản nghiệm thu.'
  },

  // ============================================
  // NGHỊ ĐỊNH 218/2013/NĐ-CP - ƯU ĐÃI CNTT
  // ============================================
  {
    code: 'ND218_2013',
    name: 'Nghị định 218/2013/NĐ-CP',
    shortName: 'NĐ218/2013',
    category: 'TAX',
    description: 'Quy định chi tiết về ưu đãi thuế đối với doanh nghiệp công nghệ thông tin',
    effectiveDate: new Date('2013-12-26'),
    content: `
NGHỊ ĐỊNH 218/2013/NĐ-CP
QUY ĐỊNH CHI TIẾT VỀ ƯU ĐÃI THUẾ ĐỐI VỚI DOANH NGHIỆP CÔNG NGHỆ THÔNG TIN

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG I: ĐỐI TƯỢNG ÁP DỤNG
═══════════════════════════════════════════════════════════════════════════════

Điều 1. Đối tượng áp dụng
1. Doanh nghiệp sản xuất phần mềm.
2. Doanh nghiệp cung cấp dịch vụ phần mềm.
3. Doanh nghiệp sản xuất phần cứng, thiết bị điện tử.
4. Doanh nghiệp cung cấp dịch vụ công nghệ thông tin.

Điều 2. Điều kiện áp dụng
1. Đăng ký kinh doanh đúng ngành nghề CNTT.
2. Có ít nhất 50% doanh thu từ hoạt động CNTT.
3. Đáp ứng tiêu chí về nhân sự kỹ thuật (tối thiểu 60% có trình độ cao đẳng trở lên về CNTT).

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG II: ƯU ĐÃI THUẾ THU NHẬP DOANH NGHIỆP
═══════════════════════════════════════════════════════════════════════════════

Điều 3. Thuế suất ưu đãi
1. Thuế suất 10% áp dụng trong thời gian 15 năm.
2. Thời gian tính từ năm đầu tiên có doanh thu từ hoạt động CNTT.

Điều 4. Miễn, giảm thuế
1. Miễn thuế 4 năm đầu kể từ khi có thu nhập chịu thuế.
2. Giảm 50% số thuế phải nộp trong 9 năm tiếp theo.

Điều 5. Chuyển lỗ
Được chuyển lỗ sang các năm tiếp theo, tối đa không quá 5 năm.

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG III: ƯU ĐÃI THUẾ NHẬP KHẨU
═══════════════════════════════════════════════════════════════════════════════

Điều 6. Miễn thuế nhập khẩu
1. Miễn thuế nhập khẩu đối với:
   - Máy móc, thiết bị tạo tài sản cố định
   - Nguyên liệu, vật tư, linh kiện để sản xuất
   - Phương tiện vận tải chuyên dùng

2. Điều kiện miễn thuế:
   - Trong nước chưa sản xuất được
   - Sử dụng đúng mục đích

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG IV: ƯU ĐÃI KHÁC
═══════════════════════════════════════════════════════════════════════════════

Điều 7. Ưu tiên thuê đất
1. Được thuê đất với giá ưu đãi tại các khu công nghệ cao.
2. Thời hạn thuê đất lên đến 50 năm.
3. Được miễn, giảm tiền thuê đất theo quy định.

Điều 8. Hỗ trợ đào tạo
1. Được hỗ trợ kinh phí đào tạo nhân lực CNTT.
2. Được tiếp cận các chương trình đào tạo của nhà nước.

Điều 9. Tiếp cận nguồn vốn
1. Được vay vốn ưu đãi từ các quỹ hỗ trợ phát triển.
2. Được bảo lãnh tín dụng theo quy định.

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG V: THỦ TỤC ĐĂNG KÝ
═══════════════════════════════════════════════════════════════════════════════

Điều 10. Hồ sơ đăng ký
1. Đơn đề nghị hưởng ưu đãi.
2. Giấy chứng nhận đăng ký doanh nghiệp.
3. Báo cáo năng lực hoạt động.
4. Danh sách nhân sự kỹ thuật.

Điều 11. Nơi nộp hồ sơ
Nộp tại Sở Thông tin và Truyền thông địa phương.

Điều 12. Thời gian xử lý
1. Thời gian xử lý: 15 ngày làm việc.
2. Giấy chứng nhận có hiệu lực 5 năm.

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG VI: ĐIỀU KHOẢN THI HÀNH
═══════════════════════════════════════════════════════════════════════════════

Điều 13. Hiệu lực
Nghị định có hiệu lực từ ngày 26 tháng 12 năm 2013.

                                                       TM. CHÍNH PHỦ
                                                        THỦ TƯỚNG
                                                    Nguyễn Tấn Dũng
    `.trim(),
    summary: 'Ưu đãi thuế CNTT toàn diện: TNDN 10%/15 năm, miễn 4 năm + giảm 50% trong 9 năm, miễn thuế NK máy móc/nguyên liệu, ưu đãi thuê đất, hỗ trợ đào tạo, tiếp cận vốn ưu đãi. Điều kiện: 50% doanh thu CNTT, 60% nhân sự có trình độ CĐ+ về CNTT.'
  },

  // ============================================
  // LUẬT CNTT 2006
  // ============================================
  {
    code: 'LUAT_CNTT_2006',
    name: 'Luật Công nghệ thông tin 2006',
    shortName: 'Luật CNTT 2006',
    category: 'SOFTWARE',
    description: 'Luật số 67/2006/QH11 quy định về hoạt động ứng dụng và phát triển công nghệ thông tin',
    effectiveDate: new Date('2007-01-01'),
    content: `
LUẬT CÔNG NGHỆ THÔNG TIN
SỐ 67/2006/QH11

Căn cứ vào Hiến pháp nước Cộng hoà xã hội chủ nghĩa Việt Nam năm 1992 đã được sửa đổi, bổ sung theo Nghị quyết số 51/2001/QH10;
Quốc hội ban hành Luật Công nghệ thông tin.

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG I: NHỮNG QUY ĐỊNH CHUNG
═══════════════════════════════════════════════════════════════════════════════

Điều 1. Phạm vi điều chỉnh
Luật này quy định về hoạt động ứng dụng và phát triển công nghệ thông tin, các biện pháp bảo đảm ứng dụng và phát triển công nghệ thông tin, quyền và nghĩa vụ của cơ quan, tổ chức, cá nhân tham gia hoạt động ứng dụng và phát triển công nghệ thông tin.

Điều 4. Giải thích từ ngữ
1. "Công nghệ thông tin" là tập hợp các phương pháp khoa học, công nghệ và công cụ kỹ thuật hiện đại để sản xuất, truyền đưa, thu thập, xử lý, lưu trữ và trao đổi thông tin số.

2. "Phần mềm" là chương trình máy tính được mô tả bằng hệ thống ký hiệu, mã hoặc ngôn ngữ để điều khiển thiết bị số thực hiện chức năng nhất định.

3. "Sản phẩm phần mềm" là phần mềm và tài liệu kèm theo được sản xuất và cung cấp cho người sử dụng.

4. "Dịch vụ phần mềm" là hoạt động cung cấp các giải pháp, hỗ trợ, tư vấn về phần mềm.

5. "Sản xuất phần mềm" là quá trình tạo ra sản phẩm phần mềm theo quy trình sản xuất.

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG II: ỨNG DỤNG CÔNG NGHỆ THÔNG TIN
═══════════════════════════════════════════════════════════════════════════════

Điều 11. Ứng dụng công nghệ thông tin trong cơ quan nhà nước
1. Cơ quan nhà nước có trách nhiệm ứng dụng công nghệ thông tin trong hoạt động.
2. Xây dựng cơ sở dữ liệu quốc gia.
3. Cung cấp dịch vụ công trực tuyến.

Điều 12. Giao dịch điện tử
1. Giao dịch điện tử có giá trị pháp lý như giao dịch truyền thống.
2. Chữ ký điện tử có giá trị như chữ ký tay.

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG III: PHÁT TRIỂN CÔNG NGHỆ THÔNG TIN
═══════════════════════════════════════════════════════════════════════════════

Điều 45. Phát triển công nghiệp công nghệ thông tin
1. Nhà nước khuyến khích phát triển công nghiệp phần mềm.
2. Có chính sách ưu đãi đầu tư vào lĩnh vực CNTT.
3. Hỗ trợ đào tạo nguồn nhân lực CNTT.

Điều 46. Sản xuất phần mềm
1. Tổ chức, cá nhân có quyền sản xuất phần mềm theo quy định.
2. Hoạt động sản xuất phần mềm phải đáp ứng quy trình do cơ quan có thẩm quyền quy định.
3. Sản phẩm phần mềm phải đảm bảo chất lượng theo tiêu chuẩn.

Điều 47. Quyền đối với phần mềm
1. Quyền tác giả đối với phần mềm được bảo hộ theo quy định của pháp luật về sở hữu trí tuệ.
2. Tổ chức, cá nhân sản xuất phần mềm có quyền đăng ký bảo hộ sáng chế.

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG IV: AN TOÀN THÔNG TIN
═══════════════════════════════════════════════════════════════════════════════

Điều 65. Nguyên tắc bảo đảm an toàn thông tin
1. An toàn thông tin là yêu cầu bắt buộc trong mọi hoạt động CNTT.
2. Cơ quan, tổ chức có trách nhiệm bảo vệ thông tin.
3. Thông tin cá nhân được bảo vệ theo quy định.

Điều 66. Bảo vệ thông tin cá nhân
1. Không được thu thập, sử dụng thông tin cá nhân trái phép.
2. Người sở hữu thông tin có quyền yêu cầu xóa, chỉnh sửa.
3. Vi phạm bảo vệ thông tin cá nhân bị xử lý theo pháp luật.

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG V: ĐIỀU KHOẢN THI HÀNH
═══════════════════════════════════════════════════════════════════════════════

Điều 79. Hiệu lực thi hành
Luật này có hiệu lực thi hành từ ngày 01 tháng 01 năm 2007.

                                                     CHỦ TỊCH QUỐC HỘI
                                                     Nguyễn Phú Trọng
    `.trim(),
    summary: 'Luật nền tảng về CNTT: định nghĩa phần mềm, sản phẩm phần mềm, dịch vụ phần mềm, sản xuất phần mềm. Quy định về ứng dụng CNTT trong cơ quan nhà nước, giao dịch điện tử, phát triển công nghiệp CNTT, an toàn thông tin và bảo vệ thông tin cá nhân.'
  },

  // ============================================
  // THÔNG TƯ 16/2014/TT-BTTTT - HỢP ĐỒNG ĐIỆN TỬ
  // ============================================
  {
    code: 'TT16_2014',
    name: 'Thông tư 16/2014/TT-BTTTT',
    shortName: 'TT16/2014',
    category: 'CONTRACT',
    description: 'Quy định về hợp đồng trong lĩnh vực công nghệ thông tin',
    effectiveDate: new Date('2014-12-01'),
    content: `
THÔNG TƯ 16/2014/TT-BTTTT
QUY ĐỊNH VỀ HỢP ĐỒNG TRONG LĨNH VỰC CÔNG NGHỆ THÔNG TIN

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG I: QUY ĐỊNH CHUNG
═══════════════════════════════════════════════════════════════════════════════

Điều 1. Phạm vi điều chỉnh
Thông tư này quy định về giao kết, thực hiện hợp đồng cung cấp sản phẩm, dịch vụ công nghệ thông tin.

Điều 2. Đối tượng áp dụng
1. Cơ quan, tổ chức, doanh nghiệp hoạt động trong lĩnh vực CNTT.
2. Cơ quan nhà nước mua sắm sản phẩm, dịch vụ CNTT.

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG II: HỢP ĐỒNG CUNG CẤP PHẦN MỀM
═══════════════════════════════════════════════════════════════════════════════

Điều 5. Nội dung hợp đồng sản xuất phần mềm
Hợp đồng sản xuất phần mềm phải bao gồm các nội dung chính:

1. THÔNG TIN CÁC BÊN
   - Tên, địa chỉ, mã số thuế
   - Người đại diện theo pháp luật
   - Thông tin liên hệ

2. ĐỐI TƯỢNG HỢP ĐỒNG
   - Mô tả chi tiết sản phẩm/dịch vụ
   - Phạm vi công việc
   - Yêu cầu kỹ thuật cụ thể

3. GIÁ TRỊ HỢP ĐỒNG
   - Giá trị hợp đồng (trước thuế, sau thuế)
   - Phương thức thanh toán
   - Tiến độ thanh toán

4. THỜI HẠN THỰC HIỆN
   - Ngày bắt đầu, ngày kết thúc
   - Các mốc tiến độ (milestones)
   - Điều kiện gia hạn

5. ĐIỀU KIỆN NGHIỆM THU
   - Tiêu chí nghiệm thu
   - Quy trình nghiệm thu
   - Thành phần hội đồng nghiệm thu

6. BẢO HÀNH, BẢO TRÌ
   - Thời gian bảo hành
   - Phạm vi bảo hành
   - Dịch vụ bảo trì (nếu có)

7. QUYỀN SỞ HỮU TRÍ TUỆ
   - Quyền sở hữu mã nguồn
   - Quyền sử dụng phần mềm
   - License và điều khoản sử dụng

8. BẢO MẬT THÔNG TIN
   - Cam kết bảo mật
   - Thông tin được bảo mật
   - Thời hạn bảo mật

9. PHẠT VI PHẠM
   - Mức phạt chậm tiến độ
   - Mức phạt vi phạm chất lượng
   - Các trường hợp miễn trừ

10. GIẢI QUYẾT TRANH CHẤP
    - Thương lượng, hòa giải
    - Trọng tài hoặc tòa án

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG III: NGHIỆM THU SẢN PHẨM PHẦN MỀM
═══════════════════════════════════════════════════════════════════════════════

Điều 8. Quy trình nghiệm thu
1. NGHIỆM THU TỪNG CÔNG ĐOẠN
   - Nghiệm thu sản phẩm đầu ra của từng công đoạn
   - Lập biên bản nghiệm thu từng phần

2. NGHIỆM THU TỔNG THỂ
   - Kiểm tra toàn bộ chức năng
   - Kiểm tra hiệu năng
   - Kiểm tra bảo mật

3. HỒ SƠ NGHIỆM THU
   - Biên bản nghiệm thu
   - Báo cáo kiểm thử
   - Danh sách lỗi và cách xử lý
   - Tài liệu bàn giao

Điều 9. Tiêu chí nghiệm thu phần mềm
1. Đáp ứng 100% yêu cầu chức năng trong hợp đồng.
2. Không có lỗi Critical hoặc Blocker.
3. Hiệu năng đạt yêu cầu phi chức năng.
4. Tài liệu đầy đủ theo quy định.

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG IV: LƯU TRỮ HỒ SƠ
═══════════════════════════════════════════════════════════════════════════════

Điều 12. Lưu trữ hồ sơ hợp đồng
1. Thời gian lưu trữ tối thiểu: 10 năm.
2. Định dạng: Bản cứng hoặc bản điện tử có giá trị pháp lý.
3. Nội dung lưu trữ:
   - Hợp đồng và phụ lục
   - Biên bản nghiệm thu
   - Hồ sơ thanh toán
   - Tài liệu kỹ thuật

═══════════════════════════════════════════════════════════════════════════════
CHƯƠNG V: ĐIỀU KHOẢN THI HÀNH
═══════════════════════════════════════════════════════════════════════════════

Điều 15. Hiệu lực thi hành
Thông tư này có hiệu lực từ ngày 01 tháng 12 năm 2014.

                                                          BỘ TRƯỞNG
                                                    Nguyễn Bắc Son
    `.trim(),
    summary: 'Quy định nội dung hợp đồng phần mềm: 10 điều khoản bắt buộc (thông tin các bên, đối tượng, giá trị, thời hạn, nghiệm thu, bảo hành, sở hữu trí tuệ, bảo mật, phạt vi phạm, giải quyết tranh chấp). Quy trình nghiệm thu: từng công đoạn và tổng thể. Lưu trữ hồ sơ tối thiểu 10 năm.'
  },

  // ============================================
  // MẪU TÀI LIỆU ĐẶC TẢ YÊU CẦU (SRS)
  // ============================================
  {
    code: 'TEMPLATE_SRS',
    name: 'Mẫu tài liệu đặc tả yêu cầu phần mềm (SRS)',
    shortName: 'Mẫu SRS',
    category: 'SOFTWARE',
    description: 'Mẫu tài liệu đặc tả yêu cầu theo chuẩn IEEE 830',
    effectiveDate: null,
    content: `
MẪU TÀI LIỆU ĐẶC TẢ YÊU CẦU PHẦN MỀM (SRS)
THEO CHUẨN IEEE 830

═══════════════════════════════════════════════════════════════════════════════
CẤU TRÚC TÀI LIỆU
═══════════════════════════════════════════════════════════════════════════════

1. GIỚI THIỆU
   1.1. Mục đích tài liệu
        - Mô tả mục đích của tài liệu SRS
        - Đối tượng sử dụng tài liệu

   1.2. Phạm vi sản phẩm
        - Tên phần mềm
        - Mục tiêu chính
        - Lợi ích mang lại

   1.3. Định nghĩa, từ viết tắt và chữ viết tắt
        - Danh sách các thuật ngữ
        - Giải thích từ viết tắt

   1.4. Tài liệu tham khảo
        - Danh sách các tài liệu liên quan

   1.5. Tổng quan tài liệu
        - Mô tả cấu trúc các phần tiếp theo

2. MÔ TẢ TỔNG QUAN
   2.1. Góc nhìn sản phẩm
        - Vị trí trong hệ thống lớn hơn (nếu có)
        - Mối quan hệ với các hệ thống khác

   2.2. Chức năng sản phẩm
        - Tóm tắt các chức năng chính
        - Sơ đồ Use Case tổng quan

   2.3. Đặc điểm người dùng
        - Các nhóm người dùng
        - Trình độ, kinh nghiệm yêu cầu

   2.4. Ràng buộc
        - Ràng buộc về công nghệ
        - Ràng buộc về nghiệp vụ
        - Ràng buộc về pháp lý

   2.5. Giả định và phụ thuộc
        - Các giả định khi lập yêu cầu
        - Các yếu tố phụ thuộc bên ngoài

3. YÊU CẦU CỤ THỂ
   3.1. Yêu cầu chức năng
        Mỗi yêu cầu phải có:
        ┌─────────────────────────────────────────────────────────────────────┐
        │ [REQ-XXX] Tên yêu cầu                                               │
        ├─────────────────────────────────────────────────────────────────────┤
        │ Mô tả      : Chi tiết yêu cầu                                       │
        │ Độ ưu tiên : Cao/Trung bình/Thấp                                    │
        │ Đầu vào    : Dữ liệu đầu vào                                        │
        │ Xử lý      : Quy trình xử lý                                        │
        │ Đầu ra     : Kết quả mong đợi                                       │
        │ Tiêu chí   : Acceptance criteria                                    │
        │ Liên quan  : REQ-XXX, REQ-YYY                                       │
        └─────────────────────────────────────────────────────────────────────┘

   3.2. Yêu cầu phi chức năng
        3.2.1. Hiệu năng (Performance)
               - Thời gian phản hồi
               - Số lượng người dùng đồng thời
               - Throughput

        3.2.2. Bảo mật (Security)
               - Authentication
               - Authorization
               - Data encryption

        3.2.3. Khả năng sử dụng (Usability)
               - Thời gian học
               - Tỷ lệ lỗi người dùng

        3.2.4. Độ tin cậy (Reliability)
               - Uptime yêu cầu
               - MTBF, MTTR

        3.2.5. Khả năng mở rộng (Scalability)
               - Horizontal scaling
               - Vertical scaling

4. YÊU CẦU GIAO DIỆN
   4.1. Giao diện người dùng (UI)
        - Nguyên tắc thiết kế
        - Responsive design
        - Accessibility

   4.2. Giao diện phần cứng
        - Thiết bị hỗ trợ
        - Yêu cầu cấu hình

   4.3. Giao diện phần mềm
        - Hệ điều hành
        - Database
        - Third-party services

   4.4. Giao diện truyền thông
        - Protocols (HTTP, HTTPS, WebSocket)
        - Data format (JSON, XML)

5. PHỤ LỤC
   5.1. Sơ đồ Use Case
   5.2. Wireframes/Mockups
   5.3. Data Dictionary
   5.4. Glossary

═══════════════════════════════════════════════════════════════════════════════
HƯỚNG DẪN SỬ DỤNG
═══════════════════════════════════════════════════════════════════════════════

1. Đánh số yêu cầu theo format: REQ-[Module]-[Số thứ tự]
   Ví dụ: REQ-AUTH-001, REQ-REPORT-002

2. Mỗi yêu cầu phải có acceptance criteria rõ ràng để có thể kiểm thử.

3. Sử dụng ngôn ngữ rõ ràng, tránh mơ hồ như "nhanh", "dễ sử dụng".

4. Review với stakeholders trước khi baseline.

5. Cập nhật version khi có thay đổi.
    `.trim(),
    summary: 'Mẫu tài liệu SRS chuẩn IEEE 830: 5 phần chính (Giới thiệu, Mô tả tổng quan, Yêu cầu cụ thể, Yêu cầu giao diện, Phụ lục). Yêu cầu phải có ID, mô tả, độ ưu tiên, đầu vào/ra, tiêu chí chấp nhận. Áp dụng cho công đoạn 1 theo TT13/2020.'
  },

  // ============================================
  // MẪU BIÊN BẢN NGHIỆM THU
  // ============================================
  {
    code: 'TEMPLATE_ACCEPTANCE',
    name: 'Mẫu biên bản nghiệm thu phần mềm',
    shortName: 'Mẫu BB Nghiệm thu',
    category: 'CONTRACT',
    description: 'Mẫu biên bản nghiệm thu sản phẩm phần mềm theo quy định',
    effectiveDate: null,
    content: `
MẪU BIÊN BẢN NGHIỆM THU SẢN PHẨM PHẦN MỀM

═══════════════════════════════════════════════════════════════════════════════
                            CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                                Độc lập - Tự do - Hạnh phúc
                                    ─────────────────

                              BIÊN BẢN NGHIỆM THU
                            SẢN PHẨM PHẦN MỀM
                        Số: ......../BB-NT/20....

═══════════════════════════════════════════════════════════════════════════════

I. CĂN CỨ NGHIỆM THU

- Căn cứ Hợp đồng số: ............... ngày ..... tháng ..... năm .....
- Căn cứ Phụ lục hợp đồng số: ............... (nếu có)
- Căn cứ Thông tư 13/2020/TT-BTTTT về quy trình sản xuất phần mềm
- Căn cứ biên bản nghiệm thu các công đoạn trước (nếu có)

II. THÔNG TIN CHUNG

1. Tên sản phẩm phần mềm: .................................................
2. Phiên bản: .............................................................
3. Thời gian nghiệm thu: Ngày ..... tháng ..... năm .....
4. Địa điểm nghiệm thu: ...................................................

III. THÀNH PHẦN THAM GIA

1. BÊN A (Khách hàng/Chủ đầu tư):
   - Đơn vị: ..............................................................
   - Địa chỉ: .............................................................
   - Đại diện: ........................... Chức vụ: ......................
   - Thành viên:
     + ................................ Chức vụ: ..........................
     + ................................ Chức vụ: ..........................

2. BÊN B (Nhà cung cấp/Đơn vị phát triển):
   - Đơn vị: ..............................................................
   - Địa chỉ: .............................................................
   - Đại diện: ........................... Chức vụ: ......................
   - Thành viên:
     + ................................ Chức vụ: ..........................
     + ................................ Chức vụ: ..........................

IV. NỘI DUNG NGHIỆM THU

1. KHỐI LƯỢNG CÔNG VIỆC

┌─────┬──────────────────────────────────┬─────────────┬─────────────┬─────────┐
│ STT │ Hạng mục công việc               │ Theo HĐ    │ Thực hiện   │ Ghi chú │
├─────┼──────────────────────────────────┼─────────────┼─────────────┼─────────┤
│  1  │ Xác định yêu cầu (CD1)           │             │             │         │
│  2  │ Phân tích và thiết kế (CD2)      │             │             │         │
│  3  │ Lập trình (CD3)                  │             │             │         │
│  4  │ Kiểm thử (CD4)                   │             │             │         │
│  5  │ Đóng gói (CD5)                   │             │             │         │
│  6  │ Cài đặt, bàn giao (CD6)          │             │             │         │
│  7  │ Tài liệu hướng dẫn               │             │             │         │
│  8  │ Đào tạo người dùng               │             │             │         │
└─────┴──────────────────────────────────┴─────────────┴─────────────┴─────────┘

2. CHẤT LƯỢNG SẢN PHẨM

┌─────┬──────────────────────────────────┬─────────────┬─────────────┬─────────┐
│ STT │ Tiêu chí đánh giá                │ Yêu cầu    │ Kết quả     │ Đánh giá│
├─────┼──────────────────────────────────┼─────────────┼─────────────┼─────────┤
│  1  │ Chức năng đáp ứng yêu cầu        │ 100%        │             │ Đạt/K.Đạt│
│  2  │ Lỗi Critical/Blocker             │ 0           │             │ Đạt/K.Đạt│
│  3  │ Lỗi Major                        │ ≤ 5         │             │ Đạt/K.Đạt│
│  4  │ Hiệu năng (Response time)        │ < 3s        │             │ Đạt/K.Đạt│
│  5  │ Tài liệu đầy đủ                  │ 100%        │             │ Đạt/K.Đạt│
│  6  │ Bảo mật                          │ Đạt chuẩn   │             │ Đạt/K.Đạt│
└─────┴──────────────────────────────────┴─────────────┴─────────────┴─────────┘

3. DANH MỤC TÀI LIỆU BÀN GIAO

┌─────┬──────────────────────────────────────────────┬────────────┬────────────┐
│ STT │ Tên tài liệu                                 │ Số lượng   │ Ghi chú    │
├─────┼──────────────────────────────────────────────┼────────────┼────────────┤
│  1  │ Tài liệu đặc tả yêu cầu (SRS)                │            │            │
│  2  │ Tài liệu thiết kế (SDD)                      │            │            │
│  3  │ Mã nguồn (Source code)                       │            │            │
│  4  │ Tài liệu hướng dẫn sử dụng                   │            │            │
│  5  │ Tài liệu hướng dẫn cài đặt                   │            │            │
│  6  │ Tài liệu quản trị hệ thống                   │            │            │
│  7  │ Báo cáo kiểm thử                             │            │            │
│  8  │ Bộ cài đặt phần mềm                          │            │            │
└─────┴──────────────────────────────────────────────┴────────────┴────────────┘

V. KẾT LUẬN

□ Sản phẩm ĐẠT yêu cầu nghiệm thu
□ Sản phẩm KHÔNG ĐẠT yêu cầu nghiệm thu

Ý kiến:
.........................................................................
.........................................................................

VI. CÁC VẤN ĐỀ TỒN ĐỌNG (nếu có)

┌─────┬────────────────────────────────┬─────────────────┬──────────────────┐
│ STT │ Vấn đề                         │ Thời hạn xử lý  │ Bên chịu trách   │
│     │                                │                 │ nhiệm            │
├─────┼────────────────────────────────┼─────────────────┼──────────────────┤
│     │                                │                 │                  │
└─────┴────────────────────────────────┴─────────────────┴──────────────────┘

VII. CAM KẾT

1. Bên B cam kết:
   - Bảo hành sản phẩm trong thời gian: ..... tháng
   - Hỗ trợ kỹ thuật theo hợp đồng
   - Xử lý các vấn đề tồn đọng (nếu có) theo thời hạn đã thống nhất

2. Bên A cam kết:
   - Thanh toán theo hợp đồng sau khi nghiệm thu
   - Phối hợp với Bên B trong quá trình bảo hành

VIII. CHỮ KÝ

Biên bản được lập thành 04 bản có giá trị như nhau, mỗi bên giữ 02 bản.

          ĐẠI DIỆN BÊN A                           ĐẠI DIỆN BÊN B
         (Ký, ghi rõ họ tên)                      (Ký, ghi rõ họ tên)




    ────────────────────────                  ────────────────────────
           (Đóng dấu)                                (Đóng dấu)

═══════════════════════════════════════════════════════════════════════════════
    `.trim(),
    summary: 'Mẫu biên bản nghiệm thu phần mềm chuẩn: căn cứ pháp lý (hợp đồng, TT13/2020), thông tin các bên, nội dung nghiệm thu (khối lượng, chất lượng, tài liệu bàn giao), kết luận, vấn đề tồn đọng, cam kết bảo hành.'
  }
]

async function main() {
  console.log('🌱 Seeding preset documents...')
  console.log('')

  for (const doc of PRESET_DOCUMENTS) {
    await prisma.presetDocument.upsert({
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
      create: doc
    })
    console.log(`  ✓ ${doc.shortName} - ${doc.name}`)
  }

  console.log('')
  console.log(`✅ Seeded ${PRESET_DOCUMENTS.length} documents successfully!`)
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
