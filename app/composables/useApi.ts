import { API_CONFIG } from '~/config/api'

interface FetchOptions {
  timeout?: number
}

export function useApi() {
  const fetchData = async <T>(
    endpoint: string,
    options: FetchOptions = {}
  ): Promise<{ data: T | null; error: Error | null }> => {
    const { timeout = API_CONFIG.TIMEOUT } = options
    
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), timeout)
      
      const response = await fetch(endpoint, {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      clearTimeout(timeoutId)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      return { data, error: null }
    } catch (error) {
      console.error('API fetch error:', error)
      return { 
        data: null, 
        error: error instanceof Error ? error : new Error('Unknown error') 
      }
    }
  }
  
  const buildUrl = (path: string): string => {
    return `${API_CONFIG.BASE_URL}${path}`
  }
  
  const buildDeviceUrl = (codename: string): string => {
    return buildUrl(`/devices/${codename}.json`)
  }
  
  const buildWeeklyUrl = (week: string): string => {
    return buildUrl(`/weekly/week-${week}-cn.json`)
  }
  
  return {
    fetchData,
    buildUrl,
    buildDeviceUrl,
    buildWeeklyUrl
  }
}
