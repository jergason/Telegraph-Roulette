var notes = require('notes-to-frequencies')

var ctx = new AudioContext()

var oscillator

module.exports = {
  play: function() {
    oscillator = ctx.createOscillator()
    oscillator.frequency.value = notes('G5')
    oscillator.connect(ctx.destination)
    oscillator.start()
  },
  stop: function() {
    oscillator.stop()
    oscillator = null
  }
}
