export default {
  baseUrl: 'https://api.k8s.goquo.com',

  async request (method, url, data) {
    const apiUrl = this.baseUrl + url
    const option = {
      method: method,
      headers: {
        authorization: 'Basic ' + btoa('admin:NxsFb1I3k4aEbm0zIbmp6n87MO2MdvuR')
      }
    }
    const reponse = await fetch(apiUrl, option)

    return await reponse.json()
  },

  get (url) {
    return this.request('get', url)
  },

  post (url, params) {
    return this.request('post', url, params)
  }
}