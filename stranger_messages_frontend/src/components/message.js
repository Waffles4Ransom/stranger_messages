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
    <h4>CURRENT MESSAGE</h4>
    <p><strong>${this.name} by ${this.username}</strong></p>
    <p id="reveal_msg" hidden>"${this.content}"</p>
    <button id="play" data-id="${this.id}">Play Message</button> 
    <button id="reveal" data-id="${this.id}">Reveal Message</button>
   `) 
  }

  // playMessage() {
  //   console.log(`Now Playing: ${this.content}`)
  //   // need to:
  //     // 1. santize message and put into array
  //     // 2. light a bulb per letter in array
  //     // 3. disable other action while playing??
  // }

}