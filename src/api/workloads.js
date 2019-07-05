import http from '@/service/http'

export default {
  async getPods () {
    return await http.get('/api/v1/pods')
  }
}