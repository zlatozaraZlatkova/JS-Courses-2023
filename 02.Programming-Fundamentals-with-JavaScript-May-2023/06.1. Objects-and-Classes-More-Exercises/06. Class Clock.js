

/*logs three times then stops*/

class Clock {
  constructor({ template }) {

    this.render = () => {
      const date = new Date()
      console.log(template
        .replace('h', zeroLead(date.getHours()))
        .replace('m', zeroLead(date.getMinutes()))
        .replace('s', zeroLead(date.getSeconds()))
      )
      function zeroLead(t) { return t < 10 ? '0' + t : t }
    }

  }

  start = () => {
    this.render()
    this.timerId = setInterval(this.render, 1000)
  }
  stop = () => clearInterval(this.timerId) // NB!

}

const time = new Clock({ template: 'h:m:s' })
time.start()
setTimeout(time.stop, 2023) // NB! 



