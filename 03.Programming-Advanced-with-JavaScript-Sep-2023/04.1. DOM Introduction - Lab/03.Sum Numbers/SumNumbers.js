function calc() {
    const a = document.getElementById('num1');
    const b = document.getElementById('num2');
    const sum = Number(a.value) + Number(b.value);
    if(Number.isNaN(sum)) {
      alert('Please enter numbers!');
    } else {
      document.getElementById('sum').value = sum;
    }
  
  }
  