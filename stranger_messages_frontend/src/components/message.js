class Message {
  constructor(msgJSON) {
    this.id = msgJSON.id
    this.name = msgJSON.name 
    this.content = msgJSON.content 
    this.user_id = msgJSON.user.id
    this.username = msgJSON.user.username
  }

  get html() {
    return `<li data-id="${this.id}">${this.name} by ${this.username}</li>`
  }

  get currentHTML() {
   return (`
    <h3>CURRENT MESSAGE</h3>
    <p><strong>${this.name} by ${this.username}</strong></p>
    <p id="reveal_msg" hidden>"${this.content}"</p>
    <button id="play" data-id="${this.id}">Play Message</button> 
    <button id="reveal" data-id="${this.id}">Reveal Message</button>
   `) 
  }

}