var async = require('async')
var audio = require('./audio')

var messageStartTime = null
var messageQueue = async.queue(handleQueueItem, 1)

var rockerButton = document.querySelector('#telegraph')
var setNameButton = document.querySelector('#set-name')

var socket = io.connect('')

function setWaiting() {
  document.getElementById('status').innerHTML = 'Waiting for a partner...'
}

function setFromName(name) {
  document.getElementById('from-name').innerHTML = name
}

socket.on('waiting',setWaiting)
socket.on('abandoned',setWaiting)

socket.on('matched', function() {
  document.getElementById('status').innerHTML = 'Matched to a random user.'
})

socket.on('message', function (message) {
  console.log('Received', message)
  messageQueue.push(message)
  messageQueue.push({ blank: true })
})

socket.on('fromName', function(name) {
  setFromName(name)
})

socket.on('connect', function () {
  console.log('Socket Connected!')
})

function startMessage (e) {
  e.preventDefault();
  messageStartTime = Date.now()

  window.addEventListener('mouseup', endMessage, false)
  window.addEventListener('touchend', endMessage, false)
}

function endMessage () {
  var message = {
    duration: Date.now() - messageStartTime
  }
  socket.emit('message', message)
  console.log('Sending', message)

  window.removeEventListener('mouseup', endMessage, false)
  window.removeEventListener('touchend', endMessage, false)
}

function setName () {
  var name = document.getElementById('name').value
  socket.emit('setName', name)
}

function handleQueueItem (message, cb) {
  // blank messages are just for a delay
  if (message.blank) {
    setTimeout(function () {
      cb()
    }, 100)
    return
  }

  audio.play()

  setTimeout(function () {
    audio.stop()
    cb()
  }, message.duration)

}

rockerButton.addEventListener('mousedown', startMessage, false)
rockerButton.addEventListener('touchstart', startMessage, false)
setNameButton.addEventListener('click', setName, false)
