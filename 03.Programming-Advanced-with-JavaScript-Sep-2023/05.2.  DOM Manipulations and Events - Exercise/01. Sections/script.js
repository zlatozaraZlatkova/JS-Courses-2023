function create(words) {
   const container = document.getElementById("content");
   container.addEventListener("click", onClick);
 
   words.forEach(word => {
     const div = document.createElement("div");
     const ph = document.createElement("p");
     ph.textContent = word;
     ph.style.display = "none";
     div.appendChild(ph);
     container.appendChild(div);
   });
 
   function onClick(event) {
     if (event.target.tagName == "DIV" && event.target.id !== content) {
       event.target.children[0].style.display = "";
     }
 
   }
 
 }