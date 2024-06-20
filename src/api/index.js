import request from '@/axios/service'
export function getStatisticsBase(data) {
  return request.post('/user/login', data)
}
export function getDeliveryTradeTrend(data) {
  return request.post('/user/login', data)
}
export function getMaterialTypeRatio(data) {
  return request.post('/user/login', data)
}
export function getBiCirculate(data) {
  return request.post('/user/login', data)
}
export function getAdverseEventTrend(data) {
  return request.post('/user/login', data)
}
export function getSupplierCertificate(data) {
  return request.post('/user/login', data)
}
export function getExpireCertificate(data) {
  return request.post('/user/login', data)
}
