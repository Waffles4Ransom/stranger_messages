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
    return await res.json()
  }
}