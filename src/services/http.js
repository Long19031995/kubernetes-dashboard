export default {
  baseUrl: 'https://pikalongstudio.com',

  async request (method, url, data) {
    const apiUrl = this.baseUrl + url
    const option = {
      method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
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