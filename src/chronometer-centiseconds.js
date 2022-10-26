class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null   // ... your code goes here
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 10)  // ... your code goes here
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000)  // ... your code goes here
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60  // ... your code goes here
  }

  getCentiseconds() {
    return this.currentTime % 100   // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value.toString().slice(0)
    } return value.toString().slice(0)  // ... your code goes here
  }

  stop() {
    return clearInterval(this.intervalId)  // ... your code goes here
  }

  reset() {
    this.currentTime = 0 // ... your code goes here
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}` // ... your code goes here

  }
}
