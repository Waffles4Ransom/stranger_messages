document.addEventListener('DOMContentLoaded', () => {
  
  // needed variables
    const msg_container = document.querySelector('#message_container')
    const uform = document.querySelector('#user_form') 
    const mform = document.querySelector('#message_form') 
    const base_url = "http://localhost:3000"

  // fetch call for messages
  fetch(base_url + '/messages')
    .then(res => res.json())
    .then(json => console.log(json))

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

