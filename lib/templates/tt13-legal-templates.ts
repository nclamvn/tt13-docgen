// lib/templates/tt13-legal-templates.ts
// Thư viện văn bản mẫu chuẩn pháp lý theo Thông tư 13/2020/TT-BTTTT

import type { StageData } from '@/types/document'

// ============================================
// LEGAL REFERENCE - Căn cứ pháp lý
// ============================================

export const LEGAL_REFERENCES = {
  tt13: {
    name: 'Thông tư 13/2020/TT-BTTTT',
    fullName: 'Thông tư số 13/2020/TT-BTTTT ngày 26/06/2020 của Bộ Thông tin và Truyền thông',
    subject: 'Quy định việc xác định hoạt động sản xuất sản phẩm phần mềm',
    effectiveDate: '15/08/2020',
    articles: {
      article3: 'Điều 3: Nguyên tắc xác định hoạt động sản xuất sản phẩm phần mềm',
      article4: 'Điều 4: Công đoạn sản xuất sản phẩm phần mềm',
      article5: 'Điều 5: Hồ sơ chứng minh hoạt động sản xuất sản phẩm phần mềm'
    }
  },
  decree13: {
    name: 'Nghị định 13/2023/NĐ-CP',
    fullName: 'Nghị định số 13/2023/NĐ-CP ngày 17/04/2023 của Chính phủ',
    subject: 'Bảo vệ dữ liệu cá nhân'
  },
  decree71: {
    name: 'Nghị định 71/2007/NĐ-CP',
    fullName: 'Nghị định số 71/2007/NĐ-CP ngày 03/05/2007 của Chính phủ',
    subject: 'Quy định chi tiết và hướng dẫn một số điều của Luật Công nghệ thông tin về công nghiệp công nghệ thông tin'
  },
  lawIT: {
    name: 'Luật CNTT 2006',
    fullName: 'Luật Công nghệ thông tin số 67/2006/QH11 ngày 29/06/2006',
    subject: 'Quy định về hoạt động ứng dụng và phát triển công nghệ thông tin'
  }
}

// ============================================
// TERMINOLOGY - Thuật ngữ pháp lý
// ============================================

export const LEGAL_TERMINOLOGY = {
  // Thuật ngữ về quy trình
  process: {
    'Công đoạn sản xuất': 'Giai đoạn trong quy trình tạo ra sản phẩm phần mềm',
    'Quy trình sản xuất': 'Tập hợp các công đoạn có trình tự để tạo ra sản phẩm phần mềm',
    'Hoạt động': 'Công việc cụ thể được thực hiện trong một công đoạn',
    'Sản phẩm đầu ra': 'Kết quả có thể kiểm chứng được của một công đoạn',
    'Tiêu chí chất lượng': 'Tiêu chuẩn đánh giá mức độ hoàn thành của sản phẩm đầu ra'
  },
  // Thuật ngữ về tài liệu
  documents: {
    'Tài liệu đặc tả yêu cầu': 'Software Requirements Specification (SRS)',
    'Tài liệu thiết kế': 'Software Design Document (SDD)',
    'Kế hoạch kiểm thử': 'Test Plan',
    'Báo cáo kiểm thử': 'Test Report',
    'Biên bản nghiệm thu': 'Acceptance Record',
    'Hướng dẫn sử dụng': 'User Manual',
    'Hướng dẫn cài đặt': 'Installation Guide',
    'Tài liệu vận hành': 'Operation Manual',
    'Biên bản bàn giao': 'Handover Record'
  },
  // Thuật ngữ về nhân sự
  roles: {
    'Quản lý dự án': 'Project Manager (PM)',
    'Phân tích nghiệp vụ': 'Business Analyst (BA)',
    'Kiến trúc sư phần mềm': 'Software Architect (SA)',
    'Lập trình viên': 'Developer (Dev)',
    'Kiểm thử viên': 'Tester/QA Engineer',
    'Quản lý cấu hình': 'Configuration Manager',
    'Quản lý chất lượng': 'Quality Assurance (QA)'
  }
}

// ============================================
// STAGE TEMPLATES - Mẫu nội dung công đoạn
// ============================================

export const STAGE_TEMPLATES: Record<number, StageData> = {
  // ========================================
  // CÔNG ĐOẠN 1: XÁC ĐỊNH YÊU CẦU (Bắt buộc)
  // ========================================
  1: {
    title: 'Công đoạn 1: Xác định yêu cầu',
    objective: 'Thu thập, phân tích và tài liệu hóa đầy đủ các yêu cầu chức năng và phi chức năng của phần mềm từ khách hàng và các bên liên quan, đảm bảo yêu cầu rõ ràng, có thể kiểm chứng và được phê duyệt chính thức.',
    activities: [
      {
        name: 'Khởi động dự án',
        description: 'Tổ chức cuộc họp khởi động (Kick-off meeting) với khách hàng và các bên liên quan để giới thiệu dự án, xác định phạm vi, mục tiêu và các bên tham gia.',
        duration: '1-2 ngày',
        responsible: 'Quản lý dự án'
      },
      {
        name: 'Thu thập yêu cầu',
        description: 'Thực hiện phỏng vấn, workshop, khảo sát với khách hàng và người dùng cuối để thu thập yêu cầu nghiệp vụ. Ghi nhận đầy đủ các yêu cầu chức năng và phi chức năng.',
        duration: '1-2 tuần',
        responsible: 'Phân tích nghiệp vụ'
      },
      {
        name: 'Phân tích yêu cầu',
        description: 'Phân tích, phân loại và ưu tiên hóa các yêu cầu thu thập được. Xác định các yêu cầu mâu thuẫn, thiếu sót hoặc không khả thi. Làm rõ với khách hàng.',
        duration: '1 tuần',
        responsible: 'Phân tích nghiệp vụ'
      },
      {
        name: 'Lập tài liệu đặc tả yêu cầu (SRS)',
        description: 'Soạn thảo tài liệu đặc tả yêu cầu phần mềm theo chuẩn IEEE 830 hoặc tương đương. Mô tả chi tiết từng yêu cầu với ID, mô tả, độ ưu tiên, và tiêu chí chấp nhận.',
        duration: '1 tuần',
        responsible: 'Phân tích nghiệp vụ'
      },
      {
        name: 'Review và phê duyệt yêu cầu',
        description: 'Tổ chức họp review tài liệu SRS với khách hàng và đội dự án. Thu thập ý kiến, chỉnh sửa và xin phê duyệt chính thức từ khách hàng.',
        duration: '3-5 ngày',
        responsible: 'Quản lý dự án'
      },
      {
        name: 'Baseline yêu cầu',
        description: 'Lưu trữ phiên bản SRS được phê duyệt làm baseline. Thiết lập quy trình quản lý thay đổi yêu cầu (Change Request).',
        duration: '1 ngày',
        responsible: 'Quản lý cấu hình'
      }
    ],
    deliverables: [
      {
        name: 'Biên bản họp khởi động dự án',
        description: 'Ghi nhận nội dung cuộc họp kick-off, danh sách tham dự, các quyết định và hành động tiếp theo.',
        format: '.docx'
      },
      {
        name: 'Biên bản khảo sát yêu cầu',
        description: 'Tổng hợp các buổi phỏng vấn, workshop với ghi chép chi tiết yêu cầu từ khách hàng.',
        format: '.docx'
      },
      {
        name: 'Tài liệu đặc tả yêu cầu phần mềm (SRS)',
        description: 'Tài liệu mô tả đầy đủ, chi tiết các yêu cầu chức năng và phi chức năng của hệ thống. Bao gồm: tổng quan hệ thống, phạm vi, định nghĩa thuật ngữ, yêu cầu chức năng (Use Cases/User Stories), yêu cầu phi chức năng, giao diện, ràng buộc.',
        format: '.docx'
      },
      {
        name: 'Ma trận truy vết yêu cầu (RTM)',
        description: 'Bảng ánh xạ giữa yêu cầu nghiệp vụ và yêu cầu phần mềm, đảm bảo mỗi yêu cầu đều được theo dõi.',
        format: '.xlsx'
      },
      {
        name: 'Biên bản phê duyệt yêu cầu',
        description: 'Văn bản xác nhận khách hàng đã review và phê duyệt tài liệu SRS.',
        format: '.docx'
      }
    ],
    tools: [
      'Microsoft Word/Google Docs (soạn thảo tài liệu)',
      'Microsoft Excel/Google Sheets (ma trận RTM)',
      'Jira/Azure DevOps (quản lý yêu cầu)',
      'Miro/Figma/Draw.io (vẽ sơ đồ Use Case)',
      'Confluence (lưu trữ tài liệu)',
      'Microsoft Teams/Zoom (họp trực tuyến)'
    ],
    participants: [
      {
        role: 'Quản lý dự án (PM)',
        responsibility: 'Điều phối dự án, tổ chức cuộc họp, đảm bảo tiến độ, phê duyệt tài liệu nội bộ.'
      },
      {
        role: 'Phân tích nghiệp vụ (BA)',
        responsibility: 'Thu thập, phân tích yêu cầu, soạn thảo tài liệu SRS, làm việc trực tiếp với khách hàng.'
      },
      {
        role: 'Kiến trúc sư phần mềm (SA)',
        responsibility: 'Đánh giá tính khả thi kỹ thuật của yêu cầu, góp ý về kiến trúc hệ thống.'
      },
      {
        role: 'Đại diện khách hàng',
        responsibility: 'Cung cấp yêu cầu, phản hồi, phê duyệt tài liệu SRS.'
      }
    ],
    qualityCriteria: [
      '100% yêu cầu được định danh (có ID duy nhất) và phân loại (chức năng/phi chức năng)',
      'Mỗi yêu cầu phải có tiêu chí chấp nhận (acceptance criteria) có thể kiểm thử được',
      'Tài liệu SRS được review bởi ít nhất 2 thành viên đội dự án trước khi trình khách hàng',
      'Tài liệu SRS được khách hàng phê duyệt bằng văn bản (chữ ký hoặc email xác nhận)',
      'Ma trận RTM ánh xạ 100% yêu cầu nghiệp vụ sang yêu cầu phần mềm',
      'Không còn yêu cầu mâu thuẫn hoặc không rõ ràng sau khi hoàn thành công đoạn'
    ],
    notes: 'Công đoạn này là BẮT BUỘC theo Điều 4, Khoản 1 của Thông tư 13/2020/TT-BTTTT. Tối thiểu phải có Công đoạn 1 HOẶC Công đoạn 2 để được công nhận là hoạt động sản xuất phần mềm.'
  },

  // ========================================
  // CÔNG ĐOẠN 2: PHÂN TÍCH VÀ THIẾT KẾ (Bắt buộc)
  // ========================================
  2: {
    title: 'Công đoạn 2: Phân tích và thiết kế',
    objective: 'Chuyển đổi các yêu cầu phần mềm thành thiết kế kỹ thuật chi tiết, bao gồm kiến trúc hệ thống, thiết kế cơ sở dữ liệu, thiết kế giao diện và thiết kế chi tiết các module, làm cơ sở cho công đoạn lập trình.',
    activities: [
      {
        name: 'Phân tích hệ thống',
        description: 'Phân tích chi tiết các yêu cầu từ SRS, xác định các thành phần hệ thống, luồng dữ liệu, và các tương tác giữa các module.',
        duration: '1 tuần',
        responsible: 'Kiến trúc sư phần mềm'
      },
      {
        name: 'Thiết kế kiến trúc hệ thống',
        description: 'Xác định kiến trúc tổng thể (Monolithic/Microservices/Serverless), các layer (Presentation, Business Logic, Data Access), công nghệ sử dụng, và các pattern thiết kế.',
        duration: '1 tuần',
        responsible: 'Kiến trúc sư phần mềm'
      },
      {
        name: 'Thiết kế cơ sở dữ liệu',
        description: 'Thiết kế mô hình dữ liệu (ERD), định nghĩa các bảng, quan hệ, index, stored procedures. Chuẩn hóa dữ liệu và tối ưu hóa hiệu năng.',
        duration: '1 tuần',
        responsible: 'Kiến trúc sư phần mềm'
      },
      {
        name: 'Thiết kế giao diện người dùng (UI/UX)',
        description: 'Thiết kế wireframe, mockup cho các màn hình chính. Xây dựng prototype để xác nhận với khách hàng. Định nghĩa design system và component library.',
        duration: '1-2 tuần',
        responsible: 'UI/UX Designer'
      },
      {
        name: 'Thiết kế API và tích hợp',
        description: 'Định nghĩa các API endpoint (RESTful/GraphQL), request/response schema, authentication/authorization, và các tích hợp với hệ thống bên ngoài.',
        duration: '1 tuần',
        responsible: 'Kiến trúc sư phần mềm'
      },
      {
        name: 'Thiết kế chi tiết module',
        description: 'Thiết kế chi tiết từng module/component: class diagram, sequence diagram, activity diagram. Mô tả các hàm, tham số, giá trị trả về.',
        duration: '1-2 tuần',
        responsible: 'Lập trình viên Senior'
      },
      {
        name: 'Review và phê duyệt thiết kế',
        description: 'Tổ chức họp review thiết kế với đội dự án và khách hàng. Đánh giá tính khả thi, hiệu năng, bảo mật. Chỉnh sửa và phê duyệt.',
        duration: '3-5 ngày',
        responsible: 'Quản lý dự án'
      }
    ],
    deliverables: [
      {
        name: 'Tài liệu thiết kế hệ thống (SDD)',
        description: 'Tài liệu mô tả kiến trúc tổng thể, các thành phần hệ thống, công nghệ sử dụng, deployment diagram, và các quyết định thiết kế.',
        format: '.docx'
      },
      {
        name: 'Sơ đồ kiến trúc hệ thống',
        description: 'Sơ đồ trực quan mô tả kiến trúc, các layer, các service và cách chúng tương tác.',
        format: '.png/.svg'
      },
      {
        name: 'Thiết kế cơ sở dữ liệu (ERD)',
        description: 'Sơ đồ thực thể quan hệ, mô tả các bảng, trường, kiểu dữ liệu, quan hệ, và các ràng buộc.',
        format: '.png/.svg + .sql'
      },
      {
        name: 'Tài liệu thiết kế UI/UX',
        description: 'Wireframe, mockup các màn hình chính, user flow, và design system specification.',
        format: '.pdf/.figma'
      },
      {
        name: 'Tài liệu thiết kế API',
        description: 'Đặc tả các API endpoint, request/response format, error codes, và ví dụ sử dụng. Có thể dùng OpenAPI/Swagger.',
        format: '.yaml/.json'
      },
      {
        name: 'Sơ đồ UML',
        description: 'Class diagram, sequence diagram, activity diagram cho các module chính.',
        format: '.png/.svg'
      },
      {
        name: 'Biên bản phê duyệt thiết kế',
        description: 'Văn bản xác nhận đội dự án và khách hàng đã review và phê duyệt thiết kế.',
        format: '.docx'
      }
    ],
    tools: [
      'Draw.io/Lucidchart/PlantUML (vẽ sơ đồ UML)',
      'Figma/Adobe XD/Sketch (thiết kế UI/UX)',
      'dbdiagram.io/MySQL Workbench/pgAdmin (thiết kế database)',
      'Swagger/Postman (thiết kế API)',
      'Microsoft Visio (sơ đồ kiến trúc)',
      'Confluence/Notion (lưu trữ tài liệu)'
    ],
    participants: [
      {
        role: 'Kiến trúc sư phần mềm (SA)',
        responsibility: 'Thiết kế kiến trúc hệ thống, database, API. Review và đảm bảo chất lượng thiết kế.'
      },
      {
        role: 'UI/UX Designer',
        responsibility: 'Thiết kế giao diện người dùng, user experience, prototype.'
      },
      {
        role: 'Lập trình viên Senior',
        responsibility: 'Thiết kế chi tiết module, đánh giá tính khả thi kỹ thuật.'
      },
      {
        role: 'Phân tích nghiệp vụ (BA)',
        responsibility: 'Đảm bảo thiết kế đáp ứng đúng yêu cầu nghiệp vụ từ SRS.'
      },
      {
        role: 'Quản lý dự án (PM)',
        responsibility: 'Điều phối, theo dõi tiến độ, tổ chức review.'
      }
    ],
    qualityCriteria: [
      'Thiết kế đáp ứng 100% yêu cầu chức năng và phi chức năng trong SRS',
      'Kiến trúc được review bởi ít nhất 2 senior developer/architect',
      'Thiết kế database đạt chuẩn hóa tối thiểu 3NF (hoặc có lý do hợp lệ nếu denormalize)',
      'Prototype UI được khách hàng xác nhận trước khi chuyển sang lập trình',
      'API specification đầy đủ, có ví dụ request/response cho mỗi endpoint',
      'Có xem xét các yếu tố bảo mật (authentication, authorization, input validation)',
      'Tài liệu thiết kế được version control và lưu trữ tập trung'
    ],
    notes: 'Công đoạn này là BẮT BUỘC theo Điều 4, Khoản 2 của Thông tư 13/2020/TT-BTTTT. Tối thiểu phải có Công đoạn 1 HOẶC Công đoạn 2 để được công nhận là hoạt động sản xuất phần mềm.'
  },

  // ========================================
  // CÔNG ĐOẠN 3: LẬP TRÌNH
  // ========================================
  3: {
    title: 'Công đoạn 3: Lập trình',
    objective: 'Chuyển đổi thiết kế kỹ thuật thành mã nguồn hoạt động, đảm bảo code chất lượng, tuân thủ coding standards, có unit test và được review trước khi merge.',
    activities: [
      {
        name: 'Thiết lập môi trường phát triển',
        description: 'Cài đặt và cấu hình môi trường dev (IDE, SDK, database local, container). Thiết lập Git repository, branching strategy, và CI/CD pipeline.',
        duration: '2-3 ngày',
        responsible: 'DevOps Engineer'
      },
      {
        name: 'Xây dựng framework/base code',
        description: 'Tạo cấu trúc project, setup các library/framework cơ bản, cấu hình linting, formatting, và các convention chung.',
        duration: '3-5 ngày',
        responsible: 'Lập trình viên Senior'
      },
      {
        name: 'Lập trình backend',
        description: 'Phát triển các API, business logic, data access layer theo thiết kế. Implement authentication, authorization, và các service integration.',
        duration: '4-8 tuần',
        responsible: 'Lập trình viên Backend'
      },
      {
        name: 'Lập trình frontend',
        description: 'Phát triển giao diện người dùng theo thiết kế UI/UX. Implement các component, state management, và API integration.',
        duration: '4-8 tuần',
        responsible: 'Lập trình viên Frontend'
      },
      {
        name: 'Viết Unit Test',
        description: 'Viết unit test cho các function, method quan trọng. Đảm bảo code coverage theo quy định (thường >= 70%).',
        duration: 'Song song với lập trình',
        responsible: 'Lập trình viên'
      },
      {
        name: 'Code Review',
        description: 'Review code trước khi merge vào branch chính. Kiểm tra logic, performance, security, coding standards.',
        duration: 'Liên tục',
        responsible: 'Lập trình viên Senior'
      },
      {
        name: 'Tích hợp và build',
        description: 'Merge code từ các branch, giải quyết conflict, đảm bảo build thành công và tất cả test pass.',
        duration: 'Liên tục',
        responsible: 'Lập trình viên'
      }
    ],
    deliverables: [
      {
        name: 'Mã nguồn (Source Code)',
        description: 'Toàn bộ source code của ứng dụng, được quản lý trên Git repository với đầy đủ commit history.',
        format: 'Git repository'
      },
      {
        name: 'Tài liệu Coding Standards',
        description: 'Quy định về naming convention, code structure, commenting, và các best practices áp dụng cho dự án.',
        format: '.md/.docx'
      },
      {
        name: 'Unit Test Suite',
        description: 'Bộ unit test với test cases, expected results, và báo cáo code coverage.',
        format: 'Test files + Report'
      },
      {
        name: 'Tài liệu API (auto-generated)',
        description: 'Tài liệu API được generate tự động từ code (Swagger/OpenAPI).',
        format: '.html/.json'
      },
      {
        name: 'Build Artifacts',
        description: 'Các file build (compiled code, bundles, containers) sẵn sàng deploy.',
        format: '.jar/.war/.zip/Docker image'
      },
      {
        name: 'Báo cáo Code Quality',
        description: 'Báo cáo từ công cụ static code analysis (SonarQube, ESLint) về code quality, bugs, vulnerabilities.',
        format: '.html/.pdf'
      }
    ],
    tools: [
      'Visual Studio Code/IntelliJ IDEA/Eclipse (IDE)',
      'Git/GitHub/GitLab/Bitbucket (version control)',
      'Jest/JUnit/PyTest (unit testing)',
      'SonarQube/ESLint/Prettier (code quality)',
      'Docker/Kubernetes (containerization)',
      'Jenkins/GitHub Actions/GitLab CI (CI/CD)'
    ],
    participants: [
      {
        role: 'Lập trình viên Senior',
        responsibility: 'Lead technical, code review, giải quyết vấn đề kỹ thuật phức tạp, mentor junior.'
      },
      {
        role: 'Lập trình viên',
        responsibility: 'Phát triển code theo task assignment, viết unit test, fix bugs.'
      },
      {
        role: 'DevOps Engineer',
        responsibility: 'Thiết lập và duy trì môi trường dev, CI/CD pipeline, infrastructure.'
      },
      {
        role: 'Quản lý dự án (PM)',
        responsibility: 'Theo dõi tiến độ, phân bổ task, giải quyết blockers.'
      }
    ],
    qualityCriteria: [
      'Code tuân thủ 100% coding standards đã định nghĩa',
      'Unit test coverage >= 70% (hoặc theo quy định của dự án)',
      '100% code được review trước khi merge vào main branch',
      'Không có critical/blocker bugs từ static code analysis',
      'Build thành công và tất cả automated tests pass trước khi release',
      'Code được document bằng comments cho các logic phức tạp',
      'Không có hard-coded credentials hoặc sensitive data trong code'
    ],
    notes: 'Công đoạn này không bắt buộc theo TT13/2020, nhưng là công đoạn quan trọng trong quy trình phát triển phần mềm thực tế.'
  },

  // ========================================
  // CÔNG ĐOẠN 4: KIỂM THỬ
  // ========================================
  4: {
    title: 'Công đoạn 4: Kiểm thử',
    objective: 'Kiểm tra và đảm bảo phần mềm hoạt động đúng theo yêu cầu, không có lỗi nghiêm trọng, đáp ứng các tiêu chí chất lượng về chức năng, hiệu năng, bảo mật và khả năng sử dụng.',
    activities: [
      {
        name: 'Lập kế hoạch kiểm thử',
        description: 'Xây dựng Test Plan: phạm vi, phương pháp, môi trường, timeline, resources, risk assessment, và exit criteria.',
        duration: '3-5 ngày',
        responsible: 'QA Lead'
      },
      {
        name: 'Thiết kế test cases',
        description: 'Viết test cases chi tiết cho từng chức năng dựa trên SRS. Bao gồm positive test, negative test, boundary test.',
        duration: '1-2 tuần',
        responsible: 'Kiểm thử viên'
      },
      {
        name: 'Chuẩn bị môi trường test',
        description: 'Thiết lập môi trường testing (staging/QA environment) với dữ liệu test, cấu hình giống production.',
        duration: '2-3 ngày',
        responsible: 'DevOps Engineer'
      },
      {
        name: 'Kiểm thử chức năng (Functional Testing)',
        description: 'Thực hiện test các chức năng theo test cases. Ghi nhận kết quả, log bugs vào bug tracking system.',
        duration: '2-4 tuần',
        responsible: 'Kiểm thử viên'
      },
      {
        name: 'Kiểm thử tích hợp (Integration Testing)',
        description: 'Kiểm tra tích hợp giữa các module, giữa frontend và backend, giữa hệ thống với third-party services.',
        duration: '1-2 tuần',
        responsible: 'Kiểm thử viên'
      },
      {
        name: 'Kiểm thử hiệu năng (Performance Testing)',
        description: 'Thực hiện load test, stress test để đánh giá hiệu năng hệ thống dưới các điều kiện tải khác nhau.',
        duration: '1 tuần',
        responsible: 'Performance Tester'
      },
      {
        name: 'Kiểm thử bảo mật (Security Testing)',
        description: 'Thực hiện vulnerability scan, penetration testing để phát hiện các lỗ hổng bảo mật.',
        duration: '1 tuần',
        responsible: 'Security Tester'
      },
      {
        name: 'Kiểm thử chấp nhận (UAT)',
        description: 'Khách hàng/end-user thực hiện test để xác nhận phần mềm đáp ứng yêu cầu nghiệp vụ.',
        duration: '1-2 tuần',
        responsible: 'Khách hàng + BA'
      },
      {
        name: 'Sửa lỗi và kiểm thử lại',
        description: 'Dev sửa bugs, QA verify fixes, thực hiện regression testing để đảm bảo không phát sinh lỗi mới.',
        duration: 'Liên tục',
        responsible: 'Lập trình viên + Kiểm thử viên'
      }
    ],
    deliverables: [
      {
        name: 'Kế hoạch kiểm thử (Test Plan)',
        description: 'Tài liệu mô tả chiến lược, phạm vi, phương pháp, timeline, resources, và exit criteria cho testing.',
        format: '.docx'
      },
      {
        name: 'Test Cases/Test Scenarios',
        description: 'Bộ test cases chi tiết với ID, preconditions, steps, expected results, priority.',
        format: '.xlsx/Test management tool'
      },
      {
        name: 'Báo cáo kiểm thử (Test Report)',
        description: 'Báo cáo tổng hợp kết quả testing: số test cases, pass/fail rate, bugs summary, recommendations.',
        format: '.docx/.pdf'
      },
      {
        name: 'Danh sách lỗi (Bug List)',
        description: 'Danh sách tất cả bugs được phát hiện với severity, priority, status, assigned to, resolution.',
        format: '.xlsx/Bug tracking tool'
      },
      {
        name: 'Báo cáo kiểm thử hiệu năng',
        description: 'Kết quả load test, stress test với metrics: response time, throughput, error rate, resource usage.',
        format: '.pdf/.html'
      },
      {
        name: 'Báo cáo kiểm thử bảo mật',
        description: 'Kết quả security scan, vulnerability report, và recommendations.',
        format: '.pdf'
      },
      {
        name: 'Biên bản UAT',
        description: 'Biên bản ghi nhận kết quả UAT, danh sách issues, và xác nhận của khách hàng.',
        format: '.docx'
      }
    ],
    tools: [
      'Jira/Azure DevOps/Mantis (bug tracking)',
      'TestRail/Zephyr/qTest (test management)',
      'Selenium/Cypress/Playwright (automation testing)',
      'JMeter/Gatling/k6 (performance testing)',
      'OWASP ZAP/Burp Suite/Nessus (security testing)',
      'Postman/Insomnia (API testing)'
    ],
    participants: [
      {
        role: 'QA Lead',
        responsibility: 'Lập kế hoạch testing, phân bổ công việc, theo dõi tiến độ, báo cáo chất lượng.'
      },
      {
        role: 'Kiểm thử viên (Tester)',
        responsibility: 'Thiết kế test cases, thực hiện test, log bugs, verify fixes.'
      },
      {
        role: 'Automation Tester',
        responsibility: 'Xây dựng và duy trì bộ automated tests.'
      },
      {
        role: 'Lập trình viên',
        responsibility: 'Sửa bugs, support QA khi cần.'
      },
      {
        role: 'Đại diện khách hàng',
        responsibility: 'Tham gia UAT, phê duyệt kết quả testing.'
      }
    ],
    qualityCriteria: [
      '100% test cases được thực hiện',
      'Pass rate >= 95% (hoặc theo quy định của dự án)',
      'Không còn bugs Critical hoặc Blocker chưa được sửa',
      'Tất cả bugs Major phải được sửa hoặc có kế hoạch sửa trong release tiếp theo',
      'UAT được khách hàng sign-off bằng văn bản',
      'Performance đáp ứng NFR (Non-Functional Requirements)',
      'Không có high/critical vulnerabilities từ security testing'
    ],
    notes: 'Công đoạn này không bắt buộc theo TT13/2020, nhưng rất quan trọng để đảm bảo chất lượng sản phẩm.'
  },

  // ========================================
  // CÔNG ĐOẠN 5: ĐÓNG GÓI
  // ========================================
  5: {
    title: 'Công đoạn 5: Đóng gói',
    objective: 'Đóng gói phần mềm thành sản phẩm hoàn chỉnh, sẵn sàng để cài đặt hoặc phân phối, bao gồm mã nguồn, tài liệu, scripts, và các thành phần cần thiết.',
    activities: [
      {
        name: 'Chuẩn bị release',
        description: 'Review checklist release, đảm bảo tất cả features đã hoàn thành, bugs đã fix, tài liệu đã cập nhật.',
        duration: '1-2 ngày',
        responsible: 'Release Manager'
      },
      {
        name: 'Build sản phẩm',
        description: 'Thực hiện build production: compile, minify, optimize. Tạo các artifacts (packages, containers, installers).',
        duration: '1 ngày',
        responsible: 'DevOps Engineer'
      },
      {
        name: 'Tạo gói cài đặt',
        description: 'Đóng gói phần mềm thành installer (MSI, DMG, DEB, RPM) hoặc container image sẵn sàng deploy.',
        duration: '1-2 ngày',
        responsible: 'DevOps Engineer'
      },
      {
        name: 'Chuẩn bị tài liệu đi kèm',
        description: 'Hoàn thiện và đóng gói các tài liệu: Release Notes, User Manual, Installation Guide, Admin Guide.',
        duration: '2-3 ngày',
        responsible: 'Technical Writer'
      },
      {
        name: 'Kiểm tra gói cài đặt',
        description: 'Cài đặt thử trên môi trường sạch để verify gói cài đặt hoạt động đúng.',
        duration: '1 ngày',
        responsible: 'Kiểm thử viên'
      },
      {
        name: 'Ký số và mã hóa (nếu cần)',
        description: 'Ký số gói phần mềm để xác thực nguồn gốc. Mã hóa nếu có yêu cầu bảo mật.',
        duration: '1 ngày',
        responsible: 'Security Team'
      },
      {
        name: 'Lưu trữ và backup',
        description: 'Lưu trữ gói release vào artifact repository, backup source code, và tag version trong Git.',
        duration: '1 ngày',
        responsible: 'DevOps Engineer'
      }
    ],
    deliverables: [
      {
        name: 'Gói phần mềm (Release Package)',
        description: 'Gói cài đặt hoàn chỉnh hoặc container image sẵn sàng deploy.',
        format: '.zip/.msi/.dmg/.deb/Docker image'
      },
      {
        name: 'Release Notes',
        description: 'Tài liệu mô tả phiên bản: features mới, bugs đã sửa, known issues, upgrade instructions.',
        format: '.md/.docx'
      },
      {
        name: 'Hướng dẫn cài đặt (Installation Guide)',
        description: 'Hướng dẫn chi tiết cách cài đặt phần mềm trên các môi trường khác nhau.',
        format: '.docx/.pdf'
      },
      {
        name: 'Hướng dẫn sử dụng (User Manual)',
        description: 'Tài liệu hướng dẫn end-user sử dụng các chức năng của phần mềm.',
        format: '.docx/.pdf'
      },
      {
        name: 'Hướng dẫn quản trị (Admin Guide)',
        description: 'Tài liệu cho system admin về cấu hình, monitoring, troubleshooting.',
        format: '.docx/.pdf'
      },
      {
        name: 'Scripts cài đặt/migration',
        description: 'Các scripts tự động cho cài đặt, cấu hình, và migration dữ liệu.',
        format: '.sh/.ps1/.sql'
      },
      {
        name: 'Checksum/Signature file',
        description: 'File chứa hash (MD5, SHA256) hoặc digital signature để verify tính toàn vẹn của gói.',
        format: '.txt/.sig'
      }
    ],
    tools: [
      'Maven/Gradle/npm/pip (build tools)',
      'Docker/Podman (containerization)',
      'InstallShield/NSIS/WiX (installer creation)',
      'Nexus/Artifactory/Docker Registry (artifact repository)',
      'Git (version tagging)',
      'GPG/code signing tools (digital signing)'
    ],
    participants: [
      {
        role: 'Release Manager',
        responsibility: 'Điều phối release process, đảm bảo checklist hoàn thành, phê duyệt release.'
      },
      {
        role: 'DevOps Engineer',
        responsibility: 'Build, đóng gói, lưu trữ artifacts, quản lý release pipeline.'
      },
      {
        role: 'Technical Writer',
        responsibility: 'Soạn thảo và cập nhật tài liệu đi kèm release.'
      },
      {
        role: 'Kiểm thử viên',
        responsibility: 'Verify gói cài đặt trên môi trường sạch.'
      }
    ],
    qualityCriteria: [
      'Gói cài đặt có thể install/deploy thành công trên môi trường sạch',
      'Tất cả tài liệu được cập nhật và đúng với phiên bản release',
      'Release Notes liệt kê đầy đủ changes so với phiên bản trước',
      'Gói có checksum/signature để verify integrity',
      'Artifacts được lưu trữ và có thể truy xuất lại',
      'Version được tag trong Git repository',
      'Compliance check pass (license, security scan)'
    ],
    notes: 'Công đoạn này không bắt buộc theo TT13/2020.'
  },

  // ========================================
  // CÔNG ĐOẠN 6: CÀI ĐẶT, BÀN GIAO
  // ========================================
  6: {
    title: 'Công đoạn 6: Cài đặt, bàn giao',
    objective: 'Triển khai phần mềm vào môi trường production của khách hàng, đào tạo người dùng, và bàn giao chính thức sản phẩm cùng toàn bộ tài liệu liên quan.',
    activities: [
      {
        name: 'Lập kế hoạch triển khai',
        description: 'Xây dựng deployment plan: timeline, resources, rollback plan, communication plan, và risk mitigation.',
        duration: '2-3 ngày',
        responsible: 'Release Manager'
      },
      {
        name: 'Chuẩn bị môi trường production',
        description: 'Cài đặt và cấu hình infrastructure: servers, database, networking, security, monitoring.',
        duration: '1-2 tuần',
        responsible: 'System Admin/DevOps'
      },
      {
        name: 'Migration dữ liệu',
        description: 'Chuyển đổi và migrate dữ liệu từ hệ thống cũ (nếu có) sang hệ thống mới. Verify data integrity.',
        duration: '1-2 tuần',
        responsible: 'DBA/Developer'
      },
      {
        name: 'Cài đặt phần mềm',
        description: 'Deploy phần mềm lên môi trường production. Cấu hình theo yêu cầu khách hàng.',
        duration: '1-3 ngày',
        responsible: 'DevOps Engineer'
      },
      {
        name: 'Kiểm tra sau cài đặt',
        description: 'Thực hiện smoke test, sanity test trên production để đảm bảo hệ thống hoạt động đúng.',
        duration: '1-2 ngày',
        responsible: 'Kiểm thử viên'
      },
      {
        name: 'Đào tạo người dùng',
        description: 'Tổ chức các buổi training cho end-users về cách sử dụng hệ thống. Cung cấp tài liệu hướng dẫn.',
        duration: '3-5 ngày',
        responsible: 'Trainer/BA'
      },
      {
        name: 'Đào tạo quản trị viên',
        description: 'Training cho IT team của khách hàng về quản trị, monitoring, troubleshooting hệ thống.',
        duration: '2-3 ngày',
        responsible: 'DevOps/System Admin'
      },
      {
        name: 'Bàn giao chính thức',
        description: 'Họp bàn giao với khách hàng, chuyển giao tài liệu, source code (nếu có), và ký biên bản bàn giao.',
        duration: '1 ngày',
        responsible: 'Quản lý dự án'
      },
      {
        name: 'Go-live support',
        description: 'Hỗ trợ khách hàng trong giai đoạn đầu vận hành, xử lý các issues phát sinh.',
        duration: '1-2 tuần',
        responsible: 'Support Team'
      }
    ],
    deliverables: [
      {
        name: 'Kế hoạch triển khai (Deployment Plan)',
        description: 'Tài liệu chi tiết về quy trình triển khai, timeline, checklist, và rollback plan.',
        format: '.docx'
      },
      {
        name: 'Tài liệu cấu hình production',
        description: 'Document mô tả cấu hình chi tiết của môi trường production: infrastructure, settings, credentials (được bảo mật).',
        format: '.docx + config files'
      },
      {
        name: 'Báo cáo migration dữ liệu',
        description: 'Báo cáo kết quả migration: số records, validation results, issues và giải pháp.',
        format: '.docx'
      },
      {
        name: 'Checklist cài đặt hoàn thành',
        description: 'Danh sách kiểm tra đã hoàn thành tất cả bước cài đặt và cấu hình.',
        format: '.xlsx'
      },
      {
        name: 'Tài liệu đào tạo',
        description: 'Slides, video, handouts sử dụng trong các buổi training.',
        format: '.pptx/.mp4/.pdf'
      },
      {
        name: 'Danh sách điểm danh đào tạo',
        description: 'Ghi nhận danh sách người tham gia training và nội dung đã đào tạo.',
        format: '.xlsx'
      },
      {
        name: 'Biên bản bàn giao',
        description: 'Văn bản chính thức xác nhận việc bàn giao sản phẩm, tài liệu, và trách nhiệm.',
        format: '.docx'
      },
      {
        name: 'Danh mục tài sản bàn giao',
        description: 'Liệt kê tất cả items được bàn giao: source code, documents, licenses, access credentials.',
        format: '.xlsx'
      }
    ],
    tools: [
      'Ansible/Terraform/CloudFormation (infrastructure as code)',
      'Docker/Kubernetes (container orchestration)',
      'AWS/Azure/GCP (cloud platforms)',
      'Datadog/Prometheus/Grafana (monitoring)',
      'PagerDuty/Opsgenie (incident management)',
      'Microsoft Teams/Zoom (training online)'
    ],
    participants: [
      {
        role: 'Release Manager',
        responsibility: 'Điều phối toàn bộ quá trình triển khai, đảm bảo đúng timeline và chất lượng.'
      },
      {
        role: 'DevOps Engineer/System Admin',
        responsibility: 'Cài đặt infrastructure, deploy phần mềm, cấu hình production.'
      },
      {
        role: 'DBA',
        responsibility: 'Migration dữ liệu, cấu hình database production.'
      },
      {
        role: 'Trainer/BA',
        responsibility: 'Đào tạo người dùng cuối về cách sử dụng hệ thống.'
      },
      {
        role: 'Quản lý dự án',
        responsibility: 'Điều phối, ký kết biên bản bàn giao.'
      },
      {
        role: 'Đại diện khách hàng',
        responsibility: 'Phối hợp triển khai, tham gia training, ký biên bản bàn giao.'
      }
    ],
    qualityCriteria: [
      'Hệ thống hoạt động ổn định trên production (uptime >= 99%)',
      'Tất cả smoke tests pass trên môi trường production',
      'Data migration hoàn thành với 100% data integrity',
      '100% users target được đào tạo',
      'Tài liệu bàn giao đầy đủ theo danh mục',
      'Biên bản bàn giao được ký bởi cả hai bên',
      'Không có critical issues trong tuần đầu go-live'
    ],
    notes: 'Công đoạn này không bắt buộc theo TT13/2020.'
  },

  // ========================================
  // CÔNG ĐOẠN 7: PHÁT HÀNH
  // ========================================
  7: {
    title: 'Công đoạn 7: Phát hành',
    objective: 'Chính thức phát hành sản phẩm phần mềm ra thị trường hoặc cho khách hàng sử dụng, kèm theo dịch vụ hỗ trợ, bảo trì và cập nhật trong giai đoạn vận hành.',
    activities: [
      {
        name: 'Công bố phát hành',
        description: 'Thông báo chính thức về việc phát hành sản phẩm: press release, email announcement, website update.',
        duration: '1 ngày',
        responsible: 'Marketing/PR'
      },
      {
        name: 'Phân phối sản phẩm',
        description: 'Đưa sản phẩm lên các kênh phân phối: app store, download page, SaaS platform.',
        duration: '1-2 ngày',
        responsible: 'DevOps/Marketing'
      },
      {
        name: 'Thiết lập hệ thống hỗ trợ',
        description: 'Chuẩn bị help desk, ticketing system, knowledge base, FAQ để hỗ trợ người dùng.',
        duration: '1 tuần',
        responsible: 'Support Team'
      },
      {
        name: 'Monitoring và alerting',
        description: 'Thiết lập hệ thống giám sát 24/7: performance monitoring, error tracking, security monitoring.',
        duration: '1 tuần',
        responsible: 'DevOps/SRE'
      },
      {
        name: 'Thu thập feedback',
        description: 'Thiết lập các kênh thu thập feedback từ người dùng: in-app feedback, surveys, reviews.',
        duration: 'Liên tục',
        responsible: 'Product Manager'
      },
      {
        name: 'Bảo trì định kỳ',
        description: 'Thực hiện các hoạt động bảo trì: security patches, bug fixes, performance optimization.',
        duration: 'Liên tục',
        responsible: 'Development Team'
      },
      {
        name: 'Phát triển cập nhật',
        description: 'Phát triển các tính năng mới, cải tiến dựa trên feedback và roadmap sản phẩm.',
        duration: 'Liên tục',
        responsible: 'Development Team'
      },
      {
        name: 'Báo cáo vận hành',
        description: 'Lập báo cáo định kỳ về tình trạng vận hành: uptime, incidents, support tickets, user metrics.',
        duration: 'Hàng tháng',
        responsible: 'Operations Manager'
      }
    ],
    deliverables: [
      {
        name: 'Thông báo phát hành (Release Announcement)',
        description: 'Nội dung thông báo chính thức về việc ra mắt sản phẩm, features chính, và cách sử dụng.',
        format: '.docx/Email/Website'
      },
      {
        name: 'Trang download/landing page',
        description: 'Trang web để người dùng tải phần mềm hoặc đăng ký sử dụng dịch vụ.',
        format: 'Web page'
      },
      {
        name: 'Knowledge Base/FAQ',
        description: 'Cơ sở kiến thức chứa hướng dẫn, FAQs, troubleshooting guides cho người dùng.',
        format: 'Web portal'
      },
      {
        name: 'SLA Document',
        description: 'Thỏa thuận mức dịch vụ với khách hàng: uptime commitment, response time, support hours.',
        format: '.docx/.pdf'
      },
      {
        name: 'Báo cáo vận hành hàng tháng',
        description: 'Báo cáo tổng hợp: uptime statistics, incident reports, support metrics, user feedback.',
        format: '.docx/.pdf'
      },
      {
        name: 'Change Log',
        description: 'Lịch sử các thay đổi, updates, fixes qua các phiên bản.',
        format: '.md/Web page'
      },
      {
        name: 'Kế hoạch phát triển (Roadmap)',
        description: 'Lộ trình phát triển sản phẩm: features upcoming, timeline, milestones.',
        format: '.docx/.pptx'
      },
      {
        name: 'Hợp đồng bảo trì',
        description: 'Hợp đồng dịch vụ bảo trì, hỗ trợ kỹ thuật với khách hàng.',
        format: '.docx/.pdf'
      }
    ],
    tools: [
      'Zendesk/Freshdesk/Jira Service Desk (help desk)',
      'Statuspage/Cachet (status page)',
      'Sentry/Bugsnag (error tracking)',
      'Google Analytics/Mixpanel (analytics)',
      'Intercom/Drift (in-app support)',
      'GitHub/GitLab (issue tracking, release management)'
    ],
    participants: [
      {
        role: 'Product Manager',
        responsibility: 'Quản lý roadmap, thu thập và ưu tiên hóa feedback, quyết định features.'
      },
      {
        role: 'Support Team',
        responsibility: 'Hỗ trợ người dùng, xử lý tickets, cập nhật knowledge base.'
      },
      {
        role: 'DevOps/SRE',
        responsibility: 'Giám sát hệ thống, xử lý incidents, đảm bảo uptime.'
      },
      {
        role: 'Development Team',
        responsibility: 'Sửa bugs, phát triển features mới, release updates.'
      },
      {
        role: 'Marketing/PR',
        responsibility: 'Truyền thông, marketing, thu hút người dùng mới.'
      }
    ],
    qualityCriteria: [
      'Uptime đạt >= 99.5% (hoặc theo SLA cam kết)',
      'Thời gian phản hồi support tickets theo SLA (vd: P1 < 1h, P2 < 4h)',
      'User satisfaction score >= 4/5 hoặc NPS >= 30',
      'Security patches được apply trong vòng 48h sau khi có CVE',
      'Số lượng critical incidents giảm theo thời gian',
      'Release cycle đều đặn theo plan (vd: monthly releases)',
      'Knowledge base được cập nhật với mọi feature/change mới'
    ],
    notes: 'Công đoạn này không bắt buộc theo TT13/2020, nhưng quan trọng cho việc duy trì và phát triển sản phẩm lâu dài.'
  }
}

// ============================================
// DELIVERABLE TEMPLATES - Mẫu sản phẩm đầu ra
// ============================================

export const DELIVERABLE_TEMPLATES = {
  // Software Requirements Specification (SRS)
  srs: {
    name: 'Tài liệu đặc tả yêu cầu phần mềm (SRS)',
    sections: [
      '1. Giới thiệu',
      '   1.1. Mục đích tài liệu',
      '   1.2. Phạm vi sản phẩm',
      '   1.3. Định nghĩa, từ viết tắt',
      '   1.4. Tài liệu tham khảo',
      '2. Mô tả tổng quan',
      '   2.1. Góc nhìn sản phẩm',
      '   2.2. Chức năng sản phẩm',
      '   2.3. Đặc điểm người dùng',
      '   2.4. Ràng buộc',
      '   2.5. Giả định và phụ thuộc',
      '3. Yêu cầu chức năng',
      '   3.1. [Module/Feature 1]',
      '   3.2. [Module/Feature 2]',
      '   ...',
      '4. Yêu cầu phi chức năng',
      '   4.1. Yêu cầu hiệu năng',
      '   4.2. Yêu cầu bảo mật',
      '   4.3. Yêu cầu khả năng sử dụng',
      '   4.4. Yêu cầu tương thích',
      '5. Yêu cầu giao diện',
      '   5.1. Giao diện người dùng',
      '   5.2. Giao diện phần cứng',
      '   5.3. Giao diện phần mềm',
      '   5.4. Giao diện truyền thông',
      '6. Phụ lục',
      '   6.1. Use Case Diagrams',
      '   6.2. Data Dictionary'
    ],
    standard: 'IEEE 830-1998'
  },

  // Software Design Document (SDD)
  sdd: {
    name: 'Tài liệu thiết kế phần mềm (SDD)',
    sections: [
      '1. Giới thiệu',
      '   1.1. Mục đích',
      '   1.2. Phạm vi',
      '   1.3. Tài liệu tham khảo',
      '2. Thiết kế kiến trúc',
      '   2.1. Tổng quan kiến trúc',
      '   2.2. Component Diagram',
      '   2.3. Deployment Diagram',
      '3. Thiết kế chi tiết',
      '   3.1. Class Diagram',
      '   3.2. Sequence Diagrams',
      '   3.3. Activity Diagrams',
      '4. Thiết kế dữ liệu',
      '   4.1. Mô hình ER',
      '   4.2. Data Dictionary',
      '   4.3. Database Schema',
      '5. Thiết kế giao diện',
      '   5.1. Wireframes',
      '   5.2. UI Specifications',
      '6. Thiết kế API',
      '   6.1. API Endpoints',
      '   6.2. Request/Response Format',
      '7. Thiết kế bảo mật',
      '   7.1. Authentication',
      '   7.2. Authorization',
      '   7.3. Data Protection'
    ],
    standard: 'IEEE 1016-2009'
  },

  // Test Plan
  testPlan: {
    name: 'Kế hoạch kiểm thử (Test Plan)',
    sections: [
      '1. Giới thiệu',
      '   1.1. Mục đích',
      '   1.2. Phạm vi',
      '   1.3. Đối tượng',
      '2. Chiến lược kiểm thử',
      '   2.1. Phương pháp kiểm thử',
      '   2.2. Các loại kiểm thử',
      '   2.3. Tiêu chí bắt đầu/kết thúc',
      '3. Phạm vi kiểm thử',
      '   3.1. Chức năng được kiểm thử',
      '   3.2. Chức năng không kiểm thử',
      '4. Môi trường kiểm thử',
      '   4.1. Phần cứng',
      '   4.2. Phần mềm',
      '   4.3. Dữ liệu test',
      '5. Lịch trình',
      '   5.1. Timeline',
      '   5.2. Milestones',
      '6. Nguồn lực',
      '   6.1. Nhân sự',
      '   6.2. Công cụ',
      '7. Rủi ro và biện pháp',
      '8. Quy trình báo cáo lỗi',
      '9. Phê duyệt'
    ],
    standard: 'IEEE 829-2008'
  },

  // User Acceptance Test (UAT)
  uat: {
    name: 'Biên bản kiểm thử chấp nhận (UAT)',
    sections: [
      '1. Thông tin chung',
      '   - Tên dự án',
      '   - Phiên bản phần mềm',
      '   - Ngày thực hiện UAT',
      '   - Địa điểm',
      '2. Thành phần tham gia',
      '   - Bên phát triển',
      '   - Bên khách hàng',
      '3. Phạm vi UAT',
      '4. Kết quả kiểm thử',
      '   - Danh sách test cases',
      '   - Kết quả Pass/Fail',
      '   - Ghi chú',
      '5. Danh sách issues phát hiện',
      '   - Mức độ nghiêm trọng',
      '   - Mô tả',
      '   - Hướng xử lý',
      '6. Kết luận',
      '   - Đánh giá tổng thể',
      '   - Quyết định chấp nhận/không chấp nhận',
      '7. Chữ ký xác nhận',
      '   - Đại diện bên phát triển',
      '   - Đại diện khách hàng'
    ]
  },

  // Handover Record
  handover: {
    name: 'Biên bản bàn giao',
    sections: [
      '1. Thông tin chung',
      '   - Tên dự án/sản phẩm',
      '   - Số hợp đồng (nếu có)',
      '   - Ngày bàn giao',
      '2. Bên giao',
      '   - Tên công ty/đơn vị',
      '   - Đại diện',
      '   - Chức vụ',
      '3. Bên nhận',
      '   - Tên công ty/đơn vị',
      '   - Đại diện',
      '   - Chức vụ',
      '4. Nội dung bàn giao',
      '   4.1. Phần mềm',
      '      - Tên phần mềm',
      '      - Phiên bản',
      '      - Môi trường đã cài đặt',
      '   4.2. Mã nguồn (nếu có)',
      '      - Repository URL',
      '      - Quyền truy cập',
      '   4.3. Tài liệu',
      '      - Danh mục tài liệu kèm theo',
      '   4.4. License/Credentials',
      '      - Danh sách licenses',
      '      - Tài khoản quản trị',
      '5. Điều kiện bàn giao',
      '6. Cam kết bảo hành (nếu có)',
      '7. Chữ ký'
    ]
  },

  // Acceptance Record (Biên bản nghiệm thu)
  acceptance: {
    name: 'Biên bản nghiệm thu',
    sections: [
      '1. Căn cứ nghiệm thu',
      '   - Hợp đồng số',
      '   - Phụ lục (nếu có)',
      '   - Các văn bản liên quan',
      '2. Thông tin chung',
      '   - Tên dự án/sản phẩm',
      '   - Thời gian thực hiện',
      '   - Địa điểm nghiệm thu',
      '3. Thành phần tham gia',
      '   - Bên A (Khách hàng)',
      '   - Bên B (Nhà cung cấp)',
      '4. Nội dung nghiệm thu',
      '   4.1. Khối lượng công việc',
      '   4.2. Chất lượng sản phẩm',
      '   4.3. Tiến độ thực hiện',
      '5. Kết quả kiểm tra',
      '   - Các hạng mục đạt yêu cầu',
      '   - Các hạng mục chưa đạt (nếu có)',
      '6. Kết luận',
      '   - Đánh giá chung',
      '   - Quyết định nghiệm thu',
      '7. Kiến nghị (nếu có)',
      '8. Chữ ký',
      '   - Đại diện Bên A',
      '   - Đại diện Bên B'
    ]
  }
}

// ============================================
// QUALITY CRITERIA LIBRARY - Thư viện tiêu chí chất lượng
// ============================================

export const QUALITY_CRITERIA_LIBRARY = {
  requirements: [
    'Yêu cầu được định danh duy nhất (có ID)',
    'Yêu cầu có tiêu chí chấp nhận rõ ràng',
    'Yêu cầu có thể kiểm thử được',
    'Không có yêu cầu mâu thuẫn hoặc trùng lặp',
    'Yêu cầu được phân loại theo độ ưu tiên',
    'Tài liệu SRS được review và phê duyệt',
    'Ma trận truy vết (RTM) được cập nhật'
  ],
  design: [
    'Thiết kế đáp ứng 100% yêu cầu trong SRS',
    'Kiến trúc được review bởi senior architect',
    'Database design đạt chuẩn hóa 3NF',
    'API design tuân thủ RESTful conventions',
    'UI/UX prototype được khách hàng approve',
    'Security design được đánh giá',
    'Thiết kế có tính mở rộng (scalable)'
  ],
  coding: [
    'Code tuân thủ coding standards',
    'Unit test coverage >= 70%',
    'Code review trước khi merge',
    'Không có critical bugs từ static analysis',
    'Build thành công trên CI/CD',
    'Code được document đầy đủ',
    'Không hard-code sensitive data'
  ],
  testing: [
    'Test coverage >= 95% requirements',
    'Pass rate >= 95%',
    'Không còn bugs Critical/Blocker',
    'Performance đạt NFR requirements',
    'Security scan không có high vulnerabilities',
    'UAT được sign-off bởi khách hàng',
    'Regression testing hoàn thành'
  ],
  deployment: [
    'Deployment thành công trên production',
    'Smoke test pass sau deploy',
    'Monitoring và alerting hoạt động',
    'Backup và restore đã được test',
    'Rollback plan đã sẵn sàng',
    'Documentation được cập nhật',
    'Team đã được training'
  ],
  operation: [
    'Uptime >= 99.5%',
    'Response time < 2 seconds',
    'Support SLA được đáp ứng',
    'Security patches apply trong 48h',
    'Incident resolution time theo target',
    'User satisfaction >= 4/5',
    'Knowledge base cập nhật thường xuyên'
  ]
}

// ============================================
// EXPORT HELPER FUNCTIONS
// ============================================

/**
 * Lấy template của một công đoạn
 */
export function getStageTemplate(stageNumber: number): StageData | null {
  return STAGE_TEMPLATES[stageNumber] || null
}

/**
 * Lấy tất cả templates
 */
export function getAllStageTemplates(): Record<number, StageData> {
  return STAGE_TEMPLATES
}

/**
 * Lấy template sản phẩm đầu ra
 */
export function getDeliverableTemplate(templateKey: keyof typeof DELIVERABLE_TEMPLATES) {
  return DELIVERABLE_TEMPLATES[templateKey]
}

/**
 * Lấy tiêu chí chất lượng theo phase
 */
export function getQualityCriteria(phase: keyof typeof QUALITY_CRITERIA_LIBRARY): string[] {
  return QUALITY_CRITERIA_LIBRARY[phase] || []
}

/**
 * Lấy thuật ngữ pháp lý
 */
export function getLegalTerminology() {
  return LEGAL_TERMINOLOGY
}

/**
 * Lấy căn cứ pháp lý
 */
export function getLegalReferences() {
  return LEGAL_REFERENCES
}
