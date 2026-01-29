import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, CheckCircle, BookOpen, HelpCircle } from 'lucide-react'

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <h1 className="font-heading text-4xl font-bold text-slate-900 mb-4">
              Tài liệu hướng dẫn
            </h1>
            <p className="text-lg text-slate-600">
              Hướng dẫn sử dụng TT13 DocGen và thông tin về Thông tư 13/2020.
            </p>
          </div>

          <div className="space-y-8">
            {/* What is TT13/2020 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary-600" />
                  Thông tư 13/2020/TT-BTTTT là gì?
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  Thông tư 13/2020/TT-BTTTT của Bộ Thông tin và Truyền thông quy định về
                  việc lập hồ sơ chứng minh quy trình sản xuất phần mềm của doanh nghiệp.
                </p>
                <p>
                  Hồ sơ này bao gồm <strong>7 công đoạn</strong> chính:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <strong>Xác định yêu cầu</strong> - Thu thập và phân tích yêu cầu từ
                    khách hàng
                  </li>
                  <li>
                    <strong>Phân tích và thiết kế</strong> - Thiết kế kiến trúc và chi tiết
                    hệ thống
                  </li>
                  <li>
                    <strong>Lập trình</strong> - Viết code và phát triển các module
                  </li>
                  <li>
                    <strong>Kiểm thử</strong> - Test các tính năng và đảm bảo chất lượng
                  </li>
                  <li>
                    <strong>Đóng gói</strong> - Đóng gói sản phẩm để triển khai
                  </li>
                  <li>
                    <strong>Cài đặt, bàn giao</strong> - Triển khai và bàn giao cho khách
                    hàng
                  </li>
                  <li>
                    <strong>Phát hành</strong> - Ra mắt và công bố sản phẩm
                  </li>
                </ol>
                <p className="text-slate-600 italic">
                  Lưu ý: Tối thiểu phải có Công đoạn 1 HOẶC Công đoạn 2 (hoặc cả hai).
                  Hồ sơ cần được lưu trữ trong 10 năm.
                </p>
              </CardContent>
            </Card>

            {/* How to use */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary-600" />
                  Cách sử dụng TT13 DocGen
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Upload tài liệu
                    </h4>
                    <p className="text-slate-600">
                      Kéo thả file mô tả dự án (.txt, .md, .docx, .pdf) và file zip chứa
                      ảnh minh họa. Đặt tên ảnh theo quy tắc: cd1-xxx.png cho Công đoạn 1,
                      cd2-xxx.png cho Công đoạn 2, v.v.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Cấu hình dự án</h4>
                    <p className="text-slate-600">
                      AI sẽ tự động extract thông tin từ tài liệu. Bạn có thể chỉnh sửa
                      thông tin và chọn các công đoạn cần tạo.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Xem lại và chỉnh sửa
                    </h4>
                    <p className="text-slate-600">
                      AI sẽ tạo nội dung cho từng công đoạn. Bạn có thể chat với AI
                      Copilot để điều chỉnh nội dung hoặc hỏi đáp về TT13/2020.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Export hồ sơ</h4>
                    <p className="text-slate-600">
                      Tải file DOCX hoàn chỉnh với đầy đủ format, ảnh minh họa, và sẵn
                      sàng để in, ký tên và đóng dấu.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary-600" />
                  Mẹo để có hồ sơ tốt nhất
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">
                      Mô tả dự án càng chi tiết, AI sẽ tạo nội dung càng chính xác
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">
                      Đặt tên ảnh theo quy tắc cdX-xxx.png để AI tự động chèn đúng công
                      đoạn
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">
                      Review kỹ nội dung AI tạo ra và điều chỉnh cho phù hợp với thực tế
                      dự án
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">
                      Sử dụng AI Copilot để hỏi đáp về TT13/2020 khi cần
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary-500" />
                  Câu hỏi thường gặp
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    File mô tả dự án cần có những gì?
                  </h4>
                  <p className="text-slate-600">
                    Bao gồm: Tên phần mềm, tên khách hàng, mô tả tính năng, công nghệ sử
                    dụng, thời gian thực hiện. Càng chi tiết càng tốt.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Ảnh minh họa có bắt buộc không?
                  </h4>
                  <p className="text-slate-600">
                    Không bắt buộc, nhưng có ảnh minh họa sẽ làm hồ sơ chuyên nghiệp và
                    thuyết phục hơn.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Có thể chỉnh sửa nội dung sau khi AI tạo không?
                  </h4>
                  <p className="text-slate-600">
                    Có, bạn có thể chat với AI Copilot để yêu cầu điều chỉnh nội dung
                    trước khi export.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
