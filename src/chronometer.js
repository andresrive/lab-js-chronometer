class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (typeof printTimeCallback == "function") return printTimeCallback()
    }, 1000)

  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    let seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    let twoDigit = value.toString()
    if (twoDigit.length == 1) { return `0${twoDigit}` }
    else return twoDigit

  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let twoDMinutes = this.computeTwoDigitNumber(this.getMinutes())
    let twoDSeconds = this.computeTwoDigitNumber(this.getSeconds())

    return `${twoDMinutes}:${twoDSeconds}`

  }
}
