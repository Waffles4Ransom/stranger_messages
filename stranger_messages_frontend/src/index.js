// console.log("TEST")

// const BACKEND_URL = 'http://localhost:3000';
// fetch(`${BACKEND_URL}/test`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));

const BACKEND_URL = 'http://localhost:3000';
fetch(`${BACKEND_URL}/messages`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));