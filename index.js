const onTime = 5000
const offTime = 10000

let isOn = false
let isOff = false

let doingOnMessage = false
let doingOffMessage = false

function loop () {
  if (isOn) {
    console.log('start ON')
    window.speechSynthesis.speak(new SpeechSynthesisUtterance('ON'))
    setTimeout(() => {
      console.log('end of ON')
      isOff = true
    }, onTime)
    isOn = false
  }

  if (isOff) {
    console.log('start OFF')
    window.speechSynthesis.speak(new SpeechSynthesisUtterance('OFF'))
    setTimeout(() => {
      console.log('end of OFF')
      isOn = true
    }, offTime)
    isOff = false
  }

  requestAnimationFrame(loop)
}

function start () {
  isOn = true
  loop()
}

console.log('Start')
window.speechSynthesis.cancel()
