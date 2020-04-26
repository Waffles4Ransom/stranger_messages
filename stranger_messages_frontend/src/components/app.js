class App {
  constructor() {
    this.messages = []
    this.messagesAdapter = new messagesAdapter()
    this.usersAdapter = new usersAdapter()
    this.fetchandLoadMessages()
    this.initBindingsandEventListeners()
    this.currentUser = []
    this.letterList = []
  }

  initBindingsandEventListeners() {
    this.allMessages = document.querySelector('#messages_ul')
    this.mform = document.querySelector('#message_form')
    this.uform = document.querySelector('#user_form') 
    this.userInput = document.querySelector('#username')
    this.welcome = document.querySelector('#welcome_user')
    this.currentMsg = document.querySelector('#current_message')

    this.uform.addEventListener('submit', this.createUser.bind(this))
    this.mform.addEventListener('submit', this.createMessage.bind(this))
    this.currentMsg.addEventListener('click', this.messageActions.bind(this))
    this.allMessages.addEventListener('click', this.queUpMessage.bind(this))
  }

  createUser(e) {
    e.preventDefault()
    let inputVal = this.userInput.value
    this.usersAdapter.createUser({
      user: {
        username: inputVal
      }
    }).then( user => {
      this.currentUser = new User(user)
      this.renderUser()
    })
  }

  createMessage(e) {
    e.preventDefault()
    this.messagesAdapter.createMessage({
      message: {
        name: e.target[0].value,
        content: e.target[1].value ,
        user_id: this.currentUser.id
      }
    }).then(msg => {
      e.target[0].value = ''
      e.target[1].value = ''
      let newMsg = new Message(msg)
      this.messages.push(newMsg)
      this.renderMessages()
      this.currentMsg.hidden = false
      this.currentMsg.innerHTML = newMsg.currentHTML
    })
  }

  messageActions(e) {
    let rbutton = document.querySelector('#reveal')
    let pbutton = document.querySelector('#play')
    let showMsg = document.querySelector('#reveal_msg')
    if (e.target === rbutton) {
      showMsg.hidden === true ? showMsg.hidden = false : showMsg.hidden = true
      rbutton.innerText === "Reveal Message" ? rbutton.innerText = "Hide Message" : rbutton.innerText = "Reveal Message"
    } 
    if (e.target === pbutton) {
      let clkdMsg = this.messages.find(msg => msg.id == e.target.dataset.id)
      this.letterList = clkdMsg.content.split('').filter(l => l !== " ")
      // console.log(this.letterList)
      this.playMessage()
    }
  }

  playMessage() {
    console.log(this.letterList)
  }

  queUpMessage(e) {
    if (e.target.tagName.toLowerCase() === "li") {
      let clkdMsg = this.messages.find(msg => msg.id == e.target.dataset.id)
      this.currentMsg.innerHTML = clkdMsg.currentHTML
    }
  }

  fetchandLoadMessages() {
    this.messagesAdapter.getMessages().then(msgs => { 
      this.messages = msgs.map(msg => new Message(msg))
      console.log(this.messages)
      this.renderMessages()
    })
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
}