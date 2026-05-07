import { VALIDATION_PATTERNS } from '~/config/api'

export function validateCodename(codename: string): boolean {
  if (!codename || typeof codename !== 'string') {
    return false
  }
  
  const sanitized = codename.toLowerCase().trim()
  
  if (sanitized.length === 0 || sanitized.length > 50) {
    return false
  }
  
  if (!VALIDATION_PATTERNS.CODENAME.test(sanitized)) {
    return false
  }
  
  const dangerousPatterns = ['..', '/', '\\', '\x00']
  if (dangerousPatterns.some(pattern => sanitized.includes(pattern))) {
    return false
  }
  
  return true
}

export function validateWeekNumber(week: string): boolean {
  if (!week || typeof week !== 'string') {
    return false
  }
  
  const sanitized = week.trim()
  
  if (!VALIDATION_PATTERNS.WEEK_NUMBER.test(sanitized)) {
    return false
  }
  
  const weekNum = parseInt(sanitized, 10)
  if (isNaN(weekNum) || weekNum < 1 || weekNum > 999) {
    return false
  }
  
  return true
}

export function sanitizeString(input: string): string {
  return input.toLowerCase().trim()
}
