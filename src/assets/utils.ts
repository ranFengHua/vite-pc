import { getCurrentInstance } from 'vue'
export function dealNumber(num: any) {
  if (num < 1000) {
    return num
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
export function globalProperties() {
  const internalInstance = getCurrentInstance()
  return internalInstance?.appContext?.config?.globalProperties
}
