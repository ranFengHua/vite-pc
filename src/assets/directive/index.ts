import { dealNumber } from '../utils'
export const number = {
  mounted(el: any, binding: any) {
    let value = 0
    const num = binding.value.num || 0
    if (binding.value) {
      const timer = setInterval(() => {
        value = value + num
        if (value >= binding.value.value) {
          el.innerHTML = dealNumber(binding.value.value)
          clearInterval(timer)
        } else {
          el.innerHTML = dealNumber(value)
        }
      }, 10)
    }
  }
}
