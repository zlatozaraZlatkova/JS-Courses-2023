function hospital(input) {
  let index = 0;
  let period = Number(input[index]);
  index++;

  let treatedPatients = 0;
  let untreatedPatients = 0;
  let doctors = 7;

  for (let i = 1; i <= period; i++) {
    let patients = Number(input[i]);
  
    if (i % 3 == 0 && untreatedPatients > treatedPatients) {
      doctors++;
    }
    if (patients > doctors) {
      untreatedPatients += patients - doctors;
      treatedPatients += doctors;
    } else {
      treatedPatients += patients;
    }
  }

  console.log(`Treated patients: ${treatedPatients}.`);
  console.log(`Untreated patients: ${untreatedPatients}.`);
}
hospital([4, 7, 27, 9, 1]);
