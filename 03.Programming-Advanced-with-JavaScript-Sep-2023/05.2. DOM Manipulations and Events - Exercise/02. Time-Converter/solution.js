function attachEventsListeners() {
    const ratios = {
      days: 1,
      hours: 24,
      minutes: 1440,
      seconds: 86400,
    }
  
    function convert(value, unit) {
      const inDays = value / ratios[unit];
      return {
        days: inDays,
        hours: inDays * ratios.hours,
        minutes: inDays * ratios.minutes,
        seconds: inDays * ratios.seconds,
      }
    }
  
   const daysInput = document.getElementById("days");
   const hoursInput = document.getElementById("hours");
   const minutesInput = document.getElementById("minutes");
   const secondsInput = document.getElementById("seconds");
  
    const inputs = Object
      .keys(ratios)
      .map(unit => document.getElementById(unit)) 
      .reduce((a, c) => Object.assign(a, { [c.id]: c }), {}); 
     
    document.querySelector("main").addEventListener("click", onClick);
    
    function onClick(event) {
      if (event.target.tagName === "INPUT" && event.target.type === "button") {
        const inputText = event.target.parentElement.querySelector("input[type=text]");
        const inputValue = Number(inputText.value);
        const unit = inputText.id
  
        const time = convert(inputValue, unit); 
  
        Object.keys(time).forEach(key => inputs[key].value = time[key]); 
  
      }
  
    }
  
  }
  
  