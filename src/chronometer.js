class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{
        this.currentTime ++;
        if(printTimeCallback) {
          printTimeCallback(this.currentTime);
        }
      }, 1000);
    }


  getMinutes() {
    return Math.floor (this.currentTime / 60); 
  }

  getSeconds() {
    return Math.floor (this.currentTime % 60);
    }

  computeTwoDigitNumber(value) {
    if(value >= 0 && value < 10){
      return `0${value}`
    } else if (value >= 10){
      return `${value}`
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
