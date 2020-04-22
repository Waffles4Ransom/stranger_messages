class messagesAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/messages"
  }

  async getMessages() {
    const res = await fetch(this.baseURL)
    return await res.json()
  }
}