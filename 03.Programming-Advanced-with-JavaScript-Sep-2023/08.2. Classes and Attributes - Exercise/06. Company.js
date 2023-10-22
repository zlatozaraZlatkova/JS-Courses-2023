class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    if (!name || !salary || !position || !department || salary < 0) {
      throw new Error('Invalid input!');
    }

    if (!this.departments[department]) {
      this.departments[department] = [];
    }

    this.departments[department].push({ name, salary, position });

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    let highestAvgSalary = 0;
    let bestDepartment;

    for (const [department, data] of Object.entries(this.departments)) {
      let currentAvgSalary = data.reduce((a, b) => a + Number(b.salary), 0) / data.length;

      if (currentAvgSalary > highestAvgSalary) {
        highestAvgSalary = currentAvgSalary;
        bestDepartment = department;
      }
    }

    return `Best Department is: ${bestDepartment}\n` +
      `Average salary: ${highestAvgSalary.toFixed(2)}\n` +
      `${this.departments[bestDepartment]
        .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
        .map(e => `${e.name} ${e.salary} ${e.position}`)
        .join('\n')}`;
  }
}