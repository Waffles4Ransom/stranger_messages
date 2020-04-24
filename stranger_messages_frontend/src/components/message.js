class Message {
  constructor(msgJSON) {
    this.id = msgJSON.id
    this.name = msgJSON.name 
    this.content = msgJSON.content 
    this.user_id = msgJSON.user.id
    this.username = msgJSON.user.username
  }

  get html() {
    return `<li>${this.name} by ${this.username}</li>`
  }

  get currentHTML() {
   return (`
    <h4>Current Message</h4>
    <p><strong>${this.name} by ${this.username}</strong></p>
    <button data-id="${this.id}">Play Message</button> 
    <button data-id="${this.id}">Reveal Message</button>
   `) 
  }

}