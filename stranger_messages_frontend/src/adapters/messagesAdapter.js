class messagesAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/messages"
  }

  async getMessages() {
    const res = await fetch(this.baseURL)
    return await res.json()
  }

  async createMessage(params) {
    const res = await fetch(this.baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    await this.checkStatus(res)
    return await res.json()
  }

  async deleteMessage(id) {
    const res = await fetch(`${this.baseURL}/${id}`, {
      method: 'DELETE'
    })
  }

  async checkStatus(res) {
    if (res.status > 299 || res.status < 200) {
      const eMsg = await res.json()
      throw new Error(eMsg.errors)
    }
  }
}