class usersAdapter {
  constructor(){
    this.baseURL = 'http://localhost:3000/users'
  }

  async createUser(params) {
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

  async checkStatus(res) {
    if (res.status > 299 || res.status < 200) {
      const eMsg = await res.json()
      throw new Error(eMsg.errors)
    }
  }

}