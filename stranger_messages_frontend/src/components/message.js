class Message {
  constructor(params) {
    this.id = params.id
    this.name = params.name 
    this.content = params.content 
    this.user_id = params.user.id
    this.username = params.user.username
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

  get deleteBtn() {
    return `<button id="delete" data-id="${this.id}">Delete Message</button>`
  }

  static alphaSort(a,b) {
    const A = a.username.toLowerCase()
    const B = b.username.toLowerCase()
    let comp = 0 
    if (A > B) {
      comp = 1
    } else if (A < B) {
      comp = -1
    }
    return comp
  }

}