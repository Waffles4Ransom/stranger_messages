class App {
  constructor() {
    this.messages = []
    this.messagesAdapter = new messagesAdapter()
    this.usersAdapter = new usersAdapter()
    this.fetchandLoadMessages()
    this.initBindingsandEventListeners()
    this.currentUser = []
    this.letterList = []
    this.index = 0
  }

  initBindingsandEventListeners() {
    this.allMessages = document.querySelector('#messages_ul')
    this.mform = document.querySelector('#message_form')
    this.uform = document.querySelector('#user_form') 
    this.userInput = document.querySelector('#username')
    this.welcome = document.querySelector('#welcome_user')
    this.currentMsg = document.querySelector('#current_message')
    this.bulbs = Array.from(document.querySelectorAll('div.lightbulb'))
    this.wall = document.querySelector('#message_wall')
    this.sort = document.querySelector('#sort')

    this.uform.addEventListener('submit', this.createUser.bind(this))
    this.mform.addEventListener('submit', this.createMessage.bind(this))
    this.currentMsg.addEventListener('click', this.messageActions.bind(this))
    this.allMessages.addEventListener('click', this.queUpMessage.bind(this))
    this.wall.addEventListener('animationend', this.playMessage.bind(this))
    this.sort.addEventListener('click', this.handleSort.bind(this))
  }

  async createUser(e) {
    try {
    e.preventDefault()
    const userObj =  await this.usersAdapter.createUser({
      user: { username: this.userInput.value}
    })
      this.currentUser = new User(userObj)
      return this.renderUser()
    }catch(error) {
      let errMsg = document.createElement('p')
      errMsg.innerText = error
      errMsg.setAttribute('class', 'error')
      this.uform.prepend(errMsg)
      setTimeout(() => errMsg.remove(), 4000)
    }
  }

  async createMessage(e) {
    try{ 
    e.preventDefault()
    const msgObj = await this.messagesAdapter.createMessage({
      message: {
        name: e.target[0].value,
        content: e.target[1].value ,
        user_id: this.currentUser.id
      }
    })
      e.target[0].value = ''
      e.target[1].value = ''
      let newMsg = new Message(msgObj)
      this.messages.push(newMsg)
      this.renderMessages()
      this.currentMsg.hidden = false
      this.currentMsg.innerHTML = newMsg.currentHTML
      let dltBtn = newMsg.deleteBtn
      this.currentMsg.innerHTML += dltBtn
      let success = document.createElement('p')
      success.innerText = "Message loaded below"
      this.mform.prepend(success)
      setTimeout(() => success.remove(), 3000)
    }catch(error) {
      let errMsg = document.createElement('p')
      errMsg.innerText = error
      errMsg.setAttribute('class', 'error')
      this.mform.prepend(errMsg)
      setTimeout(() => errMsg.remove(), 3000)
    }
  }

  messageActions(e) {
    this.rbutton = document.querySelector('#reveal')
    this.pbutton = document.querySelector('#play')
    this.dbutton = document.querySelector('#delete')
    let showMsg = document.querySelector('#reveal_msg')
    if (e.target === this.rbutton) {
      showMsg.hidden === true ? showMsg.hidden = false : showMsg.hidden = true
      this.rbutton.innerText = (this.rbutton.innerText === "Reveal Message") ?  "Hide Message" :  "Reveal Message"
    } 
    if (e.target === this.pbutton) {
      let clkdMsg = this.messages.find(msg => msg.id == e.target.dataset.id)
      this.letterList = clkdMsg.content.toLowerCase().split('').filter(l => l !== " ")
      this.playMessage()
      this.pbutton.disabled = true
    }
    if (e.target === this.dbutton) {
      const msgID = e.target.dataset.id
      this.messagesAdapter.deleteMessage(msgID)
      this.currentMsg.innerHTML = ' '
      this.messages = this.messages.filter(m => m.id !== parseInt(msgID))
      this.renderMessages()
    }
  }

  playMessage() {
    setTimeout(() => {
      console.log(this.letterList[this.index])
      if (this.index > (this.letterList.length - 1)) {
        console.log("done")
        this.pbutton.disabled = false
        return this.index = 0
      }
      let bulb = this.bulbs.find(b => b.dataset.id === this.letterList[this.index])
      let color = this.findColor(bulb.dataset.id)
      bulb.classList.add(color)
      bulb.addEventListener('animationend', () => {
        bulb.classList.remove(color)
      })
      this.index++
    }, 0)
  }

  findColor(bulb) {
    let color = ""
    switch( bulb ) {
      case "c": case "j": case "o": case "v": case "y":
        color = 'p-lit'
        break
      case "f": case "m": case "t": case "x": 
        color = 'y-lit'
        break
      case "b": case "e": case "k": case "u": 
        color = 'b-lit'
        break
      case "d": case "h": case "i": case "l": case "p": case "r": case "w":
        color = 'g-lit'
        break
      case "g": case "n": case "z":
        color = 'r-lit'
        break
      case "a": case "s":
        color = "lit"
    } 
    return color 
  }

  queUpMessage(e) {
    if (e.target.tagName.toLowerCase() === "li") {
      this.clkdMsg = this.messages.find(msg => msg.id == e.target.dataset.id)
      this.currentMsg.innerHTML = this.clkdMsg.currentHTML
      if (this.currentUser.id === this.clkdMsg.user_id) {
        let dltBtn = this.clkdMsg.deleteBtn
        this.currentMsg.innerHTML += dltBtn
      }
    }
  }

  async fetchandLoadMessages() {
    const msgs = await this.messagesAdapter.getMessages() 
    this.messages = msgs.map(msg => new Message(msg))
    this.renderMessages()
  }

  renderMessages() {
    this.allMessages.innerHTML = this.messages.map(msg => msg.html).join('')
  }

  renderUser() {
    this.uform.hidden = true
    this.welcome.hidden = false
    this.welcome.innerHTML = `Welcome ${this.currentUser.username}`
    this.mform.hidden = false
  }

  handleSort() {
    const sorted = [...this.messages].sort((a,b) => a.content.length - b.content.length)
    this.allMessages.innerHTML = sorted.map(msg => msg.html).join('')
  }
}