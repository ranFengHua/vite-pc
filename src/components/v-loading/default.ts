interface Props {
  message: string
  toast_type?: 'success' | 'alert' | 'warning' | 'error'
  duration?: number
  hidden(): void
}
export type { Props }
