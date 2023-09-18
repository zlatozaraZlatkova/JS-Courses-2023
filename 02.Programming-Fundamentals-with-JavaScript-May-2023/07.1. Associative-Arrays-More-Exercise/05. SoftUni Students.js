function softUniStudents(input) {
  let courses = {};

  for (let command of input) {
    if (command.includes(": ")) {
      addCourse(command);
    } else {
      addStudent(command);
    }
  }

  sortAndPrint();

  function addCourse(command) {
    let [course, capacity] = command.split(": ");
    capacity = +capacity;

    if (!courses.hasOwnProperty(course)) {
      courses[course] = [0];
    }

    courses[course][0] += capacity;
  }

  function addStudent(command) {
    let pattern =
      /(?<username>\w+)\[(?<credits>\d+)\] [a-z]+ [a-z]+ (?<email>\w+@\w+\.\w+) [a-z]+ (?<course>.+)/g;
    let match = pattern.exec(command);

    let username = match.groups.username;
    let credits = match.groups.credits;
    let email = match.groups.email;
    let course = match.groups.course;

    if (courses.hasOwnProperty(course)) {
      if (courses[course][0] - 1 >= 0) {
        courses[course][0]--;
        courses[course].push({ credits, username, email });
      }
    }
  }

  function sortAndPrint() {
    let sortedCourses = Object.entries(courses).sort(
      (a, b) => b[1].length - a[1].length
    );

    for (let course of sortedCourses) {
      let courseName = course.shift();
      course = course[0];
      let placesLeft = course.shift();

      console.log(`${courseName}: ${placesLeft} places left`);

      course
        .sort((a, b) => b.credits - a.credits)
        .forEach((student) =>
          console.log(
            `--- ${student.credits}: ${student.username}, ${student.email}`
          )
        );
    }
  }
}

softUniStudents([
  "JavaBasics: 2",
  "user1[25] with email user1@user.com joins C#Basics",
  "C#Advanced: 3",
  "JSCore: 4",
  "user2[30] with email user2@user.com joins C#Basics",
  "user13[50] with email user13@user.com joins JSCore",
  "user1[25] with email user1@user.com joins JSCore",
  "user8[18] with email user8@user.com joins C#Advanced",
  "user6[85] with email user6@user.com joins JSCore",
  "JSCore: 2",
  "user11[3] with email user11@user.com joins JavaBasics",
  "user45[105] with email user45@user.com joins JSCore",
  "user007[20] with email user007@user.com joins JSCore",
  "user700[29] with email user700@user.com joins JSCore",
  "user900[88] with email user900@user.com joins JSCore",
]);

console.log("-----");
softUniStudents([
  "JavaBasics: 15",
  "user1[26] with email user1@user.com joins JavaBasics",
  "user2[36] with email user11@user.com joins JavaBasics",
  "JavaBasics: 5",
  "C#Advanced: 5",
  "user1[26] with email user1@user.com joins C#Advanced",
  "user2[36] with email user11@user.com joins C#Advanced",
  "user3[6] with email user3@user.com joins C#Advanced",
  "C#Advanced: 1",
  "JSCore: 8",
  "user23[62] with email user23@user.com joins JSCore",
]);
