import type { AppData } from './types'
import { emptyData } from './utils'

const KEY = 'pasteleria-costos-v1'

export function loadData(): AppData {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) as AppData : emptyData()
  } catch {
    return emptyData()
  }
}

export function saveData(data: AppData) {
  localStorage.setItem(KEY, JSON.stringify(data))
}
