import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

export function formatDateTime(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

export function extractStageFromFilename(filename: string): number | null {
  // Match patterns like: cd1-xxx.png, cd2_xxx.jpg, congdoan3-xxx.png
  const match = filename.match(/(?:cd|congdoan)(\d)/i)
  return match ? parseInt(match[1]) : null
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}

export const STAGE_NAMES: Record<number, string> = {
  1: 'Xác định yêu cầu',
  2: 'Phân tích và thiết kế',
  3: 'Lập trình',
  4: 'Kiểm thử',
  5: 'Đóng gói',
  6: 'Cài đặt, bàn giao',
  7: 'Phát hành',
}

export const PROJECT_STATUS_LABELS: Record<string, string> = {
  DRAFT: 'Nháp',
  UPLOADING: 'Đang tải lên',
  ANALYZING: 'Đang phân tích',
  CONFIGURING: 'Đang cấu hình',
  GENERATING: 'Đang tạo',
  COMPLETED: 'Hoàn thành',
  ERROR: 'Lỗi',
}

export const PROJECT_STATUS_COLORS: Record<string, string> = {
  DRAFT: 'bg-slate-100 text-slate-700',
  UPLOADING: 'bg-blue-100 text-blue-700',
  ANALYZING: 'bg-purple-100 text-purple-700',
  CONFIGURING: 'bg-yellow-100 text-yellow-700',
  GENERATING: 'bg-primary-100 text-primary-700',
  COMPLETED: 'bg-green-100 text-green-700',
  ERROR: 'bg-red-100 text-red-700',
}
