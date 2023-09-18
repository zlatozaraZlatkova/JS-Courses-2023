function numberEndingIn7() {
  for (let i = 7; i <= 997; i++) {
    if (i % 10 === 7) {
      console.log(i);
    }
  }

  for (let i = 1; i <= 1000; i++) {
    if (i % 10 === 7) {
      console.log(i);
    }
  }
}
numberEndingIn7();
