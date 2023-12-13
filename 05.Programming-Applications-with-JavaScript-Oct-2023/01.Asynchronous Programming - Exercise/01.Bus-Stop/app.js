async function getInfo() {
    const stopIdInputRef = document.getElementById("stopId");
    const busId = stopIdInputRef.value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`;
  
    const stopNameRef = document.getElementById("stopName");
    const busesRef = document.getElementById("buses");
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const stopName = data.name;
      stopNameRef.textContent = stopName;
      clearInput();
  
      for (let [busId, time] of Object.entries(data.buses)) {
        const li = document.createElement("li");
        li.textContent = `Bus ${busId} arrives in ${time} minutes`;
        busesRef.appendChild(li);
      }
    } catch (error) {
      clearInput();
      stopNameRef.textContent = `Error`;
    }
  
    function clearInput() {
      stopIdInputRef.value = "";
      busesRef.innerHTML = "";
    }
  }