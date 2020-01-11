// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

document.getElementById('button').addEventListener('click', () => {
  console.log('hi');
})

const notificationButton = document.getElementById('button')

notificationButton.addEventListener('click', () => {
  // instead of alert(), you can do new window.Notification()
  new window.Notification('Notification title', {body: 'Notification body'})
  .onclick = () => {
    new window.Notification('2nd notification', {body: 'Say something else'})
  }
})
