let onTime = 5000
let offTime = 10000
function setOnTime (v) {
  onTime = v.value * 1000 * 60
}

function setOffTime (v) {
  offTime = v.value * 1000 * 60
}

function speak (text) {
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(text))
}

let isOn = false
let isOff = false
function loop () {
  if (isOn) {
    console.log('start ON')
    speak('ON')
    setTimeout(() => {
      isOff = true
    }, onTime)
    isOn = false
  }

  if (isOff) {
    console.log('start OFF')
    speak('OFF')
    setTimeout(() => {
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

window.speechSynthesis.cancel()

window.onload = () => {
  const onEl = document.querySelector('#on')
  onEl.addEventListener('change', (e) => setOnTime(e.target))

  const offEl = document.querySelector('#off')
  offEl.addEventListener('change', (e) => setOffTime(e.target))

  // initialize
  setOnTime(onEl.children[0])
  setOffTime(offEl.children[0])
}
