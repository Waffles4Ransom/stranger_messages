class App {
  constructor() {
    this.messages = []
    this.messagesAdapter = new messagesAdapter()
    this.fetchandLoadMessages()
  }

  fetchandLoadMessages() {
    this.messagesAdapter.getMessages().then(msgs => {
      // console.log(msgs)
      // msgs.forEach(msg => { this.messages.push(new Message(msg))})
      // or 
       this.messages = msgs.map(msg => new Message(msg))
       console.log(this.messages)
      // render messages 
    })
  }
}