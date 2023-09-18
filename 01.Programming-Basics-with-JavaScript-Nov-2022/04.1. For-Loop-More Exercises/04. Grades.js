function grades(input) {
  let index = 0;
  let studentsCount = Number(input[index]);
  index++;

  let excellentGrade = 0;
  let veryGoodGrade = 0;
  let goodGrade = 0;
  let negativeGrade = 0;
  let totalStudentsGrade = 0;

  for (let i = 1; i <= studentsCount; i++) {
    let studentGrade = Number(input[i]);

    totalStudentsGrade += studentGrade;

    if (studentGrade <= 2.99) {
      negativeGrade++;
    } else if (studentGrade <= 3.99) {
      goodGrade++;
    } else if (studentGrade <= 4.99) {
      veryGoodGrade++;
    } else if (studentGrade >= 5.0) {
      excellentGrade++;
    }
  }
  let topStudentsPr = (excellentGrade / studentsCount) * 100;
  let veryGoodStudentsPr = (veryGoodGrade / studentsCount) * 100;
  let goodStudentsPr = (goodGrade / studentsCount) * 100;
  let badStudentsPr = (negativeGrade / studentsCount) * 100;
  let average = totalStudentsGrade / studentsCount;

  console.log(`Top students: ${topStudentsPr.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${veryGoodStudentsPr.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${goodStudentsPr.toFixed(2)}%`);
  console.log(`Fail: ${badStudentsPr.toFixed(2)}%`);
  console.log(`Average: ${average.toFixed(2)}`);
}
grades([10, 3.0, 2.99, 5.68, 3.01, 4, 4, 6.0, 4.5, 2.44, 5]);

grades([6, 2, 3, 4, 5, 6, 2.2]);
