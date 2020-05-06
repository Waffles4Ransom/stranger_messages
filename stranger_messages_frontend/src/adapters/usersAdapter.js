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
    if (res.ok) {
      return await res.json()
    } else {
      const eMsg = await res.json()
      throw new Error(eMsg.errors)
    }
  }

}