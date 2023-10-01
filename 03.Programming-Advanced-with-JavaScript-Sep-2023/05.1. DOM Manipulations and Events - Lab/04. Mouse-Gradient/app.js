function attachGradientEvents() {
    const gradientField = document.getElementById("gradient");
    const result = document.getElementById("result");
  
    gradientField.addEventListener("mousemove", mouseMoveHandler);
  
    function mouseMoveHandler(event) {
      const gradientFieldLength = gradientField.clientWidth;
      const mouseOffsetX = event.offsetX;
      const alongGradientPer = Math.floor((mouseOffsetX / gradientFieldLength) * 100);
      result.textContent = alongGradientPer + "%";
    }
  }
  