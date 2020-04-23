class App {
  constructor() {
    this.messages = []
    this.messagesAdapter = new messagesAdapter()
    this.usersAdapter = new usersAdapter()
    this.fetchandLoadMessages()
    this.initBindingsandEventListeners()
    this.currentUser = ''
  }

  initBindingsandEventListeners() {
    this.allMessages = document.querySelector('#messages_ul')
    this.mform = document.querySelector('#message_form')
    this.uform = document.querySelector('#user_form') 

    this.uform.addEventListener('submit', this.createUser)
  }

  createUser(e) {
    e.preventDefault()
    // console.log(e.target[0].value)
    let value = e.target[0].value
    this.usersAdapter.createUser(value).then()
    // goals:
    // render user name to with welcome message
    // set current user 
    // hide user form and show message form
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