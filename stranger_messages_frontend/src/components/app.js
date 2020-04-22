class App {
  constructor() {
    this.messages = []
    this.messagesAdapter = new messagesAdapter()
    this.fetchandLoadMessages()
  }

  fetchandLoadMessages() {
    this.messagesAdapter.getMessages().then(msgs => {
      console.log(msgs)
    })
  }
}