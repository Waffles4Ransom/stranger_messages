class usersAdapter {
  constructor(){
    this.baseURL = 'http://localhost:3000/users'
  }

  async createUser(value) {
    const user = {
      username: value
    }
    const res = await fetch(this.baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ value })
    })
    return await res.json()
  }

}