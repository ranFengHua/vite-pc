import request from '@/axios/service'
//例子
export function test(data) {
  return request.post('/', data)
}
