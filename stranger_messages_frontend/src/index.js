document.addEventListener('DOMContentLoaded', () => {
  const app = new App()

  // needed variables
    const msg_container = document.querySelector('#message_container')
    const uform = document.querySelector('#user_form') 
    const mform = document.querySelector('#message_form') 

  // const users = []

  // event lisenters 
  uform.addEventListener('submit', (e) => {
    e.preventDefault()
    let uname = document.querySelector('#username').value
    console.log(uname)
    // function to create a user
  })
    // message form submit 
    // play message 


})

