import axios from 'axios'
import { API_TOKEN } from 'react-native-dotenv'
export class Data {
  api (path, method = 'GET', body = null, requiresAuth = true) {
    const url = `https://api.paperquotes.com/apiv1/${path}`
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }
    if (requiresAuth) {
      const token = API_TOKEN
      options.headers.authorization = `Token ${token}`
    }
    if (body !== null) {
      options.data = JSON.stringify(body)
    }

    return axios(url, options)
  }

  async getRandomQuote () {
    const res = await this.api('quotes/?tags=random')
    if (res.status === 200) {
      return res.data
    } else if (res.status >= 400 && res.status <= 500) {
      return res.error
    }
  }

  async getHappyQuote () {
    const res = await this.api('quotes/?tags=happy')
    if (res.status === 200) {
      return res.data
    } else if (res.status >= 400 && res.status <= 500) {
      return res.error
    }
  }

  async getSadQuote () {
    const res = await this.api('quotes/?tags=love')
    if (res.status === 200) {
      return res.data
    } else if (res.status >= 400 && res.status <= 500) {
      return res.error
    }
  }

  async getUpbeatQuote () {
    const res = await this.api('quotes/?tags=upbeat')
    if (res.status === 200) {
      return res.data
    } else if (res.status >= 400 && res.status <= 500) {
      return res.error
    }
  }

  async getMadQuote () {
    const res = await this.api('quotes/?tags=calm')
    if (res.status === 200) {
      return res.data
    } else if (res.status >= 400 && res.status <= 500) {
      return res.error
    }
  }
}
