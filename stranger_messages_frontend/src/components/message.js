class Message {
  constructor(msgJSON) {
    this.id = msgJSON.id
    this.name = msgJSON.name 
    this.content = msgJSON.content 
    this.user_id = msgJSON.user.id
    this.username = msgJSON.user.username
  }
}