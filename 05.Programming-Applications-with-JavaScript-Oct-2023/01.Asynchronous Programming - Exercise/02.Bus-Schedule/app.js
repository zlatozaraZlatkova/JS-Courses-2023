function solve() {
    const infoBox = document.getElementsByClassName("info")[0];
    const btnDepart = document.getElementById("depart");
    const btnArrive = document.getElementById("arrive");
  
    //first stop id -> "depot"
    let nextStopId = "depot";
    let stopName;
  
    const url = `http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`;
  
    async function depart() {
      try {
          
        const response = await fetch(url);
        const data = await response.json();
  
        nextStopId = data.next;
        stopName = data.name;
  
        infoBox.textContent = `Next stop ${stopName}`;
  
        btnDepart.disabled = true;
        btnArrive.disabled = false;
        
      } catch (error) {
          infoBox.textContent = `Error`;
  
          btnDepart.disabled = false;
          btnArrive.disabled = false;
      }
    }
  
    async function arrive() {
      infoBox.textContent = `Arriving at ${stopName}`;
     
      btnArrive.disabled = true;
      btnDepart.disabled = false;
      
    }
  
    return {
      depart,
      arrive,
    };
  }
  
  let result = solve();
  