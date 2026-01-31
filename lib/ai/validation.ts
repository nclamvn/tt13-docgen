// lib/ai/validation.ts

import { z } from 'zod'

// ============================================
// Stage Data Schemas (for generate-stage API)
// ============================================

export const ActivitySchema = z.object({
  name: z.string().min(1, 'Activity name is required'),
  description: z.string().min(10, 'Activity description must be at least 10 characters'),
  duration: z.string().min(1, 'Duration is required'),
  responsible: z.string().min(1, 'Responsible role is required')
})

export const DeliverableSchema = z.object({
  name: z.string().min(1, 'Deliverable name is required'),
  description: z.string().min(10, 'Deliverable description must be at least 10 characters'),
  format: z.string().min(1, 'Format is required')
})

export const ParticipantSchema = z.object({
  role: z.string().min(1, 'Role is required'),
  responsibility: z.string().min(1, 'Responsibility is required')
})

export const StageDataSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  objective: z.string().min(20, 'Objective must be at least 20 characters'),
  activities: z.array(ActivitySchema).min(2, 'At least 2 activities required'),
  deliverables: z.array(DeliverableSchema).min(1, 'At least 1 deliverable required'),
  tools: z.array(z.string()).min(1, 'At least 1 tool required'),
  participants: z.array(ParticipantSchema).min(1, 'At least 1 participant required'),
  qualityCriteria: z.array(z.string()).min(2, 'At least 2 quality criteria required'),
  notes: z.string().optional()
})

export type StageData = z.infer<typeof StageDataSchema>
export type Activity = z.infer<typeof ActivitySchema>
export type Deliverable = z.infer<typeof DeliverableSchema>
export type Participant = z.infer<typeof ParticipantSchema>

// ============================================
// Analyze Data Schemas (for analyze API)
// ============================================

export const FeatureSchema = z.object({
  name: z.string().min(1, 'Feature name is required'),
  description: z.string().min(1, 'Feature description is required')
})

export const AnalyzeResultSchema = z.object({
  projectName: z.string().min(1, 'Project name is required'),
  clientName: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  startDate: z.string().nullable().optional(),
  endDate: z.string().nullable().optional(),
  technologies: z.array(z.string()).optional().default([]),
  features: z.array(FeatureSchema).optional().default([]),
  teamSize: z.number().nullable().optional(),
  confidence: z.number().min(0).max(1).optional().default(0.5)
})

export type AnalyzeResult = z.infer<typeof AnalyzeResultSchema>
export type Feature = z.infer<typeof FeatureSchema>

// ============================================
// Utility Functions
// ============================================

/**
 * Safely parse JSON from AI response text
 * Handles markdown code blocks and extracts first valid JSON object
 */
export function extractJSON(text: string): unknown {
  // Remove markdown code blocks if present
  let cleaned = text
    .replace(/```json\s*/gi, '')
    .replace(/```\s*/g, '')
    .trim()

  // Try to find JSON object
  const jsonMatch = cleaned.match(/\{[\s\S]*\}/)
  if (!jsonMatch) {
    throw new Error('No JSON object found in response')
  }

  try {
    return JSON.parse(jsonMatch[0])
  } catch (error) {
    throw new Error(`Failed to parse JSON: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Validate and parse stage data from AI response
 */
export function parseStageData(text: string): StageData {
  const json = extractJSON(text)
  const result = StageDataSchema.safeParse(json)

  if (!result.success) {
    const errors = result.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')
    throw new Error(`Invalid stage data: ${errors}`)
  }

  return result.data
}

/**
 * Validate and parse analyze result from AI response
 */
export function parseAnalyzeResult(text: string): AnalyzeResult {
  const json = extractJSON(text)
  const result = AnalyzeResultSchema.safeParse(json)

  if (!result.success) {
    const errors = result.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')
    throw new Error(`Invalid analyze result: ${errors}`)
  }

  return result.data
}
