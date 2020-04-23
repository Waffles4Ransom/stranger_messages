class App {
  constructor() {
    this.messages = []
    this.messagesAdapter = new messagesAdapter()
    this.fetchandLoadMessages()
    this.initBindingsandEventListeners()
  }

  initBindingsandEventListeners() {
    this.allMessages = document.querySelector('#messages_ul')
    this.mform = document.querySelector('#message_form')
    this.uform = document.querySelector('#user_form') 

    this.uform.addEventListener('submit', this.createUser)
  }

  createUser(e) {
    e.preventDefault()
    console.log("user form listening")
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
}