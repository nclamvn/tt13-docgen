// lib/docgen/generator.ts

import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  AlignmentType,
  PageBreak,
  Header,
  Footer,
  PageNumber,
  ShadingType,
  ImageRun,
} from 'docx'
import type { DocumentData, StageData, ProjectData } from '@/types/document'

// TC Data Green Colors
const COLORS = {
  primary: '16A34A',      // Green-600
  primaryDark: '166534',  // Green-800
  primaryLight: 'DCFCE7', // Green-100
  text: '1E293B',         // Slate-800
  textLight: '64748B',    // Slate-500
  border: 'E2E8F0',       // Slate-200
  white: 'FFFFFF'
}

const STAGE_NAMES: Record<number, string> = {
  1: 'Xác định yêu cầu',
  2: 'Phân tích và thiết kế',
  3: 'Lập trình',
  4: 'Kiểm thử',
  5: 'Đóng gói',
  6: 'Cài đặt, bàn giao',
  7: 'Phát hành'
}

// Helper: Create border style
const border = { style: BorderStyle.SINGLE, size: 1, color: COLORS.border }
const borders = { top: border, bottom: border, left: border, right: border }

// Helper: Create table cell
function createCell(
  text: string,
  options: {
    bold?: boolean
    width?: number
    shade?: string
    align?: typeof AlignmentType[keyof typeof AlignmentType]
    color?: string
  } = {}
) {
  const { bold = false, width = 4680, shade, align = AlignmentType.LEFT, color = COLORS.text } = options

  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: shade ? { fill: shade, type: ShadingType.CLEAR } : undefined,
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    children: [
      new Paragraph({
        alignment: align,
        children: [
          new TextRun({ text, bold, font: 'Arial', size: 22, color })
        ]
      })
    ]
  })
}

// Generate Cover Page
function generateCoverPage(project: ProjectData): Paragraph[] {
  return [
    new Paragraph({ spacing: { after: 800 } }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({ text: '◆', font: 'Arial', size: 72, color: COLORS.primary })
      ]
    }),
    new Paragraph({ spacing: { after: 400 } }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: 'HỒ SƠ CHỨNG MINH QUY TRÌNH',
          font: 'Arial', size: 28, color: COLORS.textLight
        })
      ]
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: 'SẢN XUẤT PHẦN MỀM',
          font: 'Arial', size: 28, color: COLORS.textLight
        })
      ]
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 200 },
      children: [
        new TextRun({
          text: 'Theo Thông tư 13/2020/TT-BTTTT',
          font: 'Arial', size: 24, italics: true, color: COLORS.textLight
        })
      ]
    }),
    new Paragraph({ spacing: { after: 400 } }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: project.name,
          font: 'Arial', size: 48, bold: true, color: COLORS.text
        })
      ]
    }),
    new Paragraph({ spacing: { after: 200 } }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: `Khách hàng: ${project.clientName}`,
          font: 'Arial', size: 24, color: COLORS.primary
        })
      ]
    }),
    new Paragraph({ spacing: { after: 400 } }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: `Thời gian: ${project.startDate} - ${project.endDate}`,
          font: 'Arial', size: 22, color: COLORS.textLight
        })
      ]
    }),
    new Paragraph({ children: [new PageBreak()] })
  ]
}

// Generate Table of Contents
function generateTOC(stages: number[]): Paragraph[] {
  const items: Paragraph[] = [
    new Paragraph({
      spacing: { after: 300 },
      children: [
        new TextRun({
          text: 'MỤC LỤC',
          font: 'Arial', size: 32, bold: true, color: COLORS.text
        })
      ]
    })
  ]

  stages.forEach((stage, index) => {
    const isRequired = stage === 1 || stage === 2
    items.push(
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({
            text: `${index + 1}. Công đoạn ${stage}: ${STAGE_NAMES[stage]}`,
            font: 'Arial', size: 24, color: COLORS.text
          }),
          isRequired ? new TextRun({
            text: ' ★',
            font: 'Arial', size: 24, color: COLORS.primary
          }) : new TextRun({ text: '' })
        ]
      })
    )
  })

  items.push(new Paragraph({ children: [new PageBreak()] }))
  return items
}

// Generate Stage Section
function generateStageSection(
  stageNumber: number,
  stageData: StageData,
  images: string[] = []
): (Paragraph | Table)[] {
  const items: (Paragraph | Table)[] = []
  const isRequired = stageNumber === 1 || stageNumber === 2

  // Stage Title
  items.push(
    new Paragraph({
      spacing: { before: 200, after: 300 },
      shading: { fill: COLORS.primaryLight, type: ShadingType.CLEAR },
      children: [
        new TextRun({
          text: `  CÔNG ĐOẠN ${stageNumber}: ${STAGE_NAMES[stageNumber].toUpperCase()}`,
          font: 'Arial', size: 28, bold: true, color: COLORS.primaryDark
        }),
        isRequired ? new TextRun({
          text: '  ★ BẮT BUỘC',
          font: 'Arial', size: 20, color: COLORS.primary
        }) : new TextRun({ text: '' })
      ]
    })
  )

  // Objective
  items.push(
    new Paragraph({
      spacing: { after: 200 },
      children: [
        new TextRun({ text: 'Mục tiêu: ', font: 'Arial', size: 22, bold: true, color: COLORS.text }),
        new TextRun({ text: stageData.objective, font: 'Arial', size: 22, color: COLORS.text })
      ]
    })
  )

  // Activities Table
  items.push(
    new Paragraph({
      spacing: { before: 200, after: 100 },
      children: [
        new TextRun({ text: 'Các hoạt động thực hiện:', font: 'Arial', size: 22, bold: true, color: COLORS.text })
      ]
    })
  )

  const activityRows = [
    new TableRow({
      children: [
        createCell('STT', { bold: true, width: 800, shade: COLORS.primaryLight, align: AlignmentType.CENTER }),
        createCell('Hoạt động', { bold: true, width: 3000, shade: COLORS.primaryLight }),
        createCell('Mô tả', { bold: true, width: 4000, shade: COLORS.primaryLight }),
        createCell('Thời gian', { bold: true, width: 1500, shade: COLORS.primaryLight, align: AlignmentType.CENTER })
      ]
    }),
    ...stageData.activities.map((activity, index) =>
      new TableRow({
        children: [
          createCell(String(index + 1), { width: 800, align: AlignmentType.CENTER }),
          createCell(activity.name, { width: 3000 }),
          createCell(activity.description, { width: 4000 }),
          createCell(activity.duration, { width: 1500, align: AlignmentType.CENTER })
        ]
      })
    )
  ]

  items.push(
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: activityRows
    })
  )

  // Deliverables
  items.push(
    new Paragraph({
      spacing: { before: 300, after: 100 },
      children: [
        new TextRun({ text: 'Sản phẩm đầu ra:', font: 'Arial', size: 22, bold: true, color: COLORS.text })
      ]
    })
  )

  stageData.deliverables.forEach((deliverable, index) => {
    items.push(
      new Paragraph({
        spacing: { after: 80 },
        indent: { left: 400 },
        children: [
          new TextRun({ text: `${index + 1}. ${deliverable.name}`, font: 'Arial', size: 22, bold: true, color: COLORS.text }),
          new TextRun({ text: ` - ${deliverable.description}`, font: 'Arial', size: 22, color: COLORS.textLight })
        ]
      })
    )
  })

  // Tools
  if (stageData.tools.length > 0) {
    items.push(
      new Paragraph({
        spacing: { before: 200, after: 100 },
        children: [
          new TextRun({ text: 'Công cụ sử dụng: ', font: 'Arial', size: 22, bold: true, color: COLORS.text }),
          new TextRun({ text: stageData.tools.join(', '), font: 'Arial', size: 22, color: COLORS.text })
        ]
      })
    )
  }

  // Participants Table
  items.push(
    new Paragraph({
      spacing: { before: 200, after: 100 },
      children: [
        new TextRun({ text: 'Nhân sự tham gia:', font: 'Arial', size: 22, bold: true, color: COLORS.text })
      ]
    })
  )

  const participantRows = [
    new TableRow({
      children: [
        createCell('Vai trò', { bold: true, width: 3000, shade: COLORS.primaryLight }),
        createCell('Trách nhiệm', { bold: true, width: 5000, shade: COLORS.primaryLight }),
        createCell('Họ tên', { bold: true, width: 2000, shade: COLORS.primaryLight })
      ]
    }),
    ...stageData.participants.map(p =>
      new TableRow({
        children: [
          createCell(p.role, { width: 3000 }),
          createCell(p.responsibility, { width: 5000 }),
          createCell('[Điền tên]', { width: 2000, color: COLORS.textLight })
        ]
      })
    )
  ]

  items.push(
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: participantRows
    })
  )

  // Images
  if (images.length > 0) {
    items.push(
      new Paragraph({
        spacing: { before: 300, after: 100 },
        children: [
          new TextRun({ text: 'Hình ảnh minh họa:', font: 'Arial', size: 22, bold: true, color: COLORS.text })
        ]
      })
    )

    images.forEach((dataUrl, index) => {
      try {
        const base64Data = dataUrl.split(',')[1]
        if (base64Data) {
          const imageBuffer = Buffer.from(base64Data, 'base64')

          items.push(
            new Paragraph({
              alignment: AlignmentType.CENTER,
              spacing: { before: 200, after: 100 },
              children: [
                new ImageRun({
                  data: imageBuffer,
                  transformation: { width: 500, height: 300 }
                })
              ]
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              spacing: { after: 200 },
              children: [
                new TextRun({
                  text: `Hình ${stageNumber}.${index + 1}`,
                  font: 'Arial', size: 20, italics: true, color: COLORS.textLight
                })
              ]
            })
          )
        }
      } catch (e) {
        console.error('Error adding image:', e)
      }
    })
  }

  // Signature block
  items.push(
    new Paragraph({
      spacing: { before: 400 },
      children: [
        new TextRun({ text: 'Xác nhận hoàn thành công đoạn:', font: 'Arial', size: 22, bold: true, color: COLORS.text })
      ]
    })
  )

  const signatureTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [
          createCell('Người thực hiện', { bold: true, width: 4800, shade: COLORS.primaryLight, align: AlignmentType.CENTER }),
          createCell('Người kiểm tra', { bold: true, width: 4800, shade: COLORS.primaryLight, align: AlignmentType.CENTER })
        ]
      }),
      new TableRow({
        children: [
          createCell('\n\n[Ký tên]\n\nNgày: ___/___/______', { width: 4800, align: AlignmentType.CENTER }),
          createCell('\n\n[Ký tên]\n\nNgày: ___/___/______', { width: 4800, align: AlignmentType.CENTER })
        ]
      })
    ]
  })

  items.push(signatureTable)
  items.push(new Paragraph({ children: [new PageBreak()] }))

  return items
}

// Generate Final Approval Page
function generateApprovalPage(project: ProjectData, stages: number[]): (Paragraph | Table)[] {
  return [
    new Paragraph({
      spacing: { after: 300 },
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: 'BIÊN BẢN NGHIỆM THU',
          font: 'Arial', size: 32, bold: true, color: COLORS.primaryDark
        })
      ]
    }),
    new Paragraph({
      spacing: { after: 200 },
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: 'Hồ sơ chứng minh quy trình sản xuất phần mềm',
          font: 'Arial', size: 24, color: COLORS.text
        })
      ]
    }),
    new Paragraph({ spacing: { after: 200 } }),
    new Paragraph({
      children: [
        new TextRun({ text: 'Tên sản phẩm: ', font: 'Arial', size: 22, bold: true, color: COLORS.text }),
        new TextRun({ text: project.name, font: 'Arial', size: 22, color: COLORS.text })
      ]
    }),
    new Paragraph({
      children: [
        new TextRun({ text: 'Khách hàng: ', font: 'Arial', size: 22, bold: true, color: COLORS.text }),
        new TextRun({ text: project.clientName, font: 'Arial', size: 22, color: COLORS.text })
      ]
    }),
    new Paragraph({
      children: [
        new TextRun({ text: 'Số công đoạn hoàn thành: ', font: 'Arial', size: 22, bold: true, color: COLORS.text }),
        new TextRun({ text: `${stages.length}/7`, font: 'Arial', size: 22, color: COLORS.text })
      ]
    }),
    new Paragraph({ spacing: { after: 200 } }),
    new Paragraph({
      shading: { fill: COLORS.primaryLight, type: ShadingType.CLEAR },
      spacing: { after: 200 },
      children: [
        new TextRun({
          text: '  ✓ Hồ sơ đáp ứng yêu cầu theo Thông tư 13/2020/TT-BTTTT',
          font: 'Arial', size: 22, bold: true, color: COLORS.primaryDark
        })
      ]
    }),
    new Paragraph({ spacing: { after: 400 } }),
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          children: [
            createCell('ĐẠI DIỆN BÊN A', { bold: true, width: 4800, shade: COLORS.primaryLight, align: AlignmentType.CENTER }),
            createCell('ĐẠI DIỆN BÊN B', { bold: true, width: 4800, shade: COLORS.primaryLight, align: AlignmentType.CENTER })
          ]
        }),
        new TableRow({
          children: [
            createCell('(Khách hàng)', { width: 4800, align: AlignmentType.CENTER, color: COLORS.textLight }),
            createCell('(Đơn vị phát triển)', { width: 4800, align: AlignmentType.CENTER, color: COLORS.textLight })
          ]
        }),
        new TableRow({
          children: [
            createCell('\n\n\n[Ký tên, đóng dấu]\n\nHọ tên: _______________\n\nChức vụ: _______________', { width: 4800, align: AlignmentType.CENTER }),
            createCell('\n\n\n[Ký tên, đóng dấu]\n\nHọ tên: _______________\n\nChức vụ: _______________', { width: 4800, align: AlignmentType.CENTER })
          ]
        })
      ]
    }),
    new Paragraph({ spacing: { before: 300 } }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: `Ngày ký: _____ / _____ / ${new Date().getFullYear()}`,
          font: 'Arial', size: 22, color: COLORS.textLight
        })
      ]
    })
  ]
}

// Main Generate Function
export async function generateDocument(data: DocumentData): Promise<Buffer> {
  const { project, stages, images } = data
  const stageNumbers = Object.keys(stages).map(Number).sort((a, b) => a - b)

  const children: (Paragraph | Table)[] = []

  // Cover Page
  children.push(...generateCoverPage(project))

  // Table of Contents
  children.push(...generateTOC(stageNumbers))

  // Each Stage
  for (const stageNum of stageNumbers) {
    const stageData = stages[stageNum]
    const stageImages = images.get(stageNum) || []
    children.push(...generateStageSection(stageNum, stageData, stageImages))
  }

  // Final Approval
  children.push(...generateApprovalPage(project, stageNumbers))

  // Create Document
  const doc = new Document({
    styles: {
      default: {
        document: {
          run: { font: 'Arial', size: 22 }
        }
      }
    },
    sections: [{
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1200, right: 1200, bottom: 1200, left: 1200 }
        }
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: 'Hồ sơ TT13/2020 - ',
                  font: 'Arial', size: 18, color: COLORS.textLight
                }),
                new TextRun({
                  text: project.name,
                  font: 'Arial', size: 18, bold: true, color: COLORS.primary
                })
              ]
            })
          ]
        })
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Trang ', font: 'Arial', size: 18, color: COLORS.textLight }),
                new TextRun({ children: [PageNumber.CURRENT], font: 'Arial', size: 18, color: COLORS.text }),
                new TextRun({ text: ' / ', font: 'Arial', size: 18, color: COLORS.textLight }),
                new TextRun({ children: [PageNumber.TOTAL_PAGES], font: 'Arial', size: 18, color: COLORS.text })
              ]
            })
          ]
        })
      },
      children
    }]
  })

  return await Packer.toBuffer(doc)
}
